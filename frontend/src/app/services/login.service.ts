import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class LoginService {
	constructor(private http: HttpClient, private router: Router) {}

	async login(user) {
		console.log(user);
		const url = "https://koptonak.chaitanyarana.com/login";

		let response = await this.http.post(url, user).toPromise();

		return response;
	}

	ensureAdmin() {
		const admin = localStorage.getItem("admin");

		if (admin) {
			return true;
		} else {
			return false;
		}
	}

	logout() {
		localStorage.removeItem("admin");
		localStorage.removeItem("isAdmin");
		this.router.navigate(["/login"]);
	}
}
