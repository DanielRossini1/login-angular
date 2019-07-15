import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  stringSenha: String;
  stringConfirmSenha: String;

  formRegister = new FormGroup({
    usuario: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    senha: new FormControl('',
    Validators.required
    ),
    confirmSenha: new FormControl('',
      Validators.required
    ),
  }, { validators: this.validaConfirmSenha });
  
  ngOnInit() {
    this.stringSenha = '';
    this.stringConfirmSenha = '';
    this.spinner.show();
    
    setTimeout(() => {
      this.spinner.hide();
    }, 300);

    this.formRegister.controls.senha.valueChanges.subscribe(val => {
      this.stringSenha = val;
    });
    this.formRegister.controls.confirmSenha.valueChanges.subscribe(val => {
      this.stringConfirmSenha = val;
    });
  }
  
  onSubmit(){
    console.log(this.formRegister);
  }
  
  validaConfirmSenha(form: FormGroup){
    console.log(form);
    if(form.controls.senha.value != form.controls.confirmSenha.value){
      return { "confirmarSenha": true };
    }
    return null;
  }
  
}
