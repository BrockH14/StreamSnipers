var gameID;

function streamAjax() {
    
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/helix/streams?game_id=' + gameID + '',
        headers: {
          'Client-ID': '5ax5wobie94supesi1p1pmhbweb5d2'
        },
        success: function(data) {
          console.log(data);
        }
       });
}








//  $("#submit").on("click", function(){
//      event.preventDefault();
    

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
   
   
       
       //Build url with search option-------------------------------------------------
   
      $.ajax({
         type: 'GET',
         url: 'https://api.twitch.tv/kraken/search/games?query=call%20of%20duty',
         headers: {
           'Client-ID': '5ax5wobie94supesi1p1pmhbweb5d2',
           'Accept': 'application/vnd.twitchtv.v5+json'
         },
         success: function(data) {
           gameID = data.games[0]._id;
           console.log(gameID);
           console.log(data);
           streamAjax();
        
         }
    });
    
    
    
      //build url with search option-----------------------------------------------------
    
    
 