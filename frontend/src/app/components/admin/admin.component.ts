import { Component, OnInit } from "@angular/core";
import { UploadService } from "src/app/services/upload.service";

@Component({
	selector: "app-admin",
	templateUrl: "./admin.component.html",
	styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
	documents = [
		// { name: "herin", link: "https://google.com", type: "document" },
		// { name: "chaitanya", link: "https://facebook.com", type: "audio" },
		// { name: "rana", link: "https://twitter.com", type: "document" },
		// { name: "zaveri", link: "https://youtube.com", type: "document" },
	];

	agents = [
		{ name: "herin", link: "https://google.com", type: "document", id: 1234 },
		{ name: "chaitanya", link: "https://facebook.com", type: "audio", id: 2344 },
		{ name: "rana", link: "https://twitter.com", type: "document", id: 3455 },
		{ name: "zaveri", link: "https://youtube.com", type: "document", id: 7654 },
	];

	constructor(private uploadService: UploadService) {}

	ngOnInit(): void {
		this.renderData();
	}

	async renderData() {
		this.documents = await this.uploadService.fetchData();
	}
}
