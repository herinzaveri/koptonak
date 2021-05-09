import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { UploadService } from "src/app/services/upload.service";

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

	isAdmin = false;

	constructor(private uploadService: UploadService) {}

	ngOnInit(): void {
		// this.renderData();

		console.log(this.documents);
	}

	ngOnChanges() {
		console.log(this.documents);
		this.dataToRender = [...this.documents];
	}

	filterDocuments(event) {
		// console.log(event.target.value);
		// let regex = new RegExp(event.target.value)
		this.dataToRender = this.documents.filter(doc => doc.documentName.includes(event.target.value));
	}
}
