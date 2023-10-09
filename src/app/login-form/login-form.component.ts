import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    emailphone: [null, Validators.required],
    passsword: [null, Validators.required]
  });

  hasUnitNumber = false;

  hide = true;
}
