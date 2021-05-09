import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UploadService } from "src/app/services/upload.service";

@Component({
	selector: "app-add-document",
	templateUrl: "./add-document.component.html",
	styleUrls: ["./add-document.component.css"],
})
export class AddDocumentComponent implements OnInit {
	constructor(private uploadService: UploadService, private router: Router) {}

	userMsg = "";

	documentField;
	documentFile;
	titleField;

	fileName = "";

	ngOnInit(): void {
		this.documentField = document.getElementById("document-field");
		this.titleField = document.getElementById("document-title");
	}

	fileChangeFunc() {
		this.documentFile = this.documentField.files[0];
		this.fileName = this.documentFile.name;
		console.log(this.documentFile);
	}

	async uploadFunction() {
		const title = this.titleField.value;
		let type;
		console.log(title);

		setTimeout(() => {
			this.userMsg = "";
		}, 5000);

		if (!title) {
			this.userMsg = "Title is required";
			return;
		}

		if (!this.documentFile) {
			this.userMsg = "Please choose a document";
			return;
		}

		if (this.documentFile.type.includes("pdf")) {
			type = "document";
		} else if (this.documentFile.type.includes("audio")) {
			type = "audio";
		} else {
			this.userMsg = "Only pdf and audio file is allowed";
			return;
		}

		const documentPath = await this.uploadService.uploadImage(this.documentFile);

		if (documentPath) {
			const responseMsg = await this.uploadService.insertData({
				documentName: title,
				documentPath,
				type,
			});

			alert(responseMsg);

			this.router.navigate(["/admin"]);
		}
	}
}
