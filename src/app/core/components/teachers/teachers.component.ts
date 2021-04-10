import { Component, OnInit } from "@angular/core";
import { CharactersService } from "../../../services/characters.service";
import {
  OwlCarouselConfig,
  BackgroundImage,
  CarouselNavigation,
} from "../../../functions";
@Component({
  selector: "app-teachers",
  templateUrl: "./teachers.component.html",
  styleUrls: ["./teachers.component.scss"],
})
export class TeachersComponent implements OnInit {
  preload: Boolean = false;
  teachersList: any = [];
  constructor(private charactersServices: CharactersService) {}

  ngOnInit(): void {
    BackgroundImage.fnc();
    this.preload = true;
    this.getTeachers();
  }

  getTeachers() {
    return this.charactersServices.getDataP().subscribe((data: {}) => {
      this.teachersList = data;
      this.preload = false;
    });
  }
}
