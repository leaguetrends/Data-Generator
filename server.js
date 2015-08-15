var Firebase = require('Firebase')

var ref = new Firebase('https://apitemdataset.firebaseio.com')
ref.child('request').once('value', function(snapshot){
	snapshot.forEach(function(nSnapshot){
		var value = nSnapshot.val()
		console.log(value)
		var nref = new Firebase('https://apitemdataset.firebaseio.com/' + value.path)
		nref.once('value', function(childSnapshot){
			console.log(childSnapshot.val())
			var count
			if(childSnapshot.exists()){
				count = childSnapshot.val().value
			}else{
				count = 0
			}
			

			count++
			console.log(count)
			nref.update({value:count})
			console.log('removed ' + nSnapshot.key())
			ref.child('request').child(nSnapshot.key()).remove()
				
		}) 
		

		
	})
		
})