// alert("connected");




$(document).ready(function() {
  
  var emotionMappingObject = {
    sad: "0ejyqdntIi7ZukKgCABVFq",
    angry: "1yrVnLy8kZYvp8r6XuLono",
    happy: "6AtEuKdXIbx2w5Lhqf0GRP",
    disgust: "7LzO31VmX8H8oHPCZk7AKw",
    neutral: "4KjjGytXjIH2KZ41HKjz4R",
    fear: "1Alb1XSrOASaO2Wdrr7lL8",
    suprise: "3gbUs7iNyYP6E3cr9xQZsD"
  };

    var start = window.location.href.indexOf("=");
    var end = window.location.href.indexOf("&");
    var str = window.location.href;
    var token = str.substring(start + 1, end);
    // var token = "BQBJqYhw1Zr8XV7x-_AHE_GWx0267QKZOxQQ7UnH1Y6bnLAI5I-z0YsxSxowIo2vGBzd4DXih2_ZwI1-UnalXTzKmwC_j9X9YNyRfLLL_SBw3ydXYUOdC6CEFyjP-koiUqc-qMa39pT1S1E-_w"
    
    // console.log("token: ",token);



  $.ajax({
    url:
      "https://api.spotify.com/v1/users/ddcrawford28/playlists/" +
      emotionMappingObject.angry,
    headers: {
      'Authorization': `Bearer${token}`
    },
//    BQD_HUlgdkR2ZteEt4yhQ2JQu973Hqk1-DQXatk4obARx58QFJSUue_nGuIPyLvlre72cWZDRo1xSHv6YUzSmNajU7hXukkf0qtnnq0ff9AAoq_3XKMiql6vQUSbmELirewje9Clavcey2MKng
    //   (`Fifteen is ${a + b} and
    //   not ${2 * a + b}.`);

    success: function(response) {
      console.log("response: ", response);
    }
  });
});
// ** To grab the "Bearer-Token" from the redirected URL after logining into Spotify **
// Example URL after the redirect:
//https://bioinformatics-surgeon.github.io/MoodyApp/#access_token=BQBNFC7s_igIqfXCCQ2ALuqUorRjDTIdOe-B3jOj6OI-CO82EUYbXCMpK_Z0ZQqjAbPw4-uqXBplmWAnYNEc1MuKCHQZ6HukzAkMT7bvuhYWOaqM8mY_fYu4CvpcongtUtTki61eymrxBCw&token_type=Bearer&expires_in=3600
// ======================================================================
