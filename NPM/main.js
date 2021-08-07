var funnyWords = require("funny-words");
var randomWords = require("random-words");
var oneLinerJokes = require("one-liner-joke");
var figlet = require("figlet");
var cowSay = require("cowsay");

console.log(funnyWords("Dont worry, be happy, life is short"));
console.log(randomWords());

var joke1 = oneLinerJokes.getRandomJoke();
console.log(joke1);
console.log(joke1.body);

console.log(cowSay.say({
	text : "I'm a Milena",
	e : "cc",
	T : "oOoo "
}));


figlet.text('Boo!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
