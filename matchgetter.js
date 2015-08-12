// var lolapi = require('lolapi')('401664ae-7c3a-4f9c-810e-ea432e306a31', 'na');

// lolapi.setRateLimit(10, 500);

// var summonerName = 'wickd';
// lolapi.Match.get(1900735241, function (error, match) {
// 	if(error) throw error
// 	console.log(match)
	
// });

var request = require('request');
var API_KEY = '401664ae-7c3a-4f9c-810e-ea432e306a31'


//Utility method for simple HTTP GET requests.
function httpGet(theUrl, callback){
	console.log('something is happening')
    request(theUrl, function (error, response, body){
		if (!error && response.statusCode == 200){
		  	callback(body) // Call the callback function passed in
		}	
	})
}

Getting a match
getMatch(1900735241, 'na' ,function(match){console.log(match)})


var getMatch = function(matchId, region, callback){
	console.log('something is also happening here')
	var reg = region.toLowerCase()

	httpGet('https://' + reg + '.api.pvp.net/api/lol/' + reg + '/v2.2/match/' + matchId + '?api_key=' + API_KEY, function(match){callback(JSON.parse(match))})
}

var getItem = function (itemId, callback){
	var url = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/item/' + itemId + '?itemData=all&api_key=' + API_KEY
	httpGet(url, function(item){callback(JSON.parse(item))})
}
//Getting an item
//getItem(3153, function(item){console.log(item)})



// console.log(getMatch(1900735241, 'na' ,function(match){console.log(JSON.parse(match).participants[0].stats)}))
// getItem(3153, function(item){
// 	console.log(item)
// })





