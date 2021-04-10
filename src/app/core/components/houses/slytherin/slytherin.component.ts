import { Component, OnInit } from "@angular/core";
import { HousesService } from "../../../../services/houses.service";

@Component({
  selector: "app-slytherin",
  templateUrl: "./slytherin.component.html",
  styleUrls: ["./slytherin.component.scss"],
})
export class SlytherinComponent implements OnInit {
  houseList: any = [];
  preload: Boolean = false;

  constructor(private housesServices: HousesService) {}

  ngOnInit(): void {
    this.preload = true;
    this.getSlytherin();
  }

  getSlytherin() {
    return this.housesServices.getDataS().subscribe((data: {}) => {
      this.houseList = data;
      this.preload = false;
    });
  }
}
