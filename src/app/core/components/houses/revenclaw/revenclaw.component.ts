import { Component, OnInit } from "@angular/core";

import { HousesService } from "../../../../services/houses.service";
@Component({
  selector: "app-revenclaw",
  templateUrl: "./revenclaw.component.html",
  styleUrls: ["./revenclaw.component.scss"],
})
export class RevenclawComponent implements OnInit {
  houseList: any = [];
  preload: Boolean = false;
  constructor(private housesServices: HousesService) {}

  ngOnInit(): void {
    this.preload = true;
    this.getravenclaw();
  }

  getravenclaw() {
    return this.housesServices.getDataR().subscribe((data: {}) => {
      this.houseList = data;
      this.preload = false;
    });
  }
}
