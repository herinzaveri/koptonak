import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { UploadService } from "src/app/services/upload.service";

@Component({
	selector: "app-document",
	templateUrl: "./document.component.html",
	styleUrls: ["./document.component.css"],
})
export class DocumentComponent implements OnInit {
	@Input() document;

	@Output() deleteEvent = new EventEmitter();

	documentIcon;

	isAdmin = localStorage.getItem("isAdmin");

	constructor(private router: Router, private uploadService: UploadService) {}

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

	navigateEdit() {
		this.router.navigate(["edit-document"], { state: this.document });
	}

	async doDelete() {
		const confirmation = confirm("Are you sure you want to delete this");

		if (confirmation) {
			await this.uploadService.deleteData(this.document._id);

			this.deleteEvent.emit();
		}
	}
}
