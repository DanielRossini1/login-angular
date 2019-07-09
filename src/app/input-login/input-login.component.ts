import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-login',
  templateUrl: './input-login.component.html',
  styleUrls: ['./input-login.component.scss']
})
export class InputLoginComponent implements OnInit {

  @Input() placeholderName: String;
  @Input() iconInput: String;

  constructor() { }

  ngOnInit() {
    console.log(this.placeholderName);
  }

}
