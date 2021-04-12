import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';


import { QuestionsService } from '../../../sharedlibs/quiz.service';
import { Quiz, Answers, Choice, Question} from '../../models/quiz.model';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, DoCheck {

  quiz: Quiz;
  answers: Answers;
  questions: Question[];
  currentQuestionIndex: number;

  showResults = false;
  // inject both the active route and the questions service
  constructor(private route: ActivatedRoute, private questionsService: QuestionsService) { }

  ngOnInit() {
    //read from the dynamic route and load the proper quiz data
    console.log(this.route.snapshot.params.id)
    this.questionsService.getQuestions(this.route.snapshot.params.id)
      .subscribe(questions => {
        console.log(questions)
        this.questions = questions;
        this.answers = new Answers();
        this.currentQuestionIndex = 0;
      });
  }

  updateChoice(choice: Choice) {
    this.answers.values[this.currentQuestionIndex] = choice;
  }

  nextOrViewResults() {
    console.log("refreshing auto click")
    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.showResults = true;
      return;
    }
    this.currentQuestionIndex++;
  }

  reset() {
    this.quiz = undefined;
    this.questions = undefined;
    this.answers = undefined;
    this.currentQuestionIndex = undefined;
  }






  ngDoCheck(){
    this.runTimer();
    //the reset for the next question

  }

  runTimer = () =>{
    var clock = document.getElementById('clock');
    var countDown = document.getElementById('count-down');


    var now = new Date();
    var endDate = new Date(now.getTime() + 2*60000); //2 mins for each question
    setInterval(()=> {
    	this.updateClock(clock);
    	this.updateCountDown(countDown, endDate);
    }, 1000);
  }



  formatTimeNumber(number) {
  	if (number < 10) {
  		return "0" + number;
  	}
  	else {
  		return "" + number;
  	}
  }

  timeToString(hours, minutes, seconds) {
  	return "" + hours + ":" + this.formatTimeNumber(minutes) + ":" + this.formatTimeNumber(seconds);
  }

  updateClock(clock) {
  	var currentTime = new Date();
  	var hours = currentTime.getHours();
  	var minutes = currentTime.getMinutes();
  	var seconds = currentTime.getSeconds();
  	var timeString = this.timeToString(hours, minutes, seconds);
  	clock.textContent = timeString;
  }


   epochSecondsForDate(date) {
  	return Math.floor(date.getTime() / 1000);
  }

  formatDuration(totalSeconds) {
  	var seconds = totalSeconds % 60;
  	var minutes = Math.floor(totalSeconds / 60) % 60;
  	var hours = Math.floor(totalSeconds / 3600) % 24;
  	var days = Math.floor(totalSeconds / (3600 * 24));
  	return "" + days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  }

   updateCountDown(element, endDate) {
  	var currentDate =  new Date();
  	var currentTime = this.epochSecondsForDate(currentDate);
  	var endTime = this.epochSecondsForDate(endDate);
  	var secondsRemaining = endTime - currentTime;

  	element.textContent = this.formatDuration(secondsRemaining);
    var ended = Number(secondsRemaining)
    if( ended <= 0){
       //refresh the time
       	element.textContent ="time up detected";
        //automatically switch to next
        this.nextOrViewResults()
    }
  }

}
