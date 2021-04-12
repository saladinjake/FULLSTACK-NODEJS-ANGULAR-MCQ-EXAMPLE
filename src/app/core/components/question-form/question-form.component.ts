
import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {  Question } from '../../models/quiz.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  @Input() question: Question;
  @Output() onChoiceMade = new EventEmitter<string>();

  form: FormGroup;
  now:Date;
  endDate: Date;
  numMinsPerQuestion: number; //2 min
  ngOnInit() {
    this.form = new FormGroup({
      choice: new FormControl()
    });
    // this.now = new Date();
    // this.endDate = new Date();
    this.numMinsPerQuestion = 2;

    this.form.valueChanges.subscribe(this.onChange);
  }

  onChange = () => {
    this.onChoiceMade.emit(this.form.value.choice);
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
       	element.textContent ="time up detected"
        //automatically switch to next
    }
  }

}
