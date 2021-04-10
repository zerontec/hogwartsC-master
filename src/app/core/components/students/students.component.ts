import { Component, OnInit } from "@angular/core";
import { CharactersService } from "../../../services/characters.service";
import { BackgroundImage } from "../../../functions";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent implements OnInit {
  studentList: any = [];
  preload: Boolean = false;

  constructor(private charactersServices: CharactersService) {}

  ngOnInit(): void {
    BackgroundImage.fnc();
    this.preload = true;
    this.getStudents();
  }

  getStudents() {
    return this.charactersServices.getData().subscribe((data: {}) => {
      this.studentList = data;
      this.preload = false;
    });
  }
}
