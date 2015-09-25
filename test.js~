/* Load the HTTP library */
var express = require('express');
var SpotifyWebApi = require('spotify-web-api-node');


var app = express();
var spotifyApi = new SpotifyWebApi();
/* Create an HTTP server to handle responses */
/*http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);*/
app.use(express.static(__dirname + '/web'));
app.use(express.static(__dirname + '/script'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/source'));


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
console.log('Listening on 8888');
app.listen(8888);