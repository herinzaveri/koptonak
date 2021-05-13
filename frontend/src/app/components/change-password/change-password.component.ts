import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

@Component({
	selector: "app-change-password",
	templateUrl: "./change-password.component.html",
	styleUrls: ["./change-password.component.css"],
})
export class ChangePasswordComponent implements OnInit {
	constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {}

	changeForm: FormGroup;

	userMsg = "";

	ngOnInit(): void {
		this.changeForm = this.fb.group({
			username: ["", Validators.required],
			password: ["", Validators.required],
			confirmPassword: ["", Validators.required],
		});

		this.fillForm();
	}

	async fillForm() {
		let admin: any = await this.loginService.getAdmin();

		this.changeForm.setValue({
			username: admin.username,
			password: admin.password,
			confirmPassword: admin.password,
		});
	}

	async doChange() {
		const adminData = this.changeForm.value;

		if (adminData.password !== adminData.confirmPassword) {
			this.userMsg = "Password does not match";
			setTimeout(() => {
				this.userMsg = "";
			}, 5000);
			return;
		}

		let response = await this.loginService.changeAdmin(adminData);

		alert("Credentials changed successfully");

		this.router.navigate(["/admin"]);
	}
}
