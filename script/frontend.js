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
    getArtist = function(artistId, callback) {
        console.log(artistId);
        $.ajax({
            type: "GET",
            url: "/getArtist/"+artistId,
            dataType: 'json',
            success: function(result) {
                callback(result);
            },
            error: function(error) {
                console.log(error)
                callback(null);
            }
        });
    };
    searchArtist = function(artistName, callback) {
        console.log(artistName);
        $.ajax({
            type: "GET",
            url: "/searchArtist/"+artistName,
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
            url: "/getRelatedArtists/"+artistIds,
            dataType: 'json',
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
