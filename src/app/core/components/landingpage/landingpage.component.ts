import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../../sharedlibs/quiz.service';
import { Quiz } from '../../models/quiz.model';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

quiz: Quiz[];

constructor(private questionsService: QuestionsService) {
  const style ={
     height: 300,
     backgroundColor: 'red'
  };

}

  ngOnInit(): void {
    this.questionsService.getQuizzes()
      .subscribe(quiz => {
        this.quiz = quiz;
        console.log(this.quiz)
      });
  }

}
