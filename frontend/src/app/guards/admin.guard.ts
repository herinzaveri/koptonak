import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";

@Injectable({
	providedIn: "root",
})
export class AdminGuard implements CanActivate {
	constructor(private loginService: LoginService, private router: Router) {}

	canActivate() {
		if (this.loginService.ensureAdmin()) {
			return true;
		} else {
			localStorage.removeItem("admin");
			localStorage.removeItem("isAdmin");
			this.router.navigate(["/login"]);
		}
	}
}
