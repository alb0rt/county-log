var app = angular.module('map_search', []);

app.controller('search_controller',function($scope,$http){

      $scope.cities = [
        {
          "type": "Point",
          "properties": {
            "name": "Faribault",
            "state": "Minnesota",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5706,
            2671
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Mankato",
            "state": "Minnesota",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5582,
            2725
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Albert Lea",
            "state": "Minnesota",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5693,
            2922
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Willmar",
            "state": "Minnesota",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5402,
            2356
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Brainerd",
            "state": "Minnesota",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5538,
            1873
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Crookston",
            "state": "Minnesota",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5143,
            1330
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hardin",
            "state": "Montana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3311,
            1928
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Glendive",
            "state": "Montana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3822,
            1481
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Dillon",
            "state": "Montana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2455,
            1922
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Polson",
            "state": "Montana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2323,
            908
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Devils Lake",
            "state": "North Dakota",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4782,
            1188
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Burley",
            "state": "Idaho",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2152,
            2894
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wallace",
            "state": "Idaho",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2032,
            895
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kennewick",
            "state": "Washington",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1452,
            1179
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Centralia",
            "state": "Washington",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            877,
            723
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Glendale",
            "state": "Arizona",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2061,
            6435
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Safford",
            "state": "Arizona",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2520,
            6850
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Casa Grande",
            "state": "Arizona",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2119,
            6729
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Mesa",
            "state": "Arizona",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2144,
            6520
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lake Havasu City",
            "state": "Arizona",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1693,
            5960
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Berkeley",
            "state": "California",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            405,
            4098
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "National City",
            "state": "California",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1065,
            6475
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Mendocino",
            "state": "California",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            232,
            3429
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Paso Robles",
            "state": "California",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            551,
            5078
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Riverside",
            "state": "California",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1074,
            5969
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Delano",
            "state": "California",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            828,
            5139
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "San Mateo",
            "state": "California",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            377,
            4214
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Vallejo",
            "state": "California",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            423,
            4009
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Glenwood Springs",
            "state": "Colorado",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3183,
            4338
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Aurora",
            "state": "Colorado",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3642,
            4358
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Greeley",
            "state": "Colorado",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3670,
            4078
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tonopah",
            "state": "Nevada",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1326,
            4403
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Deming",
            "state": "New Mexico",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2888,
            7156
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Truth or Consequences",
            "state": "New Mexico",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3013,
            6837
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Las Vegas",
            "state": "New Mexico",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3471,
            5948
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Farmington",
            "state": "New Mexico",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2941,
            5393
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Springfield",
            "state": "Oregon",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            695,
            1716
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tillamook",
            "state": "Oregon",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            650,
            1124
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ontario",
            "state": "Oregon",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1688,
            2143
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "La Grande",
            "state": "Oregon",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1572,
            1581
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Richfield",
            "state": "Utah",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2293,
            4434
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Nephi",
            "state": "Utah",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2376,
            4084
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lander",
            "state": "Wyoming",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3034,
            3009
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Powell",
            "state": "Wyoming",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3091,
            2264
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Paragould",
            "state": "Arkansas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6291,
            5858
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Iowa City",
            "state": "Iowa",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6031,
            3679
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ottumwa",
            "state": "Iowa",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5881,
            3943
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Spencer",
            "state": "Iowa",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5389,
            3127
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ft. Dodge",
            "state": "Iowa",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5559,
            3373
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hutchinson",
            "state": "Kansas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4883,
            5113
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kansas City",
            "state": "Kansas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5492,
            4705
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lawrence",
            "state": "Kansas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5378,
            4767
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Garden City",
            "state": "Kansas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4336,
            5117
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Manhattan",
            "state": "Kansas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5133,
            4676
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hays",
            "state": "Kansas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4630,
            4782
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Goodland",
            "state": "Kansas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4198,
            4565
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Independence",
            "state": "Missouri",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5532,
            4713
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kirksville",
            "state": "Missouri",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5858,
            4266
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kearney",
            "state": "Nebraska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4689,
            4071
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Grand Island",
            "state": "Nebraska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4820,
            3990
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Alliance",
            "state": "Nebraska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4035,
            3466
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bartlesville",
            "state": "Oklahoma",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5245,
            5636
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Enid",
            "state": "Oklahoma",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4884,
            5769
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ardmore",
            "state": "Oklahoma",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5020,
            6640
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "McAlester",
            "state": "Oklahoma",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5286,
            6348
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Stillwater",
            "state": "Oklahoma",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5037,
            5875
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lead",
            "state": "South Dakota",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3922,
            2570
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Slidell",
            "state": "Louisiana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6519,
            8100
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lake Charles",
            "state": "Louisiana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5814,
            8174
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Metairie",
            "state": "Louisiana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6447,
            8221
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "New Iberia",
            "state": "Louisiana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6103,
            8243
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bryan",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5165,
            8013
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "San Marcos",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4840,
            8314
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Longview",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5493,
            7297
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "McAllen",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4760,
            9737
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Harlingen",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4876,
            9743
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Alice",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4802,
            9141
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "New Braunfels",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4801,
            8385
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cleburne",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4962,
            7355
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Brownwood",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4639,
            7594
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Alpine",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3668,
            8032
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Van Horn",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3445,
            7733
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Big Spring",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4143,
            7349
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Vernon",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4597,
            6636
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Childress",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4419,
            6517
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hereford",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4000,
            6323
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Dalhart",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3997,
            5836
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Texas City",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5457,
            8502
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Pasadena",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5418,
            8406
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Baytown",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5455,
            8368
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Arlington",
            "state": "Texas",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5037,
            7226
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "New London",
            "state": "Connecticut",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9441,
            2964
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Stamford",
            "state": "Connecticut",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9210,
            3179
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Waterbury",
            "state": "Connecticut",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9267,
            2957
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "New Bedford",
            "state": "Massachusetts",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9621,
            2765
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Springfield",
            "state": "Massachusetts",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9314,
            2707
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Salem",
            "state": "Massachusetts",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9577,
            2433
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Pittsfield",
            "state": "Massachusetts",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9179,
            2630
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Montpelier",
            "state": "Vermont",
            "SCALERANK": 8,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            9189,
            1896
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Auburn",
            "state": "Alabama",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7338,
            7068
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Florence",
            "state": "Alabama",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6855,
            6285
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Winter Haven",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8244,
            8675
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Melbourne",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8476,
            8592
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Homestead",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8604,
            9580
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Sanford",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8310,
            8357
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Miami Beach",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8665,
            9430
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Coral Springs",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8618,
            9263
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Port Charlotte",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8201,
            9085
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Spring Hill",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8058,
            8541
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Palm Coast",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8295,
            8067
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Palatka",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8203,
            8047
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Leesburg",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8185,
            8381
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lake City",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7982,
            7887
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Crestview",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7165,
            7826
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Panama City",
            "state": "Florida",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7367,
            8025
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Dalton",
            "state": "Georgia",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7379,
            6210
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Marietta",
            "state": "Georgia",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7485,
            6510
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Waycross",
            "state": "Georgia",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8005,
            7479
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "La Grange",
            "state": "Georgia",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7415,
            6886
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Southaven",
            "state": "Mississippi",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6402,
            6274
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Meridian",
            "state": "Mississippi",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6702,
            7262
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Laurel",
            "state": "Mississippi",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6626,
            7532
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Spartanburg",
            "state": "South Carolina",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7958,
            6013
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Orangeburg",
            "state": "South Carolina",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8218,
            6523
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Galesburg",
            "state": "Illinois",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6246,
            3940
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Joliet",
            "state": "Illinois",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6638,
            3666
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cape Girardeau",
            "state": "Illinois",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6458,
            5350
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Rockford",
            "state": "Illinois",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6455,
            3399
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Evanston",
            "state": "Illinois",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6699,
            3454
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Rock Island",
            "state": "Illinois",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6209,
            3729
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Elgin",
            "state": "Illinois",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6596,
            3471
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Richmond",
            "state": "Indiana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7253,
            4235
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Terre Haute",
            "state": "Indiana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6805,
            4454
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lafayette",
            "state": "Indiana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6880,
            4068
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Marion",
            "state": "Indiana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7095,
            3977
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "South Bend",
            "state": "Indiana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6962,
            3556
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "New Albany",
            "state": "Indiana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7124,
            4858
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Elkhart",
            "state": "Indiana",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7011,
            3548
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hopkinsville",
            "state": "Kentucky",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6847,
            5473
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "London",
            "state": "Kentucky",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7479,
            5258
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Madisonville",
            "state": "Kentucky",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6835,
            5290
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Rocky Mount",
            "state": "North Carolina",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8704,
            5412
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Salisbury",
            "state": "North Carolina",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8209,
            5663
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Durham",
            "state": "North Carolina",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8489,
            5453
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lumberton",
            "state": "North Carolina",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8530,
            5988
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Zanesville",
            "state": "Ohio",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7766,
            4080
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Mansfield",
            "state": "Ohio",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7648,
            3784
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bowling Green",
            "state": "Ohio",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7428,
            3589
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Springfield",
            "state": "Ohio",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7446,
            4160
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lancaster",
            "state": "Ohio",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7668,
            4191
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Johnson City",
            "state": "Tennessee",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7830,
            5503
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kingsport",
            "state": "Tennessee",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7783,
            5421
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Columbia",
            "state": "Tennessee",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6961,
            5948
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Barlett",
            "state": "Tennessee",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6430,
            6172
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Blacksburg",
            "state": "Virginia",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8159,
            5056
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Harrisonburg",
            "state": "Virginia",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8393,
            4504
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Petersburg",
            "state": "Virginia",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8716,
            4892
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hampton",
            "state": "Virginia",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8920,
            4904
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Sheboygan",
            "state": "Wisconsin",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6661,
            2791
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Waukesha",
            "state": "Wisconsin",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6587,
            3091
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "La Crosse",
            "state": "Wisconsin",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6057,
            2839
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Eau Claire",
            "state": "Wisconsin",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6001,
            2449
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tomah",
            "state": "Wisconsin",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6180,
            2756
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Janesville",
            "state": "Wisconsin",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6456,
            3237
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Appleton",
            "state": "Wisconsin",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6534,
            2606
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Parkersburg",
            "state": "West Virginia",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7872,
            4321
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "White Sulphur Springs",
            "state": "West Virginia",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8157,
            4832
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Clarksburg",
            "state": "West Virginia",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8092,
            4257
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Dover",
            "state": "Delaware",
            "SCALERANK": 8,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            8963,
            4035
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "St. Charles",
            "state": "Maryland",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8736,
            4335
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Annapolis",
            "state": "Maryland",
            "SCALERANK": 8,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            8798,
            4164
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hagerstown",
            "state": "Maryland",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8547,
            3981
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Paterson",
            "state": "New Jersey",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9108,
            3272
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Saratoga Springs",
            "state": "New York",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9055,
            2423
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Poughkeepsie",
            "state": "New York",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9108,
            2958
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Plattsburg",
            "state": "New York",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9019,
            1790
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Beaver Falls",
            "state": "Pennsylvania",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8037,
            3688
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Altoona",
            "state": "Pennsylvania",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8387,
            3680
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Williamsport",
            "state": "Pennsylvania",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8598,
            3325
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lancaster",
            "state": "Pennsylvania",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8779,
            3746
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Allentown",
            "state": "Pennsylvania",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8893,
            3481
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Waterville",
            "state": "Maine",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9652,
            1577
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Calais",
            "state": "Maine",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9999,
            1158
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Houlton",
            "state": "Maine",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9836,
            850
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Benton Harbor",
            "state": "Michigan",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6915,
            3394
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Battle Creek",
            "state": "Michigan",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7132,
            3275
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bay City",
            "state": "Michigan",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7318,
            2737
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Alpena",
            "state": "Michigan",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7350,
            2154
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Iron Mountain",
            "state": "Michigan",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6560,
            1996
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ironwood",
            "state": "Michigan",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6203,
            1792
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Sand Point",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            714,
            9754
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hydaburg",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2015,
            9535
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Mekoryuk",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            524,
            9015
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Atqasuk",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            926,
            7719
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Port Heiden",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            812,
            9547
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Perryville",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            782,
            9684
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Dillingham",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            831,
            9261
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Goodnews Bay",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            699,
            9233
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Nyac",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            783,
            8988
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tununak",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            565,
            8999
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Mountain Village",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            645,
            8813
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Emmonak",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            623,
            8712
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kaltag",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            852,
            8542
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Teller",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            593,
            8360
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Koyukuk",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            891,
            8471
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kobuk",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            928,
            8199
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Selawik",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            823,
            8228
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Talkeetna",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1173,
            8818
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Whittier",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1238,
            9022
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Montana",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1175,
            8851
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lake Minchumina",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1084,
            8612
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cantwell",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1210,
            8668
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Gulkana",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1355,
            8797
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Eagle",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1474,
            8418
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Nenana",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1198,
            8510
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Big Delta",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1318,
            8546
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Allakaket",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1067,
            8247
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tanana",
            "state": "Alaska",
            "SCALERANK": 8,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1090,
            8436
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Virginia",
            "state": "Minnesota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5802,
            1410
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Winona",
            "state": "Minnesota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5986,
            2747
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Rochester",
            "state": "Minnesota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5844,
            2768
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lakeville",
            "state": "Minnesota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5708,
            2530
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ely",
            "state": "Minnesota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5914,
            1257
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Moorhead",
            "state": "Minnesota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5120,
            1677
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "St. Cloud",
            "state": "Minnesota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5548,
            2182
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Miles City",
            "state": "Montana",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3621,
            1721
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bozeman",
            "state": "Montana",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2744,
            1818
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Glasgow",
            "state": "Montana",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3538,
            1016
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Dickinson",
            "state": "North Dakota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4131,
            1609
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Jamestown",
            "state": "North Dakota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4799,
            1655
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Williston",
            "state": "North Dakota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4018,
            1102
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lihue",
            "state": "Hawaii",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2475,
            8789
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wahiawa",
            "state": "Hawaii",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2775,
            8976
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wailuku",
            "state": "Hawaii",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3115,
            9213
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Montpelier",
            "state": "Idaho",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2573,
            3099
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Twin Falls",
            "state": "Idaho",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2039,
            2848
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Caldwell",
            "state": "Idaho",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1718,
            2300
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Salmon",
            "state": "Idaho",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2253,
            1877
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Coeur d'Alene",
            "state": "Idaho",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1907,
            771
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Richland",
            "state": "Washington",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1432,
            1139
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bellingham",
            "state": "Washington",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1083,
            0
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Longview",
            "state": "Washington",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            841,
            940
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Walla Walla",
            "state": "Washington",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1572,
            1285
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Aberdeen",
            "state": "Washington",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            759,
            562
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bremerton",
            "state": "Washington",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            982,
            428
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Everett",
            "state": "Washington",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1076,
            317
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bullhead City",
            "state": "Arizona",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1674,
            5694
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Winslow",
            "state": "Arizona",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2415,
            5853
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Gila Bend",
            "state": "Arizona",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1932,
            6649
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tombstone",
            "state": "Arizona",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2410,
            7266
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Willcox",
            "state": "Arizona",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2476,
            7068
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Scottsdale",
            "state": "Arizona",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2129,
            6410
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kingman",
            "state": "Arizona",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1774,
            5709
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Grand Canyon",
            "state": "Arizona",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2173,
            5483
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Arcata",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            292,
            2812
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Stockton",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            587,
            4146
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Barstow",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1197,
            5629
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Victorville",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1127,
            5749
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Pasadena",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            945,
            5832
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Visalia",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            847,
            4919
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "El Centro",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1371,
            6535
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "San Luis Obispo",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            535,
            5210
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Merced",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            692,
            4458
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Yuba City",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            604,
            3673
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Redding",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            563,
            3065
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Santa Rosa",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            367,
            3845
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Oceanside",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1048,
            6248
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Modesto",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            622,
            4285
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Irvine",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            977,
            6037
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ukiah",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            324,
            3537
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Needles",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1651,
            5806
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bishop",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1076,
            4591
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Palm Springs",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1231,
            6092
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Santa Maria",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            556,
            5358
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tulare",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            835,
            4962
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Mt. Shasta",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            625,
            2798
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Crescent City",
            "state": "California",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            334,
            2476
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fort Collins",
            "state": "Colorado",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3616,
            4014
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Pueblo",
            "state": "Colorado",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3643,
            4916
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lamar",
            "state": "Colorado",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4012,
            5041
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Trinidad",
            "state": "Colorado",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3642,
            5353
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Gunnison",
            "state": "Colorado",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3227,
            4742
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Durango",
            "state": "Colorado",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3014,
            5202
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Montrose",
            "state": "Colorado",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3053,
            4735
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Craig",
            "state": "Colorado",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3170,
            3952
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Boulder",
            "state": "Colorado",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3571,
            4212
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Boulder City",
            "state": "Nevada",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1663,
            5358
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Winnemucca",
            "state": "Nevada",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1393,
            3258
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Roswell",
            "state": "New Mexico",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3558,
            6827
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Clovis",
            "state": "New Mexico",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3836,
            6468
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Las Cruces",
            "state": "New Mexico",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3085,
            7174
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hobbs",
            "state": "New Mexico",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3818,
            7130
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Socorro",
            "state": "New Mexico",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3109,
            6490
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Gallup",
            "state": "New Mexico",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2799,
            5849
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Raton",
            "state": "New Mexico",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3649,
            5462
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tucumcari",
            "state": "New Mexico",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3750,
            6156
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Roseburg",
            "state": "Oregon",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            576,
            1998
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Pendleton",
            "state": "Oregon",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1478,
            1405
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "John Day",
            "state": "Oregon",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1380,
            1869
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Grants Pass",
            "state": "Oregon",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            528,
            2292
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Corvallis",
            "state": "Oregon",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            680,
            1498
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Albany",
            "state": "Oregon",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            715,
            1495
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Astoria",
            "state": "Oregon",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            702,
            853
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Logan",
            "state": "Utah",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2457,
            3301
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Parowan",
            "state": "Utah",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2119,
            4755
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kanab",
            "state": "Utah",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2141,
            5078
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Monticello",
            "state": "Utah",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2762,
            4911
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Moab",
            "state": "Utah",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2748,
            4630
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Price",
            "state": "Utah",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2556,
            4175
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cedar City",
            "state": "Utah",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2069,
            4806
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Vernal",
            "state": "Utah",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2816,
            3900
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ogden",
            "state": "Utah",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2413,
            3489
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Green River",
            "state": "Wyoming",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2863,
            3491
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Rawlins",
            "state": "Wyoming",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3263,
            3468
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Douglas",
            "state": "Wyoming",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3610,
            3149
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Riverton",
            "state": "Wyoming",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3098,
            2946
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Thermopolis",
            "state": "Wyoming",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3148,
            2713
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Gillette",
            "state": "Wyoming",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3626,
            2553
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Jonesboro",
            "state": "Arkansas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6255,
            5945
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Texarkana",
            "state": "Arkansas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5629,
            6925
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Pine Bluff",
            "state": "Arkansas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6023,
            6597
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hot Springs",
            "state": "Arkansas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5815,
            6502
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fort Smith",
            "state": "Arkansas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5550,
            6166
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fayetteville",
            "state": "Arkansas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5593,
            5899
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Conway",
            "state": "Arkansas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5927,
            6265
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "El Dorado",
            "state": "Arkansas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5902,
            7002
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Davenport",
            "state": "Iowa",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6199,
            3706
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Burlington",
            "state": "Iowa",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6115,
            4007
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Dubuque",
            "state": "Iowa",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6173,
            3338
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Waterloo",
            "state": "Iowa",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5880,
            3363
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Sioux City",
            "state": "Iowa",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5171,
            3380
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Council Bluffs",
            "state": "Iowa",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5266,
            3865
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ames",
            "state": "Iowa",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5660,
            3547
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Mason City",
            "state": "Iowa",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5725,
            3113
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Emporia",
            "state": "Kansas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5207,
            4986
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Salina",
            "state": "Kansas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4945,
            4817
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Dodge City",
            "state": "Kansas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4491,
            5213
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Coffeyville",
            "state": "Kansas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5311,
            5522
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "St. Charles",
            "state": "Missouri",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6252,
            4789
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Poplar Bluff",
            "state": "Missouri",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6300,
            5581
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Joplin",
            "state": "Missouri",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5521,
            5500
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Columbia",
            "state": "Missouri",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5914,
            4750
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "St. Joseph",
            "state": "Missouri",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5451,
            4449
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "McCook",
            "state": "Nebraska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4406,
            4246
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Norfolk",
            "state": "Nebraska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4989,
            3562
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "North Platte",
            "state": "Nebraska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4391,
            3880
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Sidney",
            "state": "Nebraska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3999,
            3839
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Scottsbluff",
            "state": "Nebraska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3892,
            3540
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Chadron",
            "state": "Nebraska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4024,
            3179
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lawton",
            "state": "Oklahoma",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4772,
            6469
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Norman",
            "state": "Oklahoma",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4981,
            6229
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Muskogee",
            "state": "Oklahoma",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5362,
            6028
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ponca City",
            "state": "Oklahoma",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5036,
            5650
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Shawnee",
            "state": "Oklahoma",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5061,
            6186
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Woodward",
            "state": "Oklahoma",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4595,
            5741
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Guymon",
            "state": "Oklahoma",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4204,
            5612
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Yankton",
            "state": "South Dakota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4999,
            3228
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Brookings",
            "state": "South Dakota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5107,
            2674
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Mitchell",
            "state": "South Dakota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4893,
            2900
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Aberdeen",
            "state": "South Dakota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4825,
            2215
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Mobridge",
            "state": "South Dakota",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4500,
            2167
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Houma",
            "state": "Louisiana",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6335,
            8383
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Monroe",
            "state": "Louisiana",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6017,
            7271
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Conroe",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5353,
            8153
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Nacogdoches",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5513,
            7647
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Eagle Pass",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4301,
            8740
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Edinburg",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4775,
            9699
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kingsville",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4847,
            9233
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Port Arthur",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5669,
            8307
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Huntsville",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5333,
            7993
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Killeen",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4889,
            7835
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lufkin",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5499,
            7751
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Del Rio",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4223,
            8480
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "San Angelo",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4342,
            7671
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Sherman",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5121,
            6855
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Beaumont",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5632,
            8235
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bay City",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5248,
            8671
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Port Lavaca",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5109,
            8812
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Falfurrias",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4784,
            9342
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Beeville",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4873,
            8889
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fort Stockton",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3837,
            7845
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Pecos",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3722,
            7626
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Dumas",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4099,
            5925
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Denton",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5017,
            7018
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Midland",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4015,
            7420
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Temple",
            "state": "Texas",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4964,
            7843
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "New Haven",
            "state": "Connecticut",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9305,
            3030
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lowell",
            "state": "Massachusetts",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9497,
            2423
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Worcester",
            "state": "Massachusetts",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9438,
            2595
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Manchester",
            "state": "New Hampshire",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9452,
            2296
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Newport",
            "state": "Rhode Island",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9568,
            2855
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Dothan",
            "state": "Alabama",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7393,
            7603
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tuscaloosa",
            "state": "Alabama",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6915,
            6895
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Gadsden",
            "state": "Alabama",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7198,
            6540
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Enterprise",
            "state": "Alabama",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7299,
            7579
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Selma",
            "state": "Alabama",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7036,
            7198
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Coral Gables",
            "state": "Florida",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8635,
            9476
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cape Coral",
            "state": "Florida",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8242,
            9230
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Naples",
            "state": "Florida",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8297,
            9397
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fort Pierce",
            "state": "Florida",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8560,
            8819
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kissimmee",
            "state": "Florida",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8302,
            8555
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Titusville",
            "state": "Florida",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8415,
            8400
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "St. Augustine",
            "state": "Florida",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8263,
            7935
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ocala",
            "state": "Florida",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8119,
            8249
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fort Lauderdale",
            "state": "Florida",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8650,
            9307
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Apalachicola",
            "state": "Florida",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7515,
            8167
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Vero Beach",
            "state": "Florida",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8539,
            8748
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Valdosta",
            "state": "Georgia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7831,
            7668
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Albany",
            "state": "Georgia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7631,
            7417
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Athens",
            "state": "Georgia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7712,
            6461
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Macon",
            "state": "Georgia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7697,
            6903
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Columbus",
            "state": "Georgia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7441,
            7104
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Douglas",
            "state": "Georgia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7896,
            7388
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Dublin",
            "state": "Georgia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7848,
            6993
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Gulfport",
            "state": "Mississippi",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6659,
            8048
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hattiesburg",
            "state": "Mississippi",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6602,
            7680
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tupelo",
            "state": "Mississippi",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6667,
            6523
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Greenville",
            "state": "Mississippi",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6217,
            6903
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Natchez",
            "state": "Mississippi",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6174,
            7633
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Florence",
            "state": "South Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8404,
            6196
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Greenville",
            "state": "South Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7873,
            6072
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Sumter",
            "state": "South Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8303,
            6333
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Anderson",
            "state": "South Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7835,
            6219
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Aiken",
            "state": "South Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8049,
            6546
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Beaufort",
            "state": "South Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8293,
            6925
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Rock Hill",
            "state": "South Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8131,
            5973
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Decatur",
            "state": "Illinois",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6518,
            4345
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Alton",
            "state": "Illinois",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6310,
            4742
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Quincy",
            "state": "Illinois",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6072,
            4352
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Urbana",
            "state": "Illinois",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6649,
            4223
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bloomington",
            "state": "Illinois",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6500,
            4094
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kankakee",
            "state": "Illinois",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6690,
            3820
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Waukegan",
            "state": "Illinois",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6667,
            3334
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Aurora",
            "state": "Illinois",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6599,
            3578
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Carbondale",
            "state": "Illinois",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6506,
            5178
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Belleville",
            "state": "Illinois",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6349,
            4882
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bloomington",
            "state": "Indiana",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6973,
            4547
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Muncie",
            "state": "Indiana",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7153,
            4110
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kokomo",
            "state": "Indiana",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7012,
            4019
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Gary",
            "state": "Indiana",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6774,
            3627
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fort Wayne",
            "state": "Indiana",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7175,
            3756
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Covington",
            "state": "Kentucky",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7343,
            4512
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bowling Green",
            "state": "Kentucky",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7041,
            5393
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Paducah",
            "state": "Kentucky",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6634,
            5416
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Owensboro",
            "state": "Kentucky",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6898,
            5107
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Jacksonville",
            "state": "North Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8827,
            5845
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Goldsboro",
            "state": "North Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8691,
            5637
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Greenville",
            "state": "North Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8799,
            5511
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fayetteville",
            "state": "North Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8536,
            5812
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hickory",
            "state": "North Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8042,
            5681
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Asheville",
            "state": "North Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7817,
            5789
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Winston-Salem",
            "state": "North Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8232,
            5484
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kitty Hawk",
            "state": "North Carolina",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9088,
            5227
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Akron",
            "state": "Ohio",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7813,
            3620
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lima",
            "state": "Ohio",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7367,
            3852
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Oak Ridge",
            "state": "Tennessee",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7478,
            5700
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Murfreesboro",
            "state": "Tennessee",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7079,
            5838
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Clarksville",
            "state": "Tennessee",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6879,
            5600
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Jackson",
            "state": "Tennessee",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6621,
            5996
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Alexandria",
            "state": "Virginia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8696,
            4261
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fredericksburg",
            "state": "Virginia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8655,
            4481
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Roanoke",
            "state": "Virginia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8245,
            5016
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Danville",
            "state": "Virginia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8375,
            5252
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Winchester",
            "state": "Virginia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8488,
            4184
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bristol",
            "state": "Virginia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7853,
            5380
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Superior",
            "state": "Wisconsin",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5880,
            1716
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "West Bend",
            "state": "Wisconsin",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6587,
            2929
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fond du Lac",
            "state": "Wisconsin",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6535,
            2799
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Oshkosh",
            "state": "Wisconsin",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6514,
            2704
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Rhinelander",
            "state": "Wisconsin",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6339,
            2094
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Racine",
            "state": "Wisconsin",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6665,
            3192
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Marinette",
            "state": "Wisconsin",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6647,
            2265
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wheeling",
            "state": "West Virginia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7993,
            3974
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Morgantown",
            "state": "West Virginia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8147,
            4105
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Huntington",
            "state": "West Virginia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7741,
            4689
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Beckley",
            "state": "West Virginia",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7996,
            4880
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wilmington",
            "state": "Delaware",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8928,
            3811
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cumberland",
            "state": "Maryland",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8360,
            4034
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Atlantic City",
            "state": "New Jersey",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9148,
            3883
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Newark",
            "state": "New Jersey",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9120,
            3356
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Schenectady",
            "state": "New York",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9043,
            2535
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Binghamton",
            "state": "New York",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8744,
            2932
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Utica",
            "state": "New York",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8809,
            2508
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Watertown",
            "state": "New York",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8651,
            2215
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Niagara Falls",
            "state": "New York",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8164,
            2722
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Jamestown",
            "state": "New York",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8172,
            3116
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Elmira",
            "state": "New York",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8591,
            2988
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "York",
            "state": "Pennsylvania",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8708,
            3800
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Johnstown",
            "state": "Pennsylvania",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8302,
            3782
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Scranton",
            "state": "Pennsylvania",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8823,
            3181
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "State College",
            "state": "Pennsylvania",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8469,
            3545
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Erie",
            "state": "Pennsylvania",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8024,
            3145
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wilkes Barre",
            "state": "Pennsylvania",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8794,
            3255
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bar Harbor",
            "state": "Maine",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9898,
            1526
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lewiston",
            "state": "Maine",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9588,
            1789
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Presque Isle",
            "state": "Maine",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9764,
            615
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ann Arbor",
            "state": "Michigan",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7387,
            3233
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kalamazoo",
            "state": "Michigan",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7062,
            3299
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Muskegon",
            "state": "Michigan",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6924,
            2953
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Flint",
            "state": "Michigan",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7370,
            2955
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Grand Rapids",
            "state": "Michigan",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7030,
            3041
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Pontiac",
            "state": "Michigan",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7450,
            3080
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cadillac",
            "state": "Michigan",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7040,
            2533
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Traverse City",
            "state": "Michigan",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6991,
            2339
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Petoskey",
            "state": "Michigan",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7087,
            2085
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Escanaba",
            "state": "Michigan",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6727,
            2001
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Marquette",
            "state": "Michigan",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6653,
            1700
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hancock",
            "state": "Michigan",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6450,
            1503
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wrangell",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2000,
            9362
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Shishmaref",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            618,
            8230
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hoonah",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1828,
            9215
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Atka",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            0,
            9950
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Nikolski",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            278,
            9968
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Karluk",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1002,
            9474
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "False Pass",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            571,
            9793
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kivalina",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            690,
            8047
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Newhalen",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            985,
            9181
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Pilot Point",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            863,
            9468
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Chignik",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            819,
            9637
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "King Salmon",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            907,
            9318
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Quinhagak",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            691,
            9145
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Aniak",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            804,
            8912
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kotlit",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            663,
            8686
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Unalakleet",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            774,
            8593
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Koyuk",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            770,
            8447
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "McGrath",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            962,
            8738
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hughes",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1014,
            8318
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ambler",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            897,
            8172
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wales",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            540,
            8294
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kotzebue",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            740,
            8173
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wasilla",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1203,
            8917
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Circle",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1361,
            8307
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Denali Park",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1210,
            8622
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Yakutat",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1619,
            9100
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Homer",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1125,
            9188
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tanacross",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1418,
            8629
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wiseman",
            "state": "Alaska",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1148,
            8128
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kailua-Kona",
            "state": "Hawaii",
            "SCALERANK": 7,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3233,
            9692
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Butte",
            "state": "Montana",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2512,
            1627
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Grand Forks",
            "state": "North Dakota",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5075,
            1270
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Pocatello",
            "state": "Idaho",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2397,
            2834
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tacoma",
            "state": "Washington",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            978,
            572
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Yuma",
            "state": "Arizona",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1548,
            6636
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Prescott",
            "state": "Arizona",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2054,
            6032
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Long Beach",
            "state": "California",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            920,
            5972
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Grand Junction",
            "state": "Colorado",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2947,
            4468
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ely",
            "state": "Nevada",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1808,
            4098
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Carson City",
            "state": "Nevada",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            933,
            3806
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Carlsbad",
            "state": "New Mexico",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3596,
            7215
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Alamogordo",
            "state": "New Mexico",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3263,
            6975
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Medford",
            "state": "Oregon",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            596,
            2371
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Klamath Falls",
            "state": "Oregon",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            774,
            2495
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "St. George",
            "state": "Utah",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1948,
            4999
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Provo",
            "state": "Utah",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2433,
            3885
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Laramie",
            "state": "Wyoming",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3539,
            3706
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Little Rock",
            "state": "Arkansas",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            5954,
            6403
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wichita",
            "state": "Kansas",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4993,
            5252
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Jefferson City",
            "state": "Missouri",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            5947,
            4895
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Rapid City",
            "state": "South Dakota",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4008,
            2687
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lafayette",
            "state": "Louisiana",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6060,
            8170
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Galveston",
            "state": "Texas",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5491,
            8544
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Freeport",
            "state": "Texas",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5375,
            8679
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Victoria",
            "state": "Texas",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5031,
            8738
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Odessa",
            "state": "Texas",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3958,
            7486
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wichita Falls",
            "state": "Texas",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4751,
            6737
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Waco",
            "state": "Texas",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5009,
            7669
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lubbock",
            "state": "Texas",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4082,
            6819
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hartford",
            "state": "Connecticut",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            9317,
            2847
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Providence",
            "state": "Rhode Island",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            9530,
            2737
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Birmingham",
            "state": "Alabama",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7050,
            6755
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Mobile",
            "state": "Alabama",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6866,
            7900
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Pensacola",
            "state": "Florida",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7041,
            7976
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "St. Petersburg",
            "state": "Florida",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8055,
            8819
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Biloxi",
            "state": "Mississippi",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6701,
            8032
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Springfield",
            "state": "Illinois",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            6393,
            4368
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Frankfort",
            "state": "Kentucky",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            7301,
            4869
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Greensboro",
            "state": "North Carolina",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8320,
            5473
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Dayton",
            "state": "Ohio",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7379,
            4241
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Virginia Beach",
            "state": "Virginia",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8997,
            4947
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Madison",
            "state": "Wisconsin",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            6384,
            3092
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Green Bay",
            "state": "Wisconsin",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6596,
            2495
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Trenton",
            "state": "New Jersey",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            9046,
            3579
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lansing",
            "state": "Michigan",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            7231,
            3094
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Gambell",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            377,
            8486
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Palmer",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1215,
            8913
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Seward",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1210,
            9115
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Duluth",
            "state": "Minnesota",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5879,
            1692
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bemidji",
            "state": "Minnesota",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5423,
            1444
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Havre",
            "state": "Montana",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3066,
            777
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kalispell",
            "state": "Montana",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2321,
            707
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Idaho Falls",
            "state": "Idaho",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2492,
            2624
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lewiston",
            "state": "Idaho",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1804,
            1233
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Yakima",
            "state": "Washington",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1257,
            941
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wenatchee",
            "state": "Washington",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1337,
            647
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Douglas",
            "state": "Arizona",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2501,
            7427
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bakersfield",
            "state": "California",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            847,
            5305
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Oakland",
            "state": "California",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            408,
            4142
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lancaster",
            "state": "California",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            975,
            5627
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Chico",
            "state": "California",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            603,
            3433
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Monterey",
            "state": "California",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            391,
            4611
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Salinas",
            "state": "California",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            442,
            4601
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Los Alamos",
            "state": "New Mexico",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3273,
            5798
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Eugene",
            "state": "Oregon",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            675,
            1707
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Coos Bay",
            "state": "Oregon",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            444,
            1873
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bend",
            "state": "Oregon",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            970,
            1834
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cody",
            "state": "Wyoming",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3033,
            2343
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cedar Rapids",
            "state": "Iowa",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6005,
            3560
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Springfield",
            "state": "Missouri",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5745,
            5455
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lincoln",
            "state": "Nebraska",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            5119,
            4038
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Alexandria",
            "state": "Louisiana",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5963,
            7743
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Abilene",
            "state": "Texas",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4494,
            7297
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Brownsville",
            "state": "Texas",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4916,
            9851
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tyler",
            "state": "Texas",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5381,
            7358
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Concord",
            "state": "New Hampshire",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            9425,
            2222
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Huntsville",
            "state": "Alabama",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7064,
            6285
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Key West",
            "state": "Florida",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8356,
            9999
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "West Palm Beach",
            "state": "Florida",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8630,
            9075
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Sarasota",
            "state": "Florida",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8100,
            8978
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Daytona Beach",
            "state": "Florida",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8348,
            8183
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Gainesville",
            "state": "Florida",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8065,
            8079
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ft. Myers",
            "state": "Florida",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8266,
            9210
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Brunswick",
            "state": "Georgia",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8181,
            7461
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Augusta",
            "state": "Georgia",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8000,
            6592
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Vicksburg",
            "state": "Mississippi",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6267,
            7313
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Myrtle Beach",
            "state": "South Carolina",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8595,
            6342
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Charleston",
            "state": "South Carolina",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8416,
            6749
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Peoria",
            "state": "Illinois",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6375,
            4024
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Evansville",
            "state": "Indiana",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6811,
            5041
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Louisville",
            "state": "Kentucky",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7139,
            4889
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lexington",
            "state": "Kentucky",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7375,
            4915
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Charlotte",
            "state": "North Carolina",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8159,
            5860
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Youngstown",
            "state": "Ohio",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7965,
            3570
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Canton",
            "state": "Ohio",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7848,
            3719
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Toledo",
            "state": "Ohio",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7431,
            3472
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Columbus",
            "state": "Ohio",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            7589,
            4105
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Chattanooga",
            "state": "Tennessee",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7317,
            6103
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Charlottesville",
            "state": "Virginia",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8482,
            4645
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Lynchburg",
            "state": "Virginia",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8387,
            4919
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wausau",
            "state": "Wisconsin",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6314,
            2362
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Albany",
            "state": "New York",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            9072,
            2582
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ithaca",
            "state": "New York",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8628,
            2836
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Harrisburg",
            "state": "Pennsylvania",
            "SCALERANK": 6,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            8665,
            3690
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bangor",
            "state": "Maine",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9777,
            1417
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Portland",
            "state": "Maine",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9611,
            1952
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Saginaw",
            "state": "Michigan",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7313,
            2807
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ketchikan",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2062,
            9488
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Unalaska",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            408,
            9884
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Togiak",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            750,
            9248
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Red Devil",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            892,
            8897
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hooper Bay",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            545,
            8863
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wainwright",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            852,
            7688
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Galena",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            918,
            8493
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kaktovik",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1322,
            7735
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Skagway",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1802,
            9037
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cordova",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1358,
            9035
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kenai",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1134,
            9063
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fort Yukon",
            "state": "Alaska",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1312,
            8217
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Santa Cruz",
            "state": "California",
            "SCALERANK": 6,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            391,
            4459
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "San Bernardino",
            "state": "California",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1102,
            5907
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bridgeport",
            "state": "Connecticut",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9261,
            3107
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Rochester",
            "state": "New York",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8401,
            2618
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "International Falls",
            "state": "Minnesota",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5654,
            1002
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "St. Paul",
            "state": "Minnesota",
            "SCALERANK": 4,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            5732,
            2415
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Billings",
            "state": "Montana",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3160,
            1875
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Great Falls",
            "state": "Montana",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2771,
            1111
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Missoula",
            "state": "Montana",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2313,
            1225
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Minot",
            "state": "North Dakota",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4392,
            1115
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fargo",
            "state": "North Dakota",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5112,
            1676
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Hilo",
            "state": "Hawaii",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3434,
            9672
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Olympia",
            "state": "Washington",
            "SCALERANK": 4,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            906,
            608
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Spokane",
            "state": "Washington",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1806,
            737
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Vancouver",
            "state": "Washington",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            854,
            1152
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Flagstaff",
            "state": "Arizona",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2231,
            5839
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tucson",
            "state": "Arizona",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            2263,
            7034
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Santa Barbara",
            "state": "California",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            660,
            5607
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fresno",
            "state": "California",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            788,
            4724
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Eureka",
            "state": "California",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            276,
            2838
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Colorado Springs",
            "state": "Colorado",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3626,
            4684
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Reno",
            "state": "Nevada",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            946,
            3663
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Elko",
            "state": "Nevada",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1730,
            3437
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Albuquerque",
            "state": "New Mexico",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3187,
            6093
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Salem",
            "state": "Oregon",
            "SCALERANK": 4,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            746,
            1385
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Casper",
            "state": "Wyoming",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3452,
            3079
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Topeka",
            "state": "Kansas",
            "SCALERANK": 4,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            5302,
            4733
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kansas City",
            "state": "Missouri",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5497,
            4707
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tulsa",
            "state": "Oklahoma",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5254,
            5883
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Sioux Falls",
            "state": "South Dakota",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5115,
            2970
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Shreveport",
            "state": "Louisiana",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5687,
            7292
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Baton Rouge",
            "state": "Louisiana",
            "SCALERANK": 4,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            6238,
            8056
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Ft. Worth",
            "state": "Texas",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4974,
            7203
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Corpus Christi",
            "state": "Texas",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4944,
            9148
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Austin",
            "state": "Texas",
            "SCALERANK": 4,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            4882,
            8165
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Amarillo",
            "state": "Texas",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4116,
            6175
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "El Paso",
            "state": "Texas",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            3124,
            7390
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Laredo",
            "state": "Texas",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4496,
            9220
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Burlington",
            "state": "Vermont",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9072,
            1857
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Montgomery",
            "state": "Alabama",
            "SCALERANK": 4,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            7185,
            7192
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tallahassee",
            "state": "Florida",
            "SCALERANK": 4,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            7640,
            7859
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Orlando",
            "state": "Florida",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8300,
            8469
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Jacksonville",
            "state": "Florida",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8174,
            7785
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Savannah",
            "state": "Georgia",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8225,
            7106
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Columbia",
            "state": "South Carolina",
            "SCALERANK": 4,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            8190,
            6315
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Indianapolis",
            "state": "Indiana",
            "SCALERANK": 4,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            7023,
            4307
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Wilmington",
            "state": "North Carolina",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8753,
            6080
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Knoxville",
            "state": "Tennessee",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7545,
            5702
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Richmond",
            "state": "Virginia",
            "SCALERANK": 4,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            8692,
            4770
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Charleston",
            "state": "West Virginia",
            "SCALERANK": 4,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            7892,
            4680
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Baltimore",
            "state": "Maryland",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8759,
            4047
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Syracuse",
            "state": "New York",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8657,
            2582
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Augusta",
            "state": "Maine",
            "SCALERANK": 4,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            9646,
            1677
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Sault Ste. Marie",
            "state": "Michigan",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7155,
            1633
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Sitka",
            "state": "Alaska",
            "SCALERANK": 4,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1857,
            9351
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Helena",
            "state": "Montana",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            2617,
            1425
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bismarck",
            "state": "North Dakota",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            4457,
            1671
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Boise",
            "state": "Idaho",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            1790,
            2347
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "San Jose",
            "state": "California",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            444,
            4349
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Sacramento",
            "state": "California",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            594,
            3897
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Las Vegas",
            "state": "Nevada",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1602,
            5245
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Santa Fe",
            "state": "New Mexico",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            3337,
            5890
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Portland",
            "state": "Oregon",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            841,
            1189
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Salt Lake City",
            "state": "Utah",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            2401,
            3667
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cheyenne",
            "state": "Wyoming",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            3672,
            3794
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Des Moines",
            "state": "Iowa",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            5662,
            3732
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Omaha",
            "state": "Nebraska",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5239,
            3874
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Oklahoma City",
            "state": "Oklahoma",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            4948,
            6133
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Pierre",
            "state": "South Dakota",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            4502,
            2624
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "San Antonio",
            "state": "Texas",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            4720,
            8463
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Jackson",
            "state": "Mississippi",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            6406,
            7321
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Raleigh",
            "state": "North Carolina",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            8548,
            5507
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cleveland",
            "state": "Ohio",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7768,
            3473
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cincinnati",
            "state": "Ohio",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7350,
            4479
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Nashville",
            "state": "Tennessee",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            6997,
            5723
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Memphis",
            "state": "Tennessee",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6400,
            6214
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Norfolk",
            "state": "Virginia",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8942,
            4968
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Milwaukee",
            "state": "Wisconsin",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6639,
            3067
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Buffalo",
            "state": "New York",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8199,
            2796
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Pittsburgh",
            "state": "Pennsylvania",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8106,
            3797
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Kodiak",
            "state": "Alaska",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1093,
            9443
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Cold Bay",
            "state": "Alaska",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            608,
            9753
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Bethel",
            "state": "Alaska",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            708,
            9005
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Point Hope",
            "state": "Alaska",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            627,
            7945
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Barrow",
            "state": "Alaska",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            946,
            7611
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Nome",
            "state": "Alaska",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            615,
            8471
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Valdez",
            "state": "Alaska",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1329,
            8959
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Juneau",
            "state": "Alaska",
            "SCALERANK": 3,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            1866,
            9169
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Fairbanks",
            "state": "Alaska",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1245,
            8466
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Prudhoe Bay",
            "state": "Alaska",
            "SCALERANK": 3,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1175,
            7736
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Minneapolis",
            "state": "Minnesota",
            "SCALERANK": 2,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5704,
            2401
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Honolulu",
            "state": "Hawaii",
            "SCALERANK": 2,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            2812,
            9052
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Seattle",
            "state": "Washington",
            "SCALERANK": 2,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1029,
            451
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Phoenix",
            "state": "Arizona",
            "SCALERANK": 2,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            2084,
            6457
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "San Diego",
            "state": "California",
            "SCALERANK": 2,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1056,
            6411
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "St. Louis",
            "state": "Missouri",
            "SCALERANK": 2,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6303,
            4842
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "New Orleans",
            "state": "Louisiana",
            "SCALERANK": 2,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6470,
            8214
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Dallas",
            "state": "Texas",
            "SCALERANK": 2,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5073,
            7173
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Boston",
            "state": "Massachusetts",
            "SCALERANK": 2,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            9557,
            2519
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Tampa",
            "state": "Florida",
            "SCALERANK": 2,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8094,
            8740
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Philadelphia",
            "state": "Pennsylvania",
            "SCALERANK": 2,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8982,
            3689
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Detroit",
            "state": "Michigan",
            "SCALERANK": 2,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            7497,
            3196
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Anchorage",
            "state": "Alaska",
            "SCALERANK": 2,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            1186,
            8968
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "San Francisco",
            "state": "California",
            "SCALERANK": 1,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            372,
            4126
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Denver",
            "state": "Colorado",
            "SCALERANK": 1,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            3611,
            4336
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Houston",
            "state": "Texas",
            "SCALERANK": 1,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            5377,
            8344
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Miami",
            "state": "Florida",
            "SCALERANK": 1,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            8646,
            9444
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Atlanta",
            "state": "Georgia",
            "SCALERANK": 1,
            "FEATURECLA": "Admin-1 capital"
          },
          "coordinates": [
            7516,
            6553
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Chicago",
            "state": "Illinois",
            "SCALERANK": 1,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            6694,
            3539
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Los Angeles",
            "state": "California",
            "SCALERANK": 0,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            927,
            5893
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "Washington, D.C.",
            "state": "District of Columbia",
            "SCALERANK": 0,
            "FEATURECLA": "Admin-0 capital"
          },
          "coordinates": [
            8708,
            4225
          ]
        },
        {
          "type": "Point",
          "properties": {
            "name": "New York",
            "state": "New York",
            "SCALERANK": 0,
            "FEATURECLA": "Populated place"
          },
          "coordinates": [
            9150,
            3324
          ]
        }
      ]

});
