{ /* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */ }



// ** To grab the "Bearer-Token" from the redirected URL after logining into Spotify **
// Example URL after the redirect: 
//https://bioinformatics-surgeon.github.io/MoodyApp/#access_token=BQBNFC7s_igIqfXCCQ2ALuqUorRjDTIdOe-B3jOj6OI-CO82EUYbXCMpK_Z0ZQqjAbPw4-uqXBplmWAnYNEc1MuKCHQZ6HukzAkMT7bvuhYWOaqM8mY_fYu4CvpcongtUtTki61eymrxBCw&token_type=Bearer&expires_in=3600

// ======================================================================
var start = window.location.href.indexOf("=");

var str = window.location.href;

token = str.substr(start + 1, 143);

console.log(token);
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


    fileInput.addEventListener('change', function (e) {
        var file = fileInput.files[0];
        var imageType = /image.*/;

        if (file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function (e) {
                fileDisplayArea.innerHTML = "";

                var img = new Image();
                img.src = reader.result;

                fileDisplayArea.appendChild(img);

            }

            reader.readAsDataURL(file);
        } else {
            fileDisplayArea.innerHTML = "File not supported!"
        }
    });

}

{
    /* <div>
    Select an image file: 
    <input type="file" id="fileInput">
    </div>
    <div id="fileDisplayArea"></div> */
}

// ======================================================================

// so when the user clicks upload, the local finder comes up and the user chooses a jpeg or png file that is then uploaded to the page inside a **data** var that has already converted the file input from local image format to binary/base64 format. 

// when the uses chooses the photo form the local drive it will also upload it's self where the current placeholer photo is (class="placeholder-image")