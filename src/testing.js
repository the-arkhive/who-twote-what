//bearer token: AAAAAAAAAAAAAAAAAAAAAF4l9gAAAAAApkddxTnABchEhbQzcbENzIXkTiE%3D8vO58xafwUsshmDjyyVtsvcp4MEyJazlrmTNgCV8aZjyo87S2y

var Twit = require('twit')

var T = new Twit({
    consumer_key: 'CUUNuT0vlRRXz039KpBeYJCcy',
    consumer_secret: 'GFvcTpWxrzzXHdJI2ToandnPyTSG7YUC1d2fh1TFPI0Y7QWnkY',
    access_token: '2909934652-k0mHQI7SrZADlTjHHdhWuTOwTwu4b9cPf9Yil3U',
    access_token_secret: 'WSY47I8IXXQLuuTeAolkVuv6lgjqJzh1EMglruSyPrjrb'
})

T.get('account/verify_credentials', {
    include_entities: false,
    skip_status: true,
    include_email: false
}, onAuthenticated)


var num = 10;
var tweets = [];

var params1 = {
    screen_name: 'BarackObama',
    count: num,
    json: true,
};
var params2 = {
    screen_name: 'TheEllenShow',
    count: num,
    json: true,
};

function getTweets() {
    T.get("statuses/user_timeline", params1, searchedData);
    //console.log('things are working so far')
    T.get("statuses/user_timeline", params2, searchedData);
    
    tweets = shuffle(tweets)
    console.log('--------------------------------')
    console.log(tweets)
}

function searchedData(err, data, res) {
  var rawData = data;
  for (var i = 0; i < rawData.length; i++) {
      var tweet = {'user': data[i].user.screen_name, 'tweet': data[i].text, 'propic': data[i].user.profile_image_url_https}
      tweets.push(tweet);
      console.log(tweet);
    }
    console.log(err)
    //console.log(response)
    //console.log(tweets)
}

function onAuthenticated(err, res) {
    if (err) {
        throw err
    }
}

function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}

getTweets()

/* var Twit = require("twit");

var client = new Twit({
    consumer_key: 'CUUNuT0vlRRXz039KpBeYJCcy',
    consumer_secret: 'GFvcTpWxrzzXHdJI2ToandnPyTSG7YUC1d2fh1TFPI0Y7QWnkY',
    access_token: '2909934652-k0mHQI7SrZADlTjHHdhWuTOwTwu4b9cPf9Yil3U',
    access_token_secret: 'WSY47I8IXXQLuuTeAolkVuv6lgjqJzh1EMglruSyPrjrb',
    bearer_token: 'Q1VVTnVUMHZsUlJYejAzOUtwQmVZSkNjeTpHRnZjVHBXeHJ6elhIZEpJMlRvYW5kblB5VFNHN1lVQzFkMmZoMVRGUEkwWTdRV25rWQ==',
    url: 'https://api.twitter.com/oauth2/token',
    headers: {
        'Authorization': 'Basic ' + 'Q1VVTnVUMHZsUlJYejAzOUtwQmVZSkNjeTpHRnZjVHBXeHJ6elhIZEpJMlRvYW5kblB5VFNHN1lVQzFkMmZoMVRGUEkwWTdRV25rWQ==',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
        body: 'grant_type=client_credentials',
});
*/