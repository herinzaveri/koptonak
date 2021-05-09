import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class UploadService {
	constructor(private http: HttpClient) {}

	async uploadImage(imageFile) {
		const fd = new FormData();
		fd.append("image", imageFile);

		let url = "http://localhost:3000/upload";

		let response: any = await this.http.post(url, fd).toPromise();

		console.log(response);

		return "http://localhost:3000/" + response.path;
	}

	async insertData(bodyObj) {
		let url = "http://localhost:3000/data";

		let response: any = await this.http.post(url, bodyObj).toPromise();

		return response.msg;
	}

	async fetchData() {
		let url = "http://localhost:3000/documents";

		let response: any = await this.http.get(url).toPromise();

		return response;
	}
}
