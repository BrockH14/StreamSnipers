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