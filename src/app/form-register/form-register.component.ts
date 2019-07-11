import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  formRegister = new FormGroup({
    usuario: new FormControl(''),
    senha: new FormControl(''),
    confirmSenha: new FormControl(''),
  });

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 300);
  }

  onSubmit(){
    console.error(this.formRegister);
  }

}
