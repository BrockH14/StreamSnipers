
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