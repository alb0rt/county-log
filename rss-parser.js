var feedParser  = require('feedparser')
	, fs 		= require('fs')
	, request 	= require('request');


function findCoordinates(place) {
	var us = JSON.parse(fs.readFileSync('places.json'));
	var placeData = us.features;
	var coordinates;


	for(var i = 0; i < placeData.length; i++) {
		if(placeData[i].properties.NAME == place) {
			coordinates = placeData[i].geometry.coordinates;
		}
	}

	return coordinates;
}

function dealExists(data, guid) {

	for(var i = 0; i < data.length; i++) {
		if(data.arcs.features[i].properties.guid === guid)
			return true;
	}

	return false
}

function createPathData(list){
	fs.readFile('final-output.json', function(err, data) {
		if(err) {
			if (err.code === "ENOENT") {
				console.log("final-output.json not found");
			} else {
				throw err;
			}
		}

		var out;


		if(data)
			out = JSON.parse(data);
		else{
			var out = {
				"type" : "Topology",
				"places": {
					"type": "GeometryCollection",
					"geometries": []
				},
				"arcs" : {
					"type": "FeatureCollection",
					"features" : [],
				},
				
				"transform": {
					"scale": [
						0.0358960334509451,
						0.005251163636663664
					],
					"translate": [
						-179.14350338399993,
						18.90611714300016
					]
				}
			};
		}


		for(var i = 0; i < list.length; i++) {

			var dupe = false;

			// check for duplicates
			for(var j = 0; j < out.arcs.features.length; j++) {
				if(out.arcs.features[j].properties.guid === list[i].guid){
					dupe = true;
					console.log("Deal exists");
				}
			}

			if(!dupe) {
				var fromCoordinates = findCoordinates(list[i].from);
				var toCoordinates = findCoordinates(list[i].to);
				
				// only add to final output if coordinates for both places are known
				if(fromCoordinates && toCoordinates) {
					out.arcs.features.push({
						"type" : "Feature",
						"geometry" : {
							"type" : "LineString",
							"coordinates" : [
								fromCoordinates, 
								toCoordinates
							]
						},
						"properties" : list[i]
					});

					out.places.geometries.push({
						"type": "Point",
						"properties": {
							"name": list[i].from
						},
						"coordinates" : fromCoordinates
					});

					out.places.geometries.push({
						"type": "Point",
						"properties": {
							"name": list[i].to
						},
						"coordinates" : toCoordinates
					});
				}
			}
		}

			fs.writeFile('flights.json', JSON.stringify(out, null, 4), function(err) {
					if(err)
						console.error("Error in writing JSON to disk");

					console.log("flights.json successfully written to disk");
			});
		


	});
}

function parseTfdRss() {

	var req = request('http://feeds.feedburner.com/theflightdeal')
		, feedparser = new feedParser(); 

	var dealList = [];

	req.on('error', function(error) {
		console.error(error);
	});

	req.on('response', function(res) {
		var stream = this;

		if(res.statusCode != 200)
			return this.emit('error', new Error('Bad status code'));

		stream.pipe(feedparser);
	});

	feedparser.on('error', function(error) {
		console.error(error);
	});

	feedparser.on('readable', function() {
		var stream = this
			, meta = this.meta;

		while ( item = stream.read()) {
			var title = parseTitle(item.title, item.pubDate, item.guid);
			if(title) {
				dealList.push(title);
			}
		}
	});

	feedparser.on('end', function() {
		console.log("RSS Feed successfully parsed");
		createPathData(dealList);
	});

	var parseTitle = function(title, date, guid) {

		var json;
		var regex = /^(United|Delta|jetBlue|American) – ([^:]*): ([^–]*)– ([^(.,]*)/;
		var parsedTitle = regex.exec(title);
		if(parsedTitle) {
			var slice = parsedTitle.slice(1, 5);
			if(slice.length == 4){
				json = {airline : "", price : "", from : "", to : "", date: "", guid: ""};
				json.airline = slice[0];
				json.price = slice[1];
				// "from" field may have a bug that results in extra blank space at end of string
				var from = slice[2];
				if(from.substring(from.length-1, from.length) == " ") {
					json.from = from.substring(0, from.length-1);
				} else {
					json.from = slice[2];
				}
				json.to = slice[3];
				json.date = date;
				json.guid = guid;
			}
		}

		return json;
	}
}


parseTfdRss();

