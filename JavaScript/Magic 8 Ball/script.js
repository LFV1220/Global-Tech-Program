 /* 
    SCRIPT.JS

    This is where you'll complete the SkillBuilder. Look at the Markdown tab (in the same pane as the console) for detailed README instuctions!
*/

let positiveAnswers = [
  "As I see it, yes",
  "It is certain",
  "It is decidedly so",
  "Yes",
  "Yes, definitely"
];

let negativeAnswers = [
  "My reply is no",
  "My sources say no",
  "There is no way",
  "No",
  "Absolutely not!"
];

let maybeAnswers = [
  "Ask again later",
  "Better to not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Reply hazy try again"
];

const NO_QUESTION_WARNING = "You need to ask a question!";

function chooseRandomAnswerType() {
	// Part 1: Your code here 👇
  randomNumber = getRandomNumber(0,2);

  if(randomNumber == 0) {
    return "positive";
  }
  else if(randomNumber == 1) {
    return "negative";
  }
  else {
    return "maybe";
  }
  
}

chooseRandomAnswerTypeTest();

function chooseRandomAnswer(answerType) {
	// Part 2: Your code here 👇
  randomNumber = getRandomNumber(0,4);
  
  if(answerType === "positive") {
    return positiveAnswers[randomNumber];
  }
  else if(answerType === "negative") {
    return negativeAnswers[randomNumber];
  }
  else {
    return maybeAnswers[randomNumber];
  }
  
}

chooseRandomAnswerTest();


function onAnswerRequested() {
  // Part 3: Your code here 👇
  let userInput = getQuestionText();
  
	if (userInput === "") {
    return supplyAnswer(NO_QUESTION_WARNING);
  }

  let randomAnswerType = chooseRandomAnswerType();
  let answer = chooseRandomAnswer(randomAnswerType);

  return supplyAnswer(answer);

}

onAnswerRequestedTest();


/* LEVEL UP - describe how it works below!
  Describe here!
*/