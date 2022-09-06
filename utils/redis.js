const redis = require('redis')

const host = 'awesome.redis.server'
const port = 6380

const url = `redis://${host}:${port}`
const publisher = createClient({ url })

// const publisher = redis.createClient({
//     url: process.env.REDIS_URL,
//     socket: {
//       tls: true,
//       rejectUnauthorized: false
//     }
//   });

//   publisher.on('error', (err) => console.log('Redis Client Error', err));
//   publisher.connect()

exports.publishMessage = (channel, message) => {
    publisher.publish(channel, message)
}



exports.getSubscriber = (channel) => {
    // const subscriber = redis.createClient({
    //     url: process.env.REDIS_URL,
    //     socket: {
    //       tls: true,
    //       rejectUnauthorized: false
    //     }
    //   });
    const host = 'awesome.redis.server'
    const port = 6380

    const url = `redis://${host}:${port}`
    const publisher = createClient({ url })
    subscriber.subscribe(channel)
    return subscriber
}