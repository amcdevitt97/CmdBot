exports.handleMessage = function(bot, msg, callback) {
    //Grab the chat ID
    var chatID = msg.chat.id;

    if(!msg.text) {
        return callback(false);
    }

    msg.text = msg.text.toLowerCase()
    if(msg.text.indexOf("fuck") > -1 && msg.text.indexOf("this") > -1 && msg.text.indexOf("shit") > -1 && (msg.text.indexOf("im") > -1 || msg.text.indexOf("i'm") > -1 || msg.text.indexOf("i’m") > -1) && msg.text.indexOf("out") > -1) {
        bot.sendMessage(chatID, "https://www.youtube.com/watch?v=5FjWe31S_0g", {reply_to_message_id: msg["message_id"]});
        return callback(true);
    }

    return callback(false);
};