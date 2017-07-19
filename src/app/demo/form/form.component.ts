import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Profile } from './form-demo.model';
import { forbiddenNameValidator } from './form-demo.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  myData: Profile;
  reactForm: FormGroup;

  constructor( @Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      name: fb.group({
        first: '',
        last: '',
      }),
      email: '',
    });

    this.myData = new Profile();

    this.reactForm = fb.group({
      fname: [this.myData.fname, Validators.required],
      lname: [this.myData.lname, Validators.compose([forbiddenNameValidator(new RegExp(/koch/i))]) ],
      email: this.myData.email,
      rank: 15,
    });

  }

  ngOnInit() {
  }

  onValidateSubmit() {
    console.log('Submit click...');
  }
}
