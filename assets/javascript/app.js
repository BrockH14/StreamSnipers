// $("#submit").on("click", function(){
//     event.preventDefault();
    
//     $.ajax({
//         type: 'GET',
//         url: 'https://api.twitch.tv/helix/games/top',
//         headers: {
//           'Client-ID': '5ax5wobie94supesi1p1pmhbweb5d2'
//         },
//         success: function(data) {
//           console.log(data);
//         }
//        });

// })
var gameID;


$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/helix/games/top',
    headers: {
      'Client-ID': '5ax5wobie94supesi1p1pmhbweb5d2',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    success: function(data) {
      console.log(data);
    }
   });


 console.log("----------------------------------------------------------------");
   //Build url with search option-------------------------------------------------

  $.ajax({
     type: 'GET',
     url: 'https://api.twitch.tv/kraken/search/games?query=call%20of%20duty',
     headers: {
       'Client-ID': '5ax5wobie94supesi1p1pmhbweb5d2',
       'Accept': 'application/vnd.twitchtv.v5+json'
     },
     success: function(data) {
       console.log(data);
       var gameID = data.games[0]._id;
       console.log(gameID);
     }
});


   
  //build url with search option-----------------------------------------------------

   
 $.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/helix/streams/game_id=' + gameID + 'limit=5',
    headers: {
      'Client-ID': '5ax5wobie94supesi1p1pmhbweb5d2'
    },
    success: function(data) {
      console.log(data);
    }
   });




$("#submit").on("click", function(event) {
    event.preventDefault();
    var userinput = $("#search").val().trim();
    console.log(userinput);
    $("#search").val("");
$.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
        key: 'AIzaSyAqcWfiYqihUQTnDWfntvgulA7b61ZxIpg',
        q: userinput,
        part: 'snippet',
        maxResults: 3,
        type: 'video',
        videoEmbeddable: true,
    },
    success: function(data){
        console.log(data);
        embedVideo(data);
    },
    error: function(response){
        console.log("Request Failed");
    }
    
  });
  function embedVideo(data) {
    $('#slide1').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('#slide2').attr('src', 'https://www.youtube.com/embed/' + data.items[1].id.videoId)
    $('#slide3').attr('src', 'https://www.youtube.com/embed/' + data.items[2].id.videoId)
}
});
