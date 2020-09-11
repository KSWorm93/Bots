module.exports = {
    play: play
};


function play() {
    console.log("playing already!");
    return {
        name: 'Play',
        description: 'Play music link!',
        execute(msg, args) {
            msg.reply('pong');
            msg.channel.send('pong');
        },
    }
}


