import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private http: HttpClient,) { }

  stringSenha: String;
  stringConfirmSenha: String;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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
    var bool = false;
    this.http.get('http://localhost:3000/users').subscribe(val => {
      val.forEach(element => {
        if(element.usuario == this.formRegister.controls.usuario.value){
          console.log("tem igual!");
          bool = true;
          return;
        }
      });
      if(!bool){
        console.log("nao tem igual");
        this.http.post('http://localhost:3000/users',{ usuario: this.formRegister.controls.usuario.value, senha: this.formRegister.controls.senha.value},this.httpOptions).subscribe(function (doido){
          console.log(doido);
        });
      }
    });
  }
  
  validaConfirmSenha(form: FormGroup){
    if(form.controls.senha.value != form.controls.confirmSenha.value){
      return { "confirmarSenha": true };
    }
    return null;
  }
  
}
