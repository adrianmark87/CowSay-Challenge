
let cowsay = require('cowsay')

const userInfo = require('./information');
console.log(cowsay.say ({
  text : `Hi, my name is ${userInfo.campusInfo.myName} and I am a student in the ${userInfo.campusInfo.campus} campus.`
}));




