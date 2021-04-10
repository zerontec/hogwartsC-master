import { Component, OnInit } from "@angular/core";
import {
  OwlCarouselConfig,
  BackgroundImage,
  CarouselNavigation,
} from "../../../functions";
declare var JQuery: any;
declare var $: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    BackgroundImage.fnc();
    OwlCarouselConfig.fc();
    CarouselNavigation.fc();
  }
}
