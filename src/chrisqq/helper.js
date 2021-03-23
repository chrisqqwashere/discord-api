const request = require("request");
const chalk = require("chalk");

class Chrisqq {
  constructor(token) {
    this.token = token;
  }

  kullanıcıara(id) {
    var chrisqq;
    request(
      {
        url: "https://discordapp.com/api/v7/users/" + id,
        headers: {
          Authorization: `Bot ${this.token}`,
        },
      },
      function (err, response, body) {
        if (err) console.log(err);
        if (!body) return;
        if (body)
          console.log(chalk.green(id + " adlı kullanıcı başarıyla çekildi ✅"));
        console.log(body);
      }
    );
  }
}
module.exports = Chrisqq;
