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

		let url = "https://koptonak.chaitanyarana.com/upload";

		let response: any = await this.http.post(url, fd).toPromise();

		console.log(response);

		return "https://koptonak.chaitanyarana.com/" + response.path;
	}

	async insertData(bodyObj) {
		let url = "https://koptonak.chaitanyarana.com/data";

		let response: any = await this.http.post(url, bodyObj).toPromise();

		return response.msg;
	}

	async fetchData() {
		let url = "https://koptonak.chaitanyarana.com/documents";

		let response: any = await this.http.get(url).toPromise();

		return response;
	}

	async updateData(id, documentName) {
		let url = "https://koptonak.chaitanyarana.com/data";

		let response = await this.http.put(url, { id, documentName }).toPromise();

		return response;
	}

	async deleteData(id) {
		let url = `https://koptonak.chaitanyarana.com/data/${id}`;

		let response = await this.http.delete(url).toPromise();

		return response;
	}
}
