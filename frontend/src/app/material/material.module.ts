import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";

const Material = [MatButtonModule, MatInputModule, MatSidenavModule, MatButtonToggleModule, MatListModule, MatIconModule, MatTabsModule];

@NgModule({
	imports: [Material],
	exports: [Material],
})
export class MaterialModule {}
