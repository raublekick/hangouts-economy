// listen on port so now.sh likes it
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const config = require('./config')

console.log('Bot starting...')

app.get("/", (req, res) => {
	res.send("Hello World");
	/*res.writeHead(302, {
		Location: `https://twitter.com/${config.twitterConfig.username}`
	})
	res.end()*/
});

app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});