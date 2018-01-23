const Instagram = require('node-instagram').default;
const keys = require('../config/keys');

class InstagramClient {
    constructor() {
        this.engine = null;
    };

    init(user) {
        //if (!this.engine) {
            this.engine = new Instagram({
                clientId: keys.instagramClientId,
                clientSecret: keys.instagramConsumerSecret,
                accessToken: user.instaToken
            });
        //}
    }

    getUserTimeLine() {
        return new Promise((resolve, reject) => {
            this.engine.get("users/self/media/recent", (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
                
            });
        });
    }
}

module.exports = InstagramClient;






