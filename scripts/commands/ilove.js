const fs = require("fs");
module.exports.config = {
  name: "Mim",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I love you")==0 || (event.body.indexOf("/mim")==0 || (event.body.indexOf("Mim")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: "Hmm...আমার বস রাজ এর ভালোবাসে😇😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
