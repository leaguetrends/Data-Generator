var fs = require('fs');


var names = ['BR', 'EUNE', 'EUW', 'KR', 'LAN', 'LAS', 'NA', 'OCE', 'RU', 'TR']


var Firebase = require('Firebase')

var ref = new Firebase('https://apitemdataset.firebaseio.com')

for(var i = 0; i < names.length; i++){
	var obj = JSON.parse(fs.readFileSync('prepatch/normal/' + names[i] + '.json', 'utf8'));
	ref.child('prepatch').child('normal').child(names[i]).set(obj)
}

