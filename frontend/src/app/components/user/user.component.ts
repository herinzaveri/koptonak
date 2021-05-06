import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-user",
	templateUrl: "./user.component.html",
	styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
	constructor() {}

	documents = [
		{ name: "herin", link: "https://google.com" },
		{ name: "chaitanya", link: "https://facebook.com" },
		{ name: "rana", link: "https://twitter.com" },
		{ name: "zaveri", link: "https://youtube.com" },
	];

	ngOnInit(): void {}
}
