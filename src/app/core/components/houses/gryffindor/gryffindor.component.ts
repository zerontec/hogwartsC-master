import { Component, OnInit } from "@angular/core";

import { HousesService } from "../../../../services/houses.service";

@Component({
  selector: "app-gryffindor",
  templateUrl: "./gryffindor.component.html",
  styleUrls: ["./gryffindor.component.scss"],
})
export class GryffindorComponent implements OnInit {
  houseList: any = [];
  preload: Boolean = false;
  constructor(private housesServices: HousesService) {}

  ngOnInit(): void {
    this.preload = true;
    this.getGryfindors();
  }

  getGryfindors() {
    return this.housesServices.getDataG().subscribe((data: {}) => {
      this.houseList = data;
      this.preload = false;
    });
  }
}
