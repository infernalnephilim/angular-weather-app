import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  private form: FormGroup;
  location = {
    city: "",
    country: ""
  };

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      city: ['', Validators.required],
      country: ['', Validators.required]
    })
  }

  setLocation() {
    this.location = {
      city: this.form.value.city,
      country: this.form.value.country
    };
    console.log(this.location);
  }

}
