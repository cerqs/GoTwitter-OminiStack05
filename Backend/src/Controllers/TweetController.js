const Tweet = require ('../Models/Tweet');

module.exports = {
    
    async index(request, response){
        const tweets = await Tweet.find({}).sort('-createdAt');
        return response.json(tweets);
    },
    
    async store(request, response){
        const tweet = await Tweet.create(request.body);

        request.io.emit('tweet', tweet);

        return response.json(tweet);

    }
}
