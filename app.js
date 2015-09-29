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
app.use(morgan('combined'));
app.use(logErrors);
app.use(errorHandler);


function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
};

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', {
        error: err
    });
};

app.get('/', function(req, res) {
    res.render('index.html')
});


app.get('/getArtist/:artistname', function(req, res, next) {
	console.log(req.query);
    var name = req.params.artistname;
    spotifyApi.searchArtists(name).then(function(data) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data.body.artists.items));
    }, function(err) {
        next(err);
    });
});

app.get('/getRelatedArtists', function(req, res, next) {
    var id = req.query.artistid;
    spotifyApi.getArtistRelatedArtists(id).then(function(data) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data.body.artists));
    }, function(err) {
        next(err);
    });
});

app.get('/getArtistAlbums', function(req, res, next) {
    var id = req.query.artistid;
    spotifyApi.getArtistAlbums(id).then(function(data) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data.body.items));
    }, function(err) {
        next(err);
    });
});

app.get('/getTopTracks', function(req, res, next) {
    var id = req.query.artistid;
    spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB').then(function(data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data.body.items));
    }, function(err) {
        next(err);
    });
});




var httpListener = http.createServer(app);
httpListener.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
