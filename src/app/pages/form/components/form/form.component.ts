import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('form', {static: true}) form: ElementRef<HTMLFormElement>;

  constructor() { }

  ngOnInit(): void {
  }

  sendFeedback() {
    alert('Feedback enviado com sucesso!');
    this.form.nativeElement.reset();
  }
}
