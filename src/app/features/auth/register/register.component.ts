import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    type: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    denomination: this.fb.array([
      this.fb.control(null)
    ])
  });
  submitted = false;



  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm.controls['type'].valueChanges.subscribe(
      // ajouter ou pas la denomination

    );
  }

  get f() {
    return this.registerForm?.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm?.invalid) {
      return;
    }
  }

  addDenomination(): void {
    (this.registerForm.get('denomination') as FormArray).push(
      this.fb.control(null)
    );
  }

  removePhone(index: any) {
    (this.registerForm.get('denomination') as FormArray).removeAt(index);
  }

  ngOnDestroy(): void {
  }
}
