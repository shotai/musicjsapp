/* Load the HTTP library */
var express = require('express');
var SpotifyWebApi = require('spotify-web-api-node');


var app = express();
var spotifyApi = new SpotifyWebApi();
app.set('port', process.env.PORT || 8000);
app.use(express.logger());
var httpListener = http.createServer(app);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/script'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/source'));
app.use


app.get('/',function(req,res){
	res.render('index.html')
});


app.get('/searchArtists', function(req,res){
	console.log('searchArtists')
	console.log(req.query.artistname);
	var name = req.query.artistname;
	var a = {}
	spotifyApi.searchArtists(name)
  		.then(function(data) {

    		//console.log('Search by '+ name, data.body.artists.items);
    		
    		a['hf']=data.body.artists.items[0].href
    		//console.log('Search by '+ name, data.body.artists.items[0]);
    		res.setHeader('Content-Type', 'application/json');
			//console.log(JSON.stringify(data.body.artists.items));
    		res.end(JSON.stringify(data.body.artists.items));


  		}, function(err) {
    		console.error(err);
  		});
});

app.get('/searchRelatedArtists', function(req, res){
  console.log('/searchRelatedArtists');
  console.log(req.query.artistid);
  var id = req.query.artistid;
  spotifyApi.getArtistRelatedArtists(id).then(function(data){
    res.setHeader('Content-Type', 'application/json');
    //console.log(data.body);
    res.end(JSON.stringify(data.body.artists));
  }, function(err) {
        console.error(err);
      });


});

app.get('/getAlbums', function(req, res){
  console.log('/getAlbums');
  console.log(req.query.artistid);
  var id = req.query.artistid;
  spotifyApi.getArtistAlbums(id).then(function(data){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data.body.items));
  }, function(err){
    console.error(err);
  });
});





//
httpListener.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
