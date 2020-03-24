var gameID;
var userinput = "gaming";


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

function streamAjaxButtons(gameid) {
  $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/helix/streams?game_id=' + gameid + '',
        headers: {
          'Client-ID': '5ax5wobie94supesi1p1pmhbweb5d2'
        },
        success: function(data) {
          console.log(data);
          
          var streamerThumbnail1 = data.data[0].thumbnail_url;
          var streamerThumbnail2 = data.data[1].thumbnail_url;
          var streamerThumbnail3 = data.data[2].thumbnail_url;

          var streamTitle1 = data.data[0].title;
          var streamTitle2 = data.data[1].title;
          var streamTitle3 = data.data[2].title;

          var streamerName1 = data.data[0].user_name;
          var streamerName2 = data.data[1].user_name;
          var streamerName3 = data.data[2].user_name;

          var thumbnail1 = streamerThumbnail1.replace("{width}", "200").replace("{height}", "300").replace('"', "");
          var thumbnail2 = streamerThumbnail2.replace("{width}", "200").replace("{height}", "300").replace('"', "");
          var thumbnail3 = streamerThumbnail3.replace("{width}", "200").replace("{height}", "300").replace('"', "");

          $("#streamer-thumbnail1").attr("src", thumbnail1);
          $("#streamer-thumbnail2").attr("src", thumbnail2);
          $("#streamer-thumbnail3").attr("src", thumbnail3);

          $("#stream-title1").text(streamTitle1);
          $("#stream-title2").text(streamTitle2);
          $("#stream-title3").text(streamTitle3);

          $("#streamer-name1").text(streamerName1);
          $("#streamer-name2").text(streamerName2);
          $("#streamer-name3").text(streamerName3);

          $("#image-link1").attr("href", 'https://www.twitch.tv/' + streamerName1 + "");
          $("#image-link2").attr("href", 'https://www.twitch.tv/' + streamerName2 + "");
          $("#image-link3").attr("href", 'https://www.twitch.tv/' + streamerName3 + "");

          $("#streamer-name-link1").attr("href", 'https://www.twitch.tv/' + streamerName1 + "");
          $("#streamer-name-link2").attr("href", 'https://www.twitch.tv/' + streamerName2 + "");
          $("#streamer-name-link3").attr("href", 'https://www.twitch.tv/' + streamerName3 + "");


        }
       });
}

//end functions=====================================================================================

  //popular twitch games load on page load----------------------------------------------------------
    
  $.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/helix/games/top',
    headers: {
      'Client-ID': '5ax5wobie94supesi1p1pmhbweb5d2',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    success: function(data) {
      console.log(data);

      var youtop1 = data.data[0].name;
      var youtop2 = data.data[1].name;
      var youtop3 = data.data[2].name;
      var youtop4 = data.data[3].name;
      var youtop5 = data.data[4].name;
      var youtop6 = data.data[5].name;

      var image1 = JSON.stringify(data.data[0].box_art_url);
      var image1id = data.data[0].id;
      var image2 = JSON.stringify(data.data[1].box_art_url);
      var image2id = data.data[1].id;
      var image3 = JSON.stringify(data.data[2].box_art_url);
      var image3id = data.data[2].id;
      var image4 = JSON.stringify(data.data[3].box_art_url);
      var image4id = data.data[3].id;
      var image5 = JSON.stringify(data.data[4].box_art_url);
      var image5id = data.data[4].id;
      var image6 = JSON.stringify(data.data[5].box_art_url);
      var image6id = data.data[5].id;
      
      var newstr = image1.replace("{width}", "200").replace("{height}", "300").replace('"', "");
      var newstr2 = image2.replace("{width}", "200").replace("{height}", "300").replace('"', "");
      var newstr3 = image3.replace("{width}", "200").replace("{height}", "300").replace('"', "");      
      var newstr4 = image4.replace("{width}", "200").replace("{height}", "300").replace('"', "");      
      var newstr5 = image5.replace("{width}", "200").replace("{height}", "300").replace('"', "");  
      var newstr6 = image6.replace("{width}", "200").replace("{height}", "300").replace('"', "");

      //append the game box art to the grid on index.html----------------------------------------------------------------------------

      $("#gameimage1").attr("src", newstr);
      $("#gameimage2").attr("src", newstr2);
      $("#gameimage3").attr("src", newstr3);
      $("#gameimage4").attr("src", newstr4);
      $("#gameimage5").attr("src", newstr5);
      $("#gameimage6").attr("src", newstr6);

      //When the images are clicked, use an ajax call to get the info for that game---------------------------------------------------

      $("#game1").on("click", function() {
        event.preventDefault();
        streamAjaxButtons(image1id);
        userinput = youtop1;
        updateyoutube();
      });

      $("#game2").on("click", function() {
        event.preventDefault();
        streamAjaxButtons(image2id);
        userinput = youtop2;
        updateyoutube();
      });

      $("#game3").on("click", function() {
        event.preventDefault();
        streamAjaxButtons(image3id);
        userinput = youtop3;
        updateyoutube();
      });

      $("#game4").on("click", function() {
        event.preventDefault();
        streamAjaxButtons(image4id);
        userinput = youtop4;
        updateyoutube();
      });

      $("#game5").on("click", function() {
        event.preventDefault();
        streamAjaxButtons(image5id);
        userinput = youtop5;
        updateyoutube();
      });

      $("#game6").on("click", function() {
        event.preventDefault();
        streamAjaxButtons(image6id);
        userinput = youtop6;
        updateyoutube();
      });
        }
       });

function updateyoutube(){
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
}}

       //Get top 3 most active streams on twitch for stream grid pre-user-search---------------------------------------------------

       $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/helix/streams?first=3',
        headers: {
          'Client-ID': '5ax5wobie94supesi1p1pmhbweb5d2'
        },
        success: function(data) {
          console.log(data);
          var streamerThumbnail1 = data.data[0].thumbnail_url;
          var streamerThumbnail2 = data.data[1].thumbnail_url;
          var streamerThumbnail3 = data.data[2].thumbnail_url;

          var streamTitle1 = data.data[0].title;
          var streamTitle2 = data.data[1].title;
          var streamTitle3 = data.data[2].title;

          var streamerName1 = data.data[0].user_name;
          var streamerName2 = data.data[1].user_name;
          var streamerName3 = data.data[2].user_name;

          var thumbnail1 = streamerThumbnail1.replace("{width}", "200").replace("{height}", "300").replace('"', "");
          var thumbnail2 = streamerThumbnail2.replace("{width}", "200").replace("{height}", "300").replace('"', "");
          var thumbnail3 = streamerThumbnail3.replace("{width}", "200").replace("{height}", "300").replace('"', "");

          $("#streamer-thumbnail1").attr("src", thumbnail1);
          $("#streamer-thumbnail2").attr("src", thumbnail2);
          $("#streamer-thumbnail3").attr("src", thumbnail3);

          $("#stream-title1").text(streamTitle1);
          $("#stream-title2").text(streamTitle2);
          $("#stream-title3").text(streamTitle3);

          $("#streamer-name1").text(streamerName1);
          $("#streamer-name2").text(streamerName2);
          $("#streamer-name3").text(streamerName3);

          $("#image-link1").attr("href", 'https://www.twitch.tv/' + streamerName1 + "")
          $("#image-link2").attr("href", 'https://www.twitch.tv/' + streamerName2 + "")
          $("#image-link3").attr("href", 'https://www.twitch.tv/' + streamerName3 + "")

          $("#streamer-name-link1").attr("href", 'https://www.twitch.tv/' + streamerName1 + "")
          $("#streamer-name-link2").attr("href", 'https://www.twitch.tv/' + streamerName2 + "")
          $("#streamer-name-link3").attr("href", 'https://www.twitch.tv/' + streamerName3 + "")
        }
       });
   
       //Build url with search option-------------------------------------------------

       $("#submit").on("click", function(){
        event.preventDefault();
        var userinput = $("#search").val().trim();
        console.log(userinput);
        updateyoutube();
      $.ajax({
         type: 'GET',
         url: 'https://api.twitch.tv/kraken/search/games?query=' + userinput + '',
         headers: {
           'Client-ID': '5ax5wobie94supesi1p1pmhbweb5d2',
           'Accept': 'application/vnd.twitchtv.v5+json'
         },
         success: function(data) {
           gameID = data.games[0]._id;
           gameImage1 = data.games[0].box.large;
           gameImage2 = data.games[1].box.large;
           gameImage3 = data.games[2].box.large;
           streamAjaxButtons(gameID);     
         }
    });

 });
 updateyoutube();