import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "src/app/services/login.service";

@Component({
	selector: "app-change-password",
	templateUrl: "./change-password.component.html",
	styleUrls: ["./change-password.component.css"],
})
export class ChangePasswordComponent implements OnInit {
	constructor(private fb: FormBuilder, private loginService: LoginService) {}

	changeForm: FormGroup;

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
}
