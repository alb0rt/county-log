# Map Genneration

topojson -o counties.json --projection='width=960, height=600, d3.geo.albersUsa().scale(1280).translate([width/2, height/2]);' --simplify=.6 --filter=none --id-property NAME+COUNTYNS --properties NAME --properties COUNTYFP --properties STATEFP -- counties=cb_2013_us_county_5m.shp

topojson-merge -o states.json --io=counties --oo=states --key='d.id.STATEFP' -- counties.json

topojson-merge -o us.json --io=states --oo=nation -- states.json


# Road overlay generation


ogr2ogr -f GeoJSON -where "sov_a3 = 'USA' AND level = 'Interstate'"  roads.json ne_10m_roads.shp

topojson -o r.json --id-property=uident --properties=scalerank --properties=type --properties=name --projection="width = 960, height = 600, d3.geo.albersUsa().scale(1280).translate([width/2, height/2])" --simplify=0.5  -- roads.json
