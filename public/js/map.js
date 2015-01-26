// Small trick to prevent dropdown menu from dismissing when checkbox is pressed
$('.dropdown-menu').on('click', function(e) {
	if($(this).hasClass('dropdown-menu-form')) {
		e.stopPropagation();
	}
});

var width = 960,
	height = 600;

var svg = d3.select("#canvas").append("svg")
	.attr("width", width)
	.attr("height", height);

var path = d3.geo.path()
	.projection(null);

var visited = [];
var visitedId = [];

var colorEnum = {
	EMPTY : "white",
	VISITED : "#BEEB9F",
	STAYED : "#00A388",
	HOVER : "#e5f7d9"
}

var g = svg.append("g");

var zoom = d3.behavior.zoom()
	.translate([0, 0])
	.scale(1)
	.scaleExtent([1, 12])
	.on("zoomstart", disableHover)
	.on("zoom", zoomed)
	.on("zoomend", enableHover);

var tooltip;
var counties, cities, cityLabels, states, roads, nation;
var countyList = d3.select("#list").append("ul");

var NUM_COUNTIES = 3234;
d3.select("#county")
	.html("&nbsp");
var stats = d3.select("#stats");
stats.text("Visited 0 out of " + NUM_COUNTIES + " counties (0%)");

// register input listeners

d3.select("#highway-checkbox")
	.on("change", function() {
		var visibility = this.checked ? "visible" : "none";
		g.selectAll(".road")
			.attr("display", visibility);
		g.selectAll(".road-hover")
			.attr("display", visibility);
	});

d3.select("#city-checkbox")
	.on("change", function() {
		var visibility = this.checked ? "visible" : "none";
		g.selectAll(".city-label")
			.attr("display", visibility);
		g.selectAll(".city")
			.attr("display", visibility);
	});

d3.select("#reset-button")
	.on("click", function() {
		g.transition()
			.duration(750)
			.attr("transform", "translate([0,0]).scale(1)");
	})

// Draw canvas border

svg.append("rect")
	.attr("class", "background")
	.attr("width", width)
	.attr("height", height)

// Pull entry data from server
$.get("/entries", function(data) {
		if(data) {
			for(var i = 0; i < data.length; i++)
			{
				visitedId.push(data[i].id);
				visited.push(data[i]);
			}

			// Shade counties accordingly. 
			g.selectAll(".county")
				.style("fill", function(d) {
					var visitedIndex = visitedId.indexOf(d.id);
					if (visitedIndex != -1) {
						if(visited[visitedIndex].stayed)
							return colorEnum.STAYED;
						else
							return colorEnum.VISITED;
					}
					return colorEnum.EMPTY;
				})

			updateStats();
		}
	});

d3.json("assets/us.json", function(err, us) {
	if(err)
		return console.error(err);

	// Draw counties as features
	counties = g.selectAll(".county")
		.data(topojson.feature(us, us.objects.counties).features)
		.enter()
		.append("path")
		.attr("class", "county")
		.attr("d", path)
		.style("fill", function(d) {
			// Shade county data in case API request takes longer than loading us.json
			var visitedIndex = visitedId.indexOf(d.id);
			if(visitedIndex != -1) {
				if(visited[visitedIndex].stayed)
					return colorEnum.STAYED;
				else
					return colorEnum.VISITED;
			}
			return colorEnum.EMPTY;		// setting fill color this way increases performance for reasons I dont understand
		})
		.style("stroke", "#ccc")
		.style("stroke-width", "0.5px");

	// Draw state interior borders
	states = g.append("path")
		.datum(topojson.mesh(us, us.objects.states, function(a, b){ return a !== b}))
		.attr("class", "border")
		.attr("d", path)
		.style("fill", "none")
		.style("stroke", "#000")
		.style("stroke-width", "1px")
		.style("z-index", "100");

	// Draw state exterior borders
	nation = g.append("path")
		.datum(topojson.mesh(us, us.objects.states, function(a, b) {
			return a == b;
		}))
		.attr("class", "border")
		.attr("d", path)
		.style("fill", "none")
		.style("stroke", "#000")
		.style("stroke-width", "1px");

	// Handle mouse interactions with counties
	g.selectAll(".county")
		.on("mouseover", function(d) {	
			d3.select("#county")
				.text(function() {
					return d.properties.NAME;
				});

			if(visitedId.indexOf(d.id) === -1)
				d3.select(this)
					.style("fill", colorEnum.HOVER);
		})
		.on("click", function(d) {
			if(d3.event.defaultPrevented) return;
			d3.select(this)
				.transition()
				.duration(500)
				.style("fill", toggleStatus(d));
		})
		.on("mouseout", function(d) {
			if(visitedId.indexOf(d.id) === -1)
				d3.select(this)
					.style("fill", colorEnum.EMPTY);
		});


	// function to toggle county status between stayed, visited, empty
	var toggleStatus = function(d) {
		if(visitedId.indexOf(d.id) === -1)
		{
			visitedId.push(d.id);
			visited.push({
				"id" : d.id,
				"name" : d.properties.NAME,
				"stayed" : true
			});
			
			// Post to API
			$.ajax({
					url : "/entries",
					type : "POST",
					data : {id: d.id, county:d.properties.NAME, stayed:true},
					success: function(err, data) {

							// add to county list
							countyList
								.append("li")
								.text(function() {
									return d.properties.NAME;
								})
								.attr("id", function() {
									return d.id;
								});

							updateStats();
						}
			});

			
			return colorEnum.STAYED;
		} else {
			var index = visitedId.indexOf(d.id);
			if(visited[index].stayed)
			{
				// Put updated entry to API
				// Post to API
				$.ajax({
						url : "/entries",
						type : "PUT",
						data : {id: d.id, county:d.properties.NAME, stayed:false},
				});

				visited[index].stayed = false;
				return colorEnum.VISITED;
			} else {
				// send delete request
				$.ajax({
					url : "/entries",
					type : "DELETE",
					data : {id: d.id},
					success: function(err, data) {
							// remove from county list
							d3.select("#" + d.id)
								.data([])
								.exit()
								.remove();
							visited.splice(index, 1);
							visitedId.splice(index, 1);
							updateStats();
							
						}
				});
				return colorEnum.EMPTY;
			}
		}
	}

	// Draw interstate highway overlay
	d3.json("assets/roads.json", function(err, us) {
		if(err) 
			return console.error(err);

		roads = g.selectAll(".road")
			.data(topojson.feature(us, us.objects.roads).features)
			.enter()
			.append("path")
			.attr("class", "road")
			.attr("d", path)
			.attr("display", "none")
			.style("fill", function(d) {
				return "none";
			})
			.style("stroke", "#FF6138")
			.style("stroke-width", "0.5px")
			.style("z-index", "100");


			// Removing road hover ability until can resolve the issue where county hover is being obstructed by road hover
		// g.selectAll(".road-hover")
		// 	.data(topojson.feature(us, us.objects.roads).features)
		// 	.enter()
		// 	.append("path")
		// 	.attr("class", "road-hover")
		// 	.attr("d", path)
		// 	.attr("display", "none")
		// 	.style("stroke", "black")
		// 	.style("opacity", "0")
		// 	.style("stroke-width", "13px")
		// 	.style("fill", "none");

		// define mouseover functionality for road overlay
		g.selectAll(".road-hover")
			.on("mouseover", function(d) { roadMouseover(d) })
			.on("mouseout", function(d) { roadMouseout(d) });
	});

	// Draw city name overlay
	d3.json("assets/cities.json", function(err, us) {
		if(err)
			return console.error(err);

		
		cities = g.selectAll(".city")
			.data(topojson.feature(us, us.objects.places).features)
			.enter()
			.append("path")
			.attr("d", path.pointRadius(2))
			.attr("class", "city")
			.attr("display", "none");

		cityLabels = g.selectAll(".city-label")
			.data(topojson.feature(us, us.objects.places).features)
			.enter()
			.append("text")
			.attr("class", "city-label")
			.attr("display", "none")
			.attr("transform", function(d) {
				return "translate(" + d.geometry.coordinates + ")";
			})
			.attr("dy", "0.35em")
			.attr("x", 6)
			.text(function(d) {
				return d.properties.name;
			});		

	});
	
	svg.call(zoom)	

	// disable double click zoom
	svg.on("dblclick.zoom", null);

});

function zoomed() {
	var sqrtScale = Math.sqrt(d3.event.scale);
	counties.style("stroke-width", 0.5 / d3.event.scale + "px");
	states.style("stroke-width", 1 / d3.event.scale + "px");
	nation.style("stroke-width", 1 / d3.event.scale + "px");
	cities.attr("d", path.pointRadius(2/sqrtScale));
	cityLabels.style("font-size", 10 / sqrtScale + "px")
		.attr("dy", 0.35 / d3.event.scale + "em")
		.attr("x", 6 / d3.event.scale);
	roads.style("stroke-width", 1 / d3.event.scale + "px");
	g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
	
}

function disableHover() {
	g.selectAll(".road-hover")
		.on("mouseover", null)
		.on("mouseout", null);
}

function enableHover() {
	g.selectAll(".road-hover")
		.on("mouseover", roadMouseover)
		.on("mouseout", roadMouseout);
}


function roadMouseover(d) {
	g.selectAll(".road")
		.transition()
		.duration(500)
		.style("stroke", function(d2) {
			if(d.properties.name == d2.properties.name) {
				return "blue";
			} else {
				return "#FF6138";
			}
		});
	d3.select("#road")
		.text("I-" + d.properties.name)
}

function roadMouseout(d) {
	g.selectAll(".road")
		.transition()
		.duration(500)
		.style("stroke", "#FF6138");
	d3.select("#road")
		.text("")
}

function updateStats() {
	stats.text("Visited " + visited.length + " out of " + NUM_COUNTIES + " counties (" + (visited.length*100/NUM_COUNTIES).toFixed(3) + "%)");
}