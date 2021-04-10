import { Component, OnInit } from "@angular/core";

import { HousesService } from "../../../../services/houses.service";
@Component({
  selector: "app-hufflepuff",
  templateUrl: "./hufflepuff.component.html",
  styleUrls: ["./hufflepuff.component.scss"],
})
export class HufflepuffComponent implements OnInit {
  houseList: any = [];
  preload: Boolean = false;
  constructor(private housesServices: HousesService) {}

  ngOnInit(): void {
    this.preload = true;
    this.getHufflepuff();
  }

  getHufflepuff() {
    return this.housesServices.getDataH().subscribe((data: {}) => {
      this.houseList = data;
      this.preload = false;
    });
  }
}
