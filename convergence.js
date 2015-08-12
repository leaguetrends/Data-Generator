//Data structure
// Champion
// 	post/prepatch
// 		norms
// 			Item
// 				ItemID
// 					Before %
// 					After %
// 		ranked
// 			Item
// 				ItemID
// 					Before %
// 					After %
	


var Firebase = require('Firebase')
//var matchgetter = require('./matchgetter')
//var regions =['BR', 'EUNE', 'EUW', 'KR', 'LAN', 'LAS', 'NA', 'OCE', 'RU', 'TR']

var ref = new Firebase('https://apitemdataset.firebaseio.com')

var region = 'BR'



ref.child('prepatch').child('normal').child('BR').on('child_added', function(snapshot){
	
		
	var matchId = snapshot.val()
	console.log(region + ' ' + matchId)
	getMatch(matchId, region, function(match){
		console.log('also here?')
		var participants = match.participants
		
		for(var z in participants){
			console.log(participants[z].stats.item0)
		}
	})

})
// var patch = 'prepatch'
// var type = 'normal'
// var region = 'BR'
// ref.child(patch).child(type).child('')

var request = require('request');
var API_KEY = 'f52ef371-e37a-4faa-b612-f84df24ca1ef'


//Utility method for simple HTTP GET requests.
function httpGet(theUrl, callback){
	console.log('something is happening')
    request(theUrl, function (error, response, body){
    	console.log(body)
		if (!error && response.statusCode == 200){
		  	callback(body) // Call the callback function passed in
		}	
	})
}


var getMatch = function(matchId, region, callback){
	console.log('omg')
	var reg = region.toLowerCase()
	var url = 'https://' + reg + '.api.pvp.net/api/lol/' + reg + '/v2.2/match/' + matchId + '?api_key=' + API_KEY
	httpGet(url, function(match){
		console.log("called callback")
		callback(JSON.parse(match))
	})
}

var getItem = function (itemId, callback){
	var url = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/item/' + itemId + '?itemData=all&api_key=' + API_KEY
	httpGet(url, function(item){
		callback(JSON.parse(item))
	})
}