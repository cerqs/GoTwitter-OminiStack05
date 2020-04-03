const Tweet = require ('../Models/Tweet');

module.exports = {
    async store (request, response) {
        const tweet = await Tweet.findById(request.params.id)

        tweet.set({ likes: tweet.likes + 1 });

        await tweet.save();

        request.io.emit('like', tweet);
        
        return response.json(tweet);
    },
}