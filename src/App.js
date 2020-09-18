/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");
		document.getElementById("btnMaj").addEventListener("click", e => {
			this.maj();
		});
	}
	static maj() {
		this.majYeux();
		this.majNez();
		this.majChapeau();
		this.majBouche();
		this.majBarbe();
	}
	static majYeux() {
		var form = document.getElementById("parties");
		var inYeux = form.elements.inYeux;
		var no = inYeux.value;
		var yeux = document.getElementById("yeux");
		yeux.src = `images/yeux${no}.png`;
	}
	static majNez() {
		var form = document.getElementById("parties");
		var inNez = form.elements.inNez;
		var taille = inNez.value;
		var nez = document.getElementById("nez");
		nez.src = `images/nez_${taille}.png`;
	}
	static majChapeau() {
		var form = document.getElementById("parties");
		var inChapeau = form.elements.inChapeau;
		var type = inChapeau.value;
		var chapeau = document.getElementById("chapeau");
		chapeau.src = `images/chapeau_${type}.png`;
	}
	static majBouche() {
		var form = document.getElementById("parties");
		var inTirer = form.elements.inTirer;
		var tirer = inTirer.checked;
		var bouche = document.getElementById("bouche");
		if (tirer === true) {
			bouche.src = `images/bouche_langue.png`;
		} else {
			bouche.src = `images/bouche.png`;
		}
	}
	static majBarbe() {
		var form = document.getElementById("parties");
		var inBarbe = form.elements.inBarbe;
		var couleur = inBarbe.value;
		var barbe = document.getElementById("barbe");
		if (couleur !== "") {
			barbe.src = `images/barbe_${couleur}.png`;
		} else {
			barbe.src = `images/vide.png`;
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
