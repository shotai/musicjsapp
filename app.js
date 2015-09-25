var express = require('express');
var SpotifyWebApi = require('spotify-web-api-node');
var http = require('http');
var morgan = require('morgan')


var app = new express();
var spotifyApi = new SpotifyWebApi();


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/script'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/source'));
app.set('port', process.env.PORT || 8000);
app.use(morgan('combined'))


app.get('/', function(req, res) {
    res.render('index.html')
});


app.get('/getArtist', function(req, res) {
    var name = req.query.artistname;
    spotifyApi.searchArtists(name)
        .then(function(data) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data.body.artists.items));
        }, function(err) {
            console.error(err);
        });
});

app.get('/getRelatedArtists', function(req, res) {
    var id = req.query.artistid;
    spotifyApi.getArtistRelatedArtists(id).then(function(data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data.body.artists));
    }, function(err) {
        console.error(err);
    });
});

app.get('/getArtistAlbums', function(req, res) {
    var id = req.query.artistid;
    spotifyApi.getArtistAlbums(id).then(function(data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data.body.items));
    }, function(err) {
        console.error(err);
        res.end(null);
    });
});

app.get('/getArtistAlbums', function(req, res) {
    var id = req.query.artistid;
    spotifyApi.getArtistAlbums(id).then(function(data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data.body.items));
    }, function(err) {
        console.error(err);
    });
});




var httpListener = http.createServer(app);
httpListener.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
