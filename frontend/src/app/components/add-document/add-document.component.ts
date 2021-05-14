import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UploadService } from "src/app/services/upload.service";

@Component({
	selector: "app-add-document",
	templateUrl: "./add-document.component.html",
	styleUrls: ["./add-document.component.css"],
})
export class AddDocumentComponent implements OnInit {
	constructor(private uploadService: UploadService, private router: Router, private route: ActivatedRoute) {}

	userMsg = "";

	documentField;
	documentFile;

	uploadType;
	type;

	isLoading = false;

	fileName = "";

	ngOnInit(): void {
		this.uploadType = "file";

		this.type = this.route.snapshot.paramMap.get("type");
	}

	fileChangeFunc() {
		this.documentField = document.getElementById("document-field");
		this.documentFile = this.documentField.files[0];
		this.fileName = this.documentFile.name;
	}

	async uploadFunction() {
		const title = (<HTMLInputElement>document.getElementById("document-title")).value;

		let link;
		let documentPath;

		setTimeout(() => {
			this.userMsg = "";
		}, 5000);

		if (!title) {
			this.userMsg = "Title is required";
			return;
		}

		if (this.uploadType === "file") {
			if (!this.documentFile) {
				this.userMsg = "Please choose a document";
				return;
			}

			this.isLoading = true;

			if (this.documentFile.type.includes("pdf")) {
				this.type = "document";
			} else if (this.documentFile.type.includes("audio")) {
				this.type = "audio";
			} else if (this.documentFile.type.includes("video")) {
				this.type = "video";
			} else {
				this.userMsg = "Only pdf and audio file is allowed";
				this.isLoading = false;
				return;
			}

			documentPath = await this.uploadService.uploadImage(this.documentFile);
		} else {
			documentPath = (<HTMLInputElement>document.getElementById("document-link")).value;
			if (!documentPath) {
				this.userMsg = "Please enter a link";
				return;
			}

			if (!documentPath.includes("http://") && !documentPath.includes("https://")) {
				documentPath = "https://" + documentPath;
			}
		}

		if (documentPath) {
			this.isLoading = true;
			const responseMsg = await this.uploadService.insertData({
				documentName: title,
				documentPath,
				type: this.type,
			});

			alert(responseMsg);

			this.isLoading = false;

			this.router.navigate(["/admin"]);
		}
	}
}
