import { JsonpClientBackend } from "@angular/common/http";
import { Component, OnInit, NgZone } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BackgroundImage } from "../../../functions";
import { Router } from "@angular/router";
import { NewStudentService } from "../../../services/new-student.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  preload: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private newStudent: NewStudentService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    BackgroundImage.fnc();

    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      patronus: ["", Validators.required],
      house: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
    });
  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmitted() {
    this.preload = true;
    this.submitted = true;

    this.newStudent.createStudent(this.registerForm.value);

    this.ngZone.run(() => this.router.navigateByUrl("/new-students"));

    if (this.registerForm.invalid) {
      return;
    }

    alert(
      "Registro Exitoso " + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
