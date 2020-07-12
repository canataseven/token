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
const scream6 = new Discord.Client();
const scream7 = new Discord.Client();
const scream8 = new Discord.Client();
const scream9 = new Discord.Client();
const scream10 = new Discord.Client();
const scream11 = new Discord.Client();
const scream12 = new Discord.Client();
const scream13 = new Discord.Client();
const scream14 = new Discord.Client();

scream1.on('message', async msg => {
  if (msg.content.toLowerCase() === "inci") {
      const streamOptions = { seek: 0, volume: 50 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})

scream1.login("NzMxNjU4ODcyMzU1NDIyMzMx.XwpQyg.YKxwBJ9i1sLjJB1dHYG6Y-fSpEk");
scream2.login("NzMxNjY3NzAyNDM4OTUyOTcw.XwpY2w.kKaINGgq-TAji3knQBR8eLUGPc8");
scream3.login("NzMxNjY4NDUyODE2OTc3OTM0.XwpZjg.UmkEHxVpQ0RrnoAPjNOVpSdeG3s");
scream4.login("NzMxNjY5Njc3NzI5OTA2NzYz.Xwpasg.TXCFbgC3tPAqyMr83qvJec9bmUU");
scream5.login("NzMxNjgzNjQ5NTAxNzkwMjgx.Xwpnpw.mABPPa97GebrtJyHr_Jo4bZfTpg");
scream6.login("NzMxNjg0OTQ4NjE1ODg4OTY2.Xwpotw.A0WR9iqnQZzzgdUkLXQR9lTfTvg");
scream7.login("NzMxNjg1ODE2OTcxMjk2Nzcx.Xwppsg.2AUM-jFc2aBGKjKyqzaLuln4iFg");
scream8.login("NzMxNjg2NTAwNjkyOTE4Mjgz.XwpqUg.z7pw9xGbiA1oumTeIN3woMQpe-I");
scream9.login("NzMxNjg3MjI5MTIyMDE5NDIw.Xwpq_w.RUjCiNNPPSbSfY02Su9ZeuPXE84");
scream10.login("NzMxNjg3ODUxMzkzMjg2MjE2.XwprrQ.hQQglXiObq_TTvW0REJJCjs-ZnQ");
scream11.login("NzMxNjkwNTU5ODgxNzQwMzAx.XwpuIg.RTidmhXmAmn9-CFQdPL0M2xA8a0");
scream12.login("NzMxNjkxNDUxNzI5MzEzODMz.Xwpu_Q.uJiOHAP3jgGln_B60whdXusKShI");
scream13.login("NzMxNjkyNDg0MjQ5MjU1OTk3.XwpwBw.L_3WQTehw09C8uaBXijJJcihT3M");
scream14.login("NzMxNjkzNDYwNTgyNTYzODky.XwpwwQ.CGW9VfpgTBXTatZSLg-AanUOlig");

