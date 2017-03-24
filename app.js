var TwitterPackage = require('twitter');

var secret = {
    consumer_key: ,
    consumer_secret: ,
    access_token_key: ,
    access_token_secret: 
}

var Twitter = new TwitterPackage(secret);

Twitter.post('statuses/update', {status: 'Hello, I am the VolunTEE-REX bot. Let\'s improve our communities through service. RAAAAWWWWR!!!!!'}, function(error, tweet, response) {
    if (error) {
        console.log(error);
    }
    console.log(tweet); // tweet body
    console.log(response); // raw response object
});