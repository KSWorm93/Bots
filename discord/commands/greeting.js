const greetings = ['Hi', 'Hello', 'Hey', 'Yo', 'Heyo', 'Greetings'];
const secondaries = [
    'How are you doing today?',
    'Nice to see you again!',
    'Is this your first time here?',
    'Welcome!', 'Do you hate 2FA as much as i do?'
]

module.exports = {
    name: 'greeting',
    aliases: greetings,
    description: 'Replies with a random greeintg',
    execute(msg, args) {
        var greeting = arrRandom(greetings);
        var secondary = arrRandom(secondaries);
        msg.channel.send(`${greeting} ${msg.author}! ${secondary}`)
    },
};

function arrRandom(arr) {
    return arr[Math.random() * arr.length >> 0];
}
