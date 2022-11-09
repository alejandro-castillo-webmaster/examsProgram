import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showInput: number = 1;
  public score: number = 0;
  public answerEmpty: boolean = false;
  public answerError: boolean = false;
  public answerCorrect: boolean = false;
  public answers: string[] = ['no', '20', '1492', '1', '1', '100', '22', '1', 'si', '1'];
  public responseAnswersBolean: boolean[] = [];
  public incorrectResponse: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  checkTest(event: any, numberQuestion: number) {
    this.answerEmpty = false;
    this.answerError = false;
    this.answerCorrect = false;

    // If we don't have answer, we return
    if (!event) {
      this.answerEmpty = true;
      return;
    }

    let tempAnswers = this.answers[numberQuestion];
    // We check de answer is correctly
    if (event === tempAnswers) {
      this.score++;
      this.answerCorrect = true;
      this.responseAnswersBolean.push(true);
    } else {
      this.answerError = true;
      this.incorrectResponse = event;
      this.responseAnswersBolean.push(false);
    }

  }

  // We go to the next question, after make a mistake answer
  nextQuestion() {
    this.answerEmpty = false;
    this.answerError = false;
    this.showInput++;
  }

  // We go to the next question, after make a correct answer
  nextQuestionCorrect() {
    this.answerCorrect = false;
    this.showInput++;
  }

}
