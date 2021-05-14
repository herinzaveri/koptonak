import { Component, OnInit } from "@angular/core";
import { UploadService } from "src/app/services/upload.service";

@Component({
	selector: "app-user",
	templateUrl: "./user.component.html",
	styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
	constructor(private uploadService: UploadService) {}

	isLoading = true;

	documents = [
		// { name: "herin", link: "https://google.com" },
		// { name: "chaitanya", link: "https://facebook.com" },
		// { name: "rana", link: "https://twitter.com" },
		// { name: "zaveri", link: "https://youtube.com" },
	];

	ngOnInit(): void {
		this.renderData();
	}

	async renderData() {
		this.documents = await this.uploadService.fetchData();

		this.isLoading = false;
	}
}
