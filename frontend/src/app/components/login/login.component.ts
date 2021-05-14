import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
	encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
	constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {}

	loginForm: FormGroup;

	userMsg = "";

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			username: ["", Validators.required],
			password: ["", Validators.required],
		});
	}

	async doLogin() {
		let response: any = await this.loginService.login(this.loginForm.value);

		if (response.status === 200) {
			localStorage.setItem("admin", JSON.stringify(response.admin));
			localStorage.setItem("isAdmin", "true");
			this.router.navigate(["/admin"]);
		} else {
			this.userMsg = response.msg;
		}
	}
}
