import Zombie from "./Zombie.js";

/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");
		var form = app.appendChild(Zombie.form());
		var zombie = new Zombie();
		app.appendChild(zombie.html());
		var form = document.forms.parties;
		
		form.addEventListener("input", e => {
			zombie.mettreAJour(form);
		});
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
