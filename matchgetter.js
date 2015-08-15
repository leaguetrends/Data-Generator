// var lolapi = require('lolapi')('401664ae-7c3a-4f9c-810e-ea432e306a31', 'na');

// lolapi.setRateLimit(10, 500);

// var summonerName = 'wickd';
// lolapi.Match.get(1900735241, function (error, match) {
// 	if(error) throw error
// 	console.log(match)
	
// });

var request = require('request');
var API_KEY = 'f52ef371-e37a-4faa-b612-f84df24ca1ef'


//Utility method for simple HTTP GET requests.
function httpGet(theUrl, callback){
    request(theUrl, function (error, response, body){

		if (!error && response.statusCode == 200){
		  	callback(body) // Call the callback function passed in
		}else if(response.statusCode == 403){
			console.log('ACCESS DENIED: This probably means you ran out of requests on your API key for now.')
		}
	})
}

// Getting a match
// getMatch(1900735241, 'na' ,function(match){console.log(match)})


var getMatch = function(matchId, region, callback){
	var reg = region.toLowerCase()

	httpGet('https://' + reg + '.api.pvp.net/api/lol/' + reg + '/v2.2/match/' + matchId + '?api_key=' + API_KEY, function(match){callback(JSON.parse(match))})
}

var getItem = function (itemId, callback){
	var url = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/item/' + itemId + '?itemData=all&api_key=' + API_KEY
	
	console.log(url)
	httpGet(url, function(item){callback(JSON.parse(item))})
}
//Getting an item
//getItem(3153, function(item){console.log(item)})



getMatch(1900735241, 'na' ,function(match){console.log(match.participants[0].stats)})
getItem(3153, function(item){
	console.log(item)
})





