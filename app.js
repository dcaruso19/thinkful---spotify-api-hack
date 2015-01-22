



var getTopTracks = function(id) {
	$.ajax({
		url: "https://api.spotify.com/v1/artists/4yvcSjfu4PC0CYQyLy4wSq/top-tracks?country=US",
		
		success: function (data) { 

				for (var i = 0; i < data.tracks.length; i++) {

				addTrack(data.tracks[i])
			}
		},
		
		error: function (error) {
			console.log(error)

			$("#results").append("There has been an error receiving data from Spotify - please make sure artist name is spelled correctly.")
		}
			
	});
	
};

getTopTracks();


var addTrack = function(track){

	console.log(track);


	var parentresults = $('<div class="track-template">');


	var border = $('<div class="border">');

		$(parentresults).append(border);


	var art = $('<div class="art"><img src=' + track.album.images[2].url + '></div>');

		$(border).append(art);



	var preview = $('<div class="preview"><a href="' + track.preview_url +'" target="_blank">preview track</a></div>');

		$(border).append(preview);


	var link = $('<div class="link"><a href="' + track.external_urls.spotify +'"><img src="img/listen.png" class="listen"></a></div>');

		$(border).append(link);


	$("#results").append(parentresults);


	var trackName = $('<span class="track">'+track.name+'</span>');

		$(border).append(trackName);


	var numbers = $('<div class="numbers">' +            +'</div');	

		$(border).append(numbers);
}


// var result = function(item) {

// 	var tracks = $(".track-template").clone();
// 	tracks.removeAttr("class");

// 	var albumCover = tracks.find(".art img");
// 	albumCover.attr("src", item.album.images[2].url);

// 	var songName = tracks.find(".track");
// 	songName.text(item.name);

// 	var preview = tracks.find(".preview a");
// 	preview.attr("href", item.preview_url);

// 	var songLink = tracks.find(".link a");
// 	songLink.attr("href", item.external_urls.spotify);

// 	return tracks;
// };

// var countrySearch = function(artistID, countryName) {
// 	$.ajax({
// 		url: "https://api.spotify.com/v1/artists/" + artistID + "/top-tracks?country=" + countryName,
// 		data: {
// 			id: artistID,
// 			country: countryName
// 			},
// 		success: function(data) {
// 			$.each(data.tracks, function(i, item) {
// 				var info = result(item);
// 				$(".results").append(info);
// 				console.log(item.album.images[2].url);
// 				});
// 			},
// 		error: function (error) {
// 			$(".results").text("Sorry, that artist is not available in that country!");
// 		}

// 	});
// };



// $(document).ready( function() {
// 	$('.name').submit( function(event){
// 		// zero out results if previous search has run
// 		$('.results').empty();
// 		// get the value of the name the user submitted
// 		var name = $(this).find("input[name='artist']").val();
// 		artistSearch(name);
// 	});
// });