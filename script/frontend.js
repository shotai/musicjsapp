$(function() {
    getArtistAlbums = function(artistId, callback) {
        $.ajax({
            type: "GET",
            url: "/getArtistAlbums/"+artistId,
            dataType: 'json',
            data: {
                'artistid': artistId
            },
            success: function(result) {
                callback(result);
            },
            error: function(error) {
                console.log(error)
                callback(null);
            }
        });
    };
    getArtist = function(artistName, callback) {
        console.log(artistName);
        $.ajax({
            type: "GET",
            url: "/getArtist/"+artistName,
            dataType: 'json',
            data: {
                //'_artistname': artistName
            },
            success: function(result) {
                callback(result);
            },
            error: function(error) {
                console.log(error)
                callback(null);
            }
        });
    };
    getRelatedArtists = function(artistIds, callback) {
        $.ajax({
            type: "GET",
            url: "/getRelatedArtists",
            dataType: 'json',
            data: {
                'artistid': artistIds
            },
            success: function(result) {
                callback(result);
            },
            error: function(error) {
                console.log(error)
                callback(null);
            }
        });
    }
    getTopTracks = function(artistIds, callback) {
        $.ajax({
            type: "GET",
            url: "/getTopTracks",
            dataType: 'json',
            data: {
                'artistid': artistIds
            },
            success: function(result) {
                callback(result);
            },
            error: function(error) {
                console.log(error)
                callback(null);
            }
        });
    }


})
