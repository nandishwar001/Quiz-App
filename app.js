function populate() {
	if(quiz.isEnded())  {
		showScores();
	}
	else	{
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;


		var choices = quiz.getQuestionIndex().choices;
		for(var i=0; i<choices.length;i++)	{
			var element = document.getElementById("choice"+i);
			element.innerHTML=choices[i];
			guess("btn"+i, choices[i]);
		}
		showProgress();
	}
};

function guess(id, guess)	{
	var button = document.getElementById(id);
	button.onclick =function(){
		quiz.guess(guess);
		populate();
	}
		
};

function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'>Your Score: "+quiz.score+"</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML=gameOverHtml;
};


function showProgress()	{
	var currentQuestionNumber = quiz.questionIndex+1;
	var element = document.getElementById("progress");
	element.innerHTML="Question " + currentQuestionNumber + "of " + quiz.questions.length;
};


var questions = [
	new Question("Which is not an object oriented programming language?",["Java","C#","C","C++"],"C"),
	new Question("Which language is used for styling web pages?",["JQuery","XML","CSS","HTML"],"CSS"),
	new Question("There are _____ main components of object oriented programming.",["2","5","4","3"],"4"),
	new Question("Which language is used for web apps?",["PHP","JavaScript","Python","All of these"],"All of these"),
	new Question("MVC is a __________.",["Language","Framework","Library","All of these"],"Framework")
];

var quiz = new Quiz(questions);

populate();