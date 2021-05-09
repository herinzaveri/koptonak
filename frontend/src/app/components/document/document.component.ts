import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-document",
	templateUrl: "./document.component.html",
	styleUrls: ["./document.component.css"],
})
export class DocumentComponent implements OnInit {
	@Input() document;

	documentIcon;

	isAdmin = localStorage.getItem("isAdmin");

	constructor() {}

	ngOnInit(): void {
		if (this.document.type === "document") {
			this.documentIcon = "description";
		} else if (this.document.type === "audio") {
			this.documentIcon = "music_note";
		} else if (this.document.type === "video") {
			this.documentIcon = "play_circle_outline";
		} else if (this.document.type === "image") {
			this.documentIcon = "image";
		}
	}
}
