import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";

@Injectable({
	providedIn: "root",
})
export class LoginGuard implements CanActivate {
	constructor(private loginService: LoginService, private router: Router) {}

	canActivate() {
		if (!this.loginService.ensureAdmin()) {
			return true;
		} else {
			this.router.navigate(["/admin"]);
		}
	}
}
