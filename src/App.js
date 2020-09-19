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
		var form = document.getElementById("parties");

		//===========================================================
		// METTRE À JOUR LES YEUX
		//===========================================================
		var inYeux = form.inYeux;
		var no = inYeux.value;
		var yeux = document.getElementById("yeux");
		yeux.src = "images/yeux"+no+".png";
		
		//===========================================================
		// METTRE À JOUR LE NEZ
		//===========================================================
		var inNez = form.inNez;
		var taille = inNez.value;
		var nez = document.getElementById("nez");
		nez.src = "images/nez_"+taille+".png";

		//===========================================================
		// METTRE À JOUR LE CHAPEAU
		//===========================================================
		var inChapeau = form.inChapeau;
		var type = inChapeau.value;
		var chapeau = document.getElementById("chapeau");
		chapeau.src = "images/chapeau_"+type+".png";

		//===========================================================
		// METTRE À JOUR LA BOUCHE
		//===========================================================
		var inTirer = form.inTirer;
		var tirer = inTirer.checked;
		var bouche = document.getElementById("bouche");
		if (tirer === true) {
			bouche.src = "images/bouche_langue.png";
		} else {
			bouche.src = "images/bouche.png";
		}

		//===========================================================
		// METTRE À JOUR LA BARBE
		//===========================================================
		var inBarbe = form.inBarbe;
		var couleur = inBarbe.value;
		var barbe = document.getElementById("barbe");
		if (couleur !== "") {
			barbe.src = "images/barbe_"+couleur+".png";
		} else {
			barbe.src = "images/vide.png";
		}
		 
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
