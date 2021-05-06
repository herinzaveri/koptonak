import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "app-tabs-menu",
	templateUrl: "./tabs-menu.component.html",
	styleUrls: ["./tabs-menu.component.css"],
	encapsulation: ViewEncapsulation.None,
})
export class TabsMenuComponent implements OnInit {
	@Input() documents;
	@Input() agents;

	dataToRender;

	constructor() {}

	ngOnInit(): void {
		this.dataToRender = [...this.documents];
	}
}
