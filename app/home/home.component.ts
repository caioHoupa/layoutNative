import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(page:Page) {
        // hidden action bar
        page.actionBarHidden = true;
    }
    ngOnInit(): void {
    }
}
