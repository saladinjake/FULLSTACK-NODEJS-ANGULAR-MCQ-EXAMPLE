import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Quiz, Question } from '../core/models/quiz.model';

import {  HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization': token
    })
  };
  constructor(private http: HttpClient) {

   }
   public getQuizzes() {
    return this.http.get(`../../assets/mockdb/programminglanguages.json`,this.httpOptions).pipe(
      map((result: any[]) => {
        return result.map(r => new Quiz(r.label, r.name, r.description, r.fileName,r.queryId));
      })
    );
  }

  public getQuestions(fileName: string) {
    return this.http.get(`../../assets/mockdb/${fileName}.json`,this.httpOptions).pipe(
      map((result: any[]) => {
        return result.map(r => new Question(r.label, r.choices));
      })
    );
  }
}
