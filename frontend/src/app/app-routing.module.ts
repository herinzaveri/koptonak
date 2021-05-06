import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddAgentComponent } from "./components/add-agent/add-agent.component";
import { AddDocumentComponent } from "./components/add-document/add-document.component";
import { AdminComponent } from "./components/admin/admin.component";
import { DocumentComponent } from "./components/document/document.component";
import { HamNavComponent } from "./components/ham-nav/ham-nav.component";
import { LoginComponent } from "./components/login/login.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { TabsMenuComponent } from "./components/tabs-menu/tabs-menu.component";
import { UserComponent } from "./components/user/user.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

const routes: Routes = [
	{ path: "", component: WelcomeComponent },
	{ path: "login", component: LoginComponent },
	{ path: "admin", component: AdminComponent },
	{ path: "add-agent", component: AddAgentComponent },
	{ path: "add-document", component: AddDocumentComponent },
	{ path: "user", component: UserComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [LoginComponent, AdminComponent, UserComponent, DocumentComponent, HamNavComponent, TabsMenuComponent, NavBarComponent, AddAgentComponent, AddDocumentComponent, WelcomeComponent];
