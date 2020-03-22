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



//end functions=====================================================================================



 
     
    
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/helix/games/top',
        headers: {
          'Client-ID': '5ax5wobie94supesi1p1pmhbweb5d2',
          'Accept': 'application/vnd.twitchtv.v5+json'
        },
        success: function(data) {
          var image1 = JSON.stringify(data.data[0].box_art_url);
          var image2 = JSON.stringify(data.data[1].box_art_url);
          var image3 = JSON.stringify(data.data[2].box_art_url);
          var image4 = JSON.stringify(data.data[3].box_art_url);
          var image5 = JSON.stringify(data.data[4].box_art_url);
          var image6 = JSON.stringify(data.data[5].box_art_url);
          var str = image1;
          var newstr = str.replace("{width}", "200").replace("{height}", "300").replace('"', "");

          var str2 = image2;
          var newstr2 = str2.replace("{width}", "200").replace("{height}", "300").replace('"', "");

          var str3 = image3;
          var newstr3 = str3.replace("{width}", "200").replace("{height}", "300").replace('"', "");

          var str4 = image4;
          var newstr4 = str4.replace("{width}", "200").replace("{height}", "300").replace('"', "");

          var str5 = image5;
          var newstr5 = str5.replace("{width}", "200").replace("{height}", "300").replace('"', "");

          var str6 = image6;
          var newstr6 = str6.replace("{width}", "200").replace("{height}", "300").replace('"', "");


          $("#gameimage1").attr("src", newstr);
          $("#gameimage2").attr("src", newstr2);
          $("#gameimage3").attr("src", newstr3);
          $("#gameimage4").attr("src", newstr4);
          $("#gameimage5").attr("src", newstr5);
          $("#gameimage6").attr("src", newstr6);

          // var gameimage = data.data[0].box_art_url;
          
          
          

           
        }
       });
   
   
       
       //Build url with search option-------------------------------------------------
       $("#submit").on("click", function(){
        event.preventDefault();
      $.ajax({
         type: 'GET',
         url: 'https://api.twitch.tv/kraken/search/games?query=call%20of%20duty',
         headers: {
           'Client-ID': '5ax5wobie94supesi1p1pmhbweb5d2',
           'Accept': 'application/vnd.twitchtv.v5+json'
         },
         success: function(data) {
           gameID = data.games[0]._id;
           gameImage1 = data.games[0].box.large;
           gameImage2 = data.games[1].box.large;
           gameImage3 = data.games[2].box.large;
           gameImage4 = data.games[3].box.large;
           gameImage5 = data.games[4].box.large;
           gameImage6 = data.games[5].box.large;
           console.log(gameImage1);
           console.log(gameID);
           console.log(data);
           streamAjax();

           $("#gameimage1").attr("src", gameImage1);
           $("#gameimage2").attr("src", gameImage2);
           $("#gameimage3").attr("src", gameImage3);
           $("#gameimage4").attr("src", gameImage4);
           $("#gameimage5").attr("src", gameImage5);
           $("#gameimage6").attr("src", gameImage6);
        
         }
    });
 });


   
    
    
    
      
    
    

// youtube--------------------------------------------------------------------------------------------------------


// $("#submit").on("click", function(event) {
//     event.preventDefault();
//     var userinput = $("#search").val().trim();
//     console.log(userinput);
//     $("#search").val("");
// $.ajax({
//     type: 'GET',
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     data: {
//         key: 'AIzaSyAqcWfiYqihUQTnDWfntvgulA7b61ZxIpg',
//         q: userinput,
//         part: 'snippet',
//         maxResults: 3,
//         type: 'video',
//         videoEmbeddable: true,
//     },
//     success: function(data){
//         console.log(data);
//         embedVideo(data);
//     },
//     error: function(response){
//         console.log("Request Failed");
//     }
    
//   });
//   function embedVideo(data) {
//     $('#slide1').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
//     $('#slide2').attr('src', 'https://www.youtube.com/embed/' + data.items[1].id.videoId)
//     $('#slide3').attr('src', 'https://www.youtube.com/embed/' + data.items[2].id.videoId)
// }

// });