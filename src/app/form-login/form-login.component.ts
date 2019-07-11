import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  formLogin = new FormGroup({
    usuario: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
  ]),
    senha: new FormControl('',
      Validators.required
    ),
  });

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 300);
  }

  onSubmit(){
    console.log(this.formLogin);
  }

}
