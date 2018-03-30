// To grab the Bearer Token from the redirected URL after logining into Spotify 

// Example URL after the redirect 

// https://bioinformatics-surgeon.github.io/MoodyApp/#access_token=BQBNFC7s_igIqfXCCQ2ALuqUorRjDTIdOe-B3jOj6OI-CO82EUYbXCMpK_Z0ZQqjAbPw4-uqXBplmWAnYNEc1MuKCHQZ6HukzAkMT7bvuhYWOaqM8mY_fYu4CvpcongtUtTki61eymrxBCw&token_type=Bearer&expires_in=3600

var start = window.location.href.indexOf("=");

var str = window.location.href;

token = str.substr(start + 1,143);

console.log ( token );