/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");

		document.getElementById("btnMettreAJour").addEventListener("click", e => {
			this.mettreAJour();
		});

		// document.getElementById("parties").addEventListener("change", e => {
		// 	this.mettreAJour();
		// });
	}
	static mettreAJour() {
		// Récupérer le formulaire

		//===========================================================
		// METTRE À JOUR LES YEUX
		//===========================================================
		
		//===========================================================
		// METTRE À JOUR LE NEZ
		//===========================================================

		//===========================================================
		// METTRE À JOUR LE CHAPEAU
		//===========================================================

		//===========================================================
		// METTRE À JOUR LA BOUCHE
		//===========================================================

		//===========================================================
		// METTRE À JOUR LA BARBE
		//===========================================================
		 
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
App.init();
