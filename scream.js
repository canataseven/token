const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get("http://boost-aktif.glitch.me/");
}, 3000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const scream = new Discord.Client();
const scream1 = new Discord.Client();
const scream2 = new Discord.Client();
const scream3 = new Discord.Client();
const scream4 = new Discord.Client();
const scream5 = new Discord.Client();


scream1.login("NzMxNjU4ODcyMzU1NDIyMzMx.XwpQyg.YKxwBJ9i1sLjJB1dHYG6Y-fSpEk");
scream2.login("NzMxNjY3NzAyNDM4OTUyOTcw.XwpY2w.kKaINGgq-TAji3knQBR8eLUGPc8");
scream3.login("NzMxNjY4NDUyODE2OTc3OTM0.XwpZjg.UmkEHxVpQ0RrnoAPjNOVpSdeG3s");
scream4.login("NzMxNjY5Njc3NzI5OTA2NzYz.Xwpasg.TXCFbgC3tPAqyMr83qvJec9bmUU");
