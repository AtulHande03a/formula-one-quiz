var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score =0;
// data of high score
var highScores = [
  {
    name: "Atul",
    score: 3,
  },
]

//welcome and asking user name
function welcome(){
console.log(chalk.yellow.bold("Hi! Are you ready for a rapid fire round on Formula one cars and its history??"));

var userName = readlineSync.question("What is your name?");
console.log(chalk.yellow.bold(`${userName} ..Lets play!!`));
}


function play(question, answer){

  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log(chalk.green("You answere right!!"));
    score++;
  }else {
    console.log(chalk.red("You answered wrong."));
    
  }
  console.log(chalk.grey.bold(`-------------- `));
}

//array of objects
var questions = [{
  question : `Who won the 2019 grand prix championship?
              a: sebastian vettel
              b: valteri Bottas
              c: lewis hamilton`,
  answer  :   "c"
  
},{
  question : `Hamilton is associated with which team?"
              a. mercedes
              b. ferrari
              c. renault`,
  answer  :   "a"

},
{
  question : `What engine specification does formula car use?
              a. v8
              b. v12
              c. v6 hybrid`,
  answer  :   "c"

},
{
  question : `How many championship has Sebastian Vettel won?
              a. one
              b. three
              c. four`,
  answer  :   "c"

},{
  question : `Who won Italian gp 2021?
              a. vettel
              b. daniel riccardo
              c. Bottas`,
  answer  :   "b"

},
{
  question : `Which team will George Russel will join in 2022?
              a. ferrari
              b.alpine racing
              c. mercedes amg`,
  answer  :   "c"


}];

//gamelogic
function game(){
for (let i= 0; i< questions.length; i++){
  let  currentquestion = questions[i];
  play(currentquestion.question, currentquestion.answer);
}
}


//highscore
function showScores() {
  console.log(chalk.green.bold("Yay! Your score is:"+ score));

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();