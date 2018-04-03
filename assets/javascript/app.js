$(document).ready(function() {
  
//   var emotionMappingObject = {
//     sad: "0ejyqdntIi7ZukKgCABVFq",
//     angry: "1yrVnLy8kZYvp8r6XuLono",
//     happy: "6AtEuKdXIbx2w5Lhqf0GRP",
//     disgust: "7LzO31VmX8H8oHPCZk7AKw",
//     neutral: "4KjjGytXjIH2KZ41HKjz4R",
//     fear: "1Alb1XSrOASaO2Wdrr7lL8",
//     suprise: "3gbUs7iNyYP6E3cr9xQZsD"
//   };

    var start = window.location.href.indexOf("=");
    var end = window.location.href.indexOf("&");
    var str = window.location.href;
    var token = str.substring(start + 1, end);
    //FOR TESTING ON LOCAL MACHINE 
    var token = "BQD1wXIGwZmQalK0jnN8KEnCqK5m0ixknxpjUWfAbcWygMwqVpVBg-MuEoYwKhm_3T7wdaETs92AdTGpiJzmDg2TUsKdoFXLtUt-aL0ENWXSiTvlDwcH9EmzVGK_tHpFWk-nF3vMeboiff7hBQ";
    var playlistId = "";
    
    // console.log("token: ",token);
    var emotion = "disgust";
    displayPlaylist(emotion);
    function displayPlaylist(emotion) {
        //run the ajax call
        $.ajax({
                url: "https://api.spotify.com/v1/search?q=" + emotion + "&type=playlist&limit=1",
                headers: {
                    'Authorization': "Bearer " + token
                },
                success: function (response) {
                    console.log("response: ", response)
                    console.log(response.playlists.items[0].uri);
                    playlistId = response.playlists.items[0].uri;
                    playlistId = encodeURIComponent(playlistId);
                    var playlistUrl = "https://open.spotify.com/embed?uri="+playlistId+"&theme=white";
                    console.log("play list URL: " + playlistUrl);
                    $("#playlist").attr('src', playlistUrl);
                }
                //pass the emotion to the API
                //add the playlist to the iframe
            })
        }
    });

var start = window.location.href.indexOf("=");

var str = window.location.href;

// token = str.substr(start + 1, 143);
        // ======================================================================

        // ** Ajax POST request for Face++ (works for URL only)** 

        // ======================================================================
        // This .on("click") function will trigger the AJAX Call 
        $("#getEmotion").on("click", function (event) {
            event.preventDefault();

            var settings = {
                "url": "https://cors-anywhere.herokuapp.com/https://api-us.faceplusplus.com/facepp/v3/detect?api_key=IxaSYmkV56pcddBXwcShQhnJenSDqE0B&api_secret=CKz2ziVEr8tiDMX8dIWpD5hjeyme102o&image_url=http://entertainment.ie//images_content/rectangle/620x372/Shining201210161622705.jpg&return_attributes=emotion",
                "method": "POST",
            }
            $.ajax(settings).done(function (response) {

                var emotionArray = response.faces[0].attributes.emotion;
                console.log(emotionArray);

                keysSorted = Object.keys(emotionArray).sort(function (a, b) {
                    return emotionArray[a] - emotionArray[b]
                })
                console.log(keysSorted);

                var emotion = keysSorted[6];

                console.log(keysSorted[6]);
            });
        });
        // ======================================================================
        // ** Take input from "upload button" and convert it into a data-form that can be used in the "query string URL"

        window.onload = function () {

            var fileInput = document.getElementById('fileInput');
            var fileDisplayArea = document.getElementById('fileDisplayArea');
            var placeholderImage = document.getElementById('placeholderImage');
        
            fileInput.addEventListener('change', function (e) {
                var file = fileInput.files[0];
                var imageType = /image.*/;
        
                if (file.type.match(imageType)) {
                    var reader = new FileReader();
        
                    reader.onload = function (e) {
                        // fileDisplayArea.innerHTML = "";
                        placeholderImage.src = reader.result;
        
                        // var img = new Image();
                        // img.src = reader.result;
                        // img.id = "placeholderImage";
                        // img.className = "placeholder-image";
        
                        // fileDisplayArea.appendChild(img);
        
                    }
        
                    reader.readAsDataURL(file);
                } else {
                    fileDisplayArea.innerHTML = "File not supported!"
                }
            });
        
        }


var value = 0
$("#placeholderImage").rotate({
  bind:
  {
    click: function(){
      value +=90;
      $(this).rotate({ animateTo:value})
    }
  }
});

        // ======================================================================

        // so when the user clicks upload, the local finder comes up and the user chooses a jpeg or png file that is then uploaded to the page inside a **data** var that has already converted the file input from local image format to binary/base64 format. 

        // when the uses chooses the photo form the local drive it will also upload it's self where the current placeholer photo is (class="placeholder-image")