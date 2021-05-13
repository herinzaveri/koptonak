import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UploadService } from "src/app/services/upload.service";

@Component({
	selector: "app-edit-document",
	templateUrl: "./edit-document.component.html",
	styleUrls: ["./edit-document.component.css"],
})
export class EditDocumentComponent implements OnInit {
	document;

	userMsg;

	constructor(private router: Router, private uploadService: UploadService) {
		this.document = this.router.getCurrentNavigation().extras.state;
	}

	ngOnInit(): void {}

	async doUpdate() {
		const documentName = (<HTMLInputElement>document.getElementById("document-title")).value;

		if (!documentName) {
			this.userMsg = "Name cannot be empty";
			setTimeout(() => {
				this.userMsg = "";
			}, 5000);
			return;
		}

		let response: any = await this.uploadService.updateData(this.document._id, documentName);

		alert(response.message);

		this.router.navigate(["/admin"]);
	}
}
