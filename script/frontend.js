$(function(){
	getArtistAlbums = function(artistUris, callback){
		$.ajax({
                type: "GET",
                url: "/getArtistAlbums",
                dataType: 'json',
                data: {
                    'artisturis': artistUris
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
	getArtist = function(artistName, callback){
		console.log(artistName);
		$.ajax({
                type: "GET",
                url: "/getArtist",
                dataType: 'json',
                data: {
                    'artistname': artistName
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