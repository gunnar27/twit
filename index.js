const rwClient = require('./twitterClient.js');


const tweet = async ()=>{
    try {
            await rwClient.v1.tweet({status: "Good Morning Friends!"})
    } catch (e){
        console.error(e)
    }
}

tweet()