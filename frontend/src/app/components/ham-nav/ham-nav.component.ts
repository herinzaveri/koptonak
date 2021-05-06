import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-ham-nav",
	templateUrl: "./ham-nav.component.html",
	styleUrls: ["./ham-nav.component.css"],
})
export class HamNavComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		const hamburger = document.querySelector(".hamburger");
		const hamnav = document.querySelector(".ham-nav");
		const overlay = document.querySelector(".overlay");
		const hamOverlay = document.getElementById("overlay");

		console.log(hamburger);
		console.log(overlay);
		try {
			hamburger.addEventListener("click", function () {
				hamburger.classList.toggle("visible");
				hamnav.classList.toggle("visible");
				overlay.classList.toggle("visible");
			});
		} catch {}

		hamOverlay.addEventListener("click", () => {
			hamburger.classList.toggle("visible");
			hamnav.classList.toggle("visible");
			overlay.classList.toggle("visible");
		});
	}
}
