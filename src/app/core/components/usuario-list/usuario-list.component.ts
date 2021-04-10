import { Characters } from "./../../../models/bio";
import { BackgroundImage } from "../../../functions";

import { Component, OnInit } from "@angular/core";
import { NewStudentService } from "../../../services/new-student.service";

@Component({
  selector: "app-usuario-list",
  templateUrl: "./usuario-list.component.html",
  styleUrls: ["./usuario-list.component.scss"],
})
export class UsuarioListComponent implements OnInit {
  newStudents: Characters[];
  newStudent: Characters;

  constructor(private newstudenServices: NewStudentService) {}

  ngOnInit(): void {
    BackgroundImage.fnc();
    this.newStudents = this.newstudenServices.getallStudent();
    console.log(this.newStudents);
  }
}
