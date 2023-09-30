export default class Zombie {
	constructor() {
		this.attributs = {
			tete: 1,
			poils: "blond",
			yeux: 1,
			nez: "gros",
			chapeau: "police",
			bouche: 1,
			barbe: false,
			cheveux: "",
			lunettes: "",
			langue: false,
			moustache: false,
		};
		this.parties = {};
	}
	get poils() {
		return this.attributs.poils;
	}
	set poils(poils) {
		if (poils === this.attributs.poils) return;
		this.attributs.poils = poils;
		if (this.barbe) {
			this.parties.barbe.src = `img/barbe/${poils}.png`;
		}
		if (this.cheveux) {
			this.parties.cheveux.src = `img/cheveux/${this.cheveux}/${poils}.png`;
		}
		if (this.moustache) {
			console.log(this.moustache, poils);
			this.parties.nez.src = `img/nez/${poils}.png`;
		}
	}
	get tete() {
		return this.attributs.tete;
	}
	set tete(tete) {
		if (tete === this.attributs.tete) return;
		this.attributs.tete = tete;
		this.parties.tete.src = `img/tete/${tete}.png`;
	}
	get moustache() {
		return this.attributs.moustache;
	}
	set moustache(moustache) {
		if (moustache === this.attributs.moustache) return;
		this.attributs.moustache = moustache;
		if (moustache) {
			this.parties.nez.src = `img/nez/${this.poils}.png`;
		} else {
			this.parties.nez.src = `img/nez/${this.nez}.png`;
		}
	}
	get cheveux() {
		return this.attributs.cheveux;
	}
	set cheveux(cheveux) {
		if (cheveux === this.attributs.cheveux) return;
		this.attributs.cheveux = cheveux;
		if (cheveux) {
			this.parties.cheveux.src = `img/cheveux/${cheveux}/${this.poils}.png`;
		} else {
			this.parties.cheveux.src = `img/vide.png`;
		}
	}
	get yeux() {
		return this.attributs.yeux;
	}
	set yeux(yeux) {
		if (yeux === this.attributs.yeux) return;
		this.attributs.yeux = yeux;
		this.parties.yeux.src = `img/yeux/${yeux}.png`;
	}
	get nez() {
		return this.attributs.nez;
	}
	set nez(nez) {
		if (nez === this.attributs.nez) return;
		this.attributs.nez = nez;
		this.parties.nez.src = `img/nez/${nez}.png`;
	}
	get chapeau() {
		return this.attributs.chapeau;
	}
	set chapeau(chapeau) {
		if (chapeau === this.attributs.chapeau) return;
		this.attributs.chapeau = chapeau;
		if (chapeau) {
			this.parties.chapeau.src = `img/chapeau/${chapeau}.png`;
		} else {
			this.parties.chapeau.src = `img/vide.png`;
		}
	}
	get barbe() {
		return this.attributs.barbe;
	}
	set barbe(barbe) {
		if (barbe === this.attributs.barbe) return;
		this.attributs.barbe = barbe;
		if (barbe) {
			this.parties.barbe.src = `img/barbe/${this.poils}.png`;
		} else {
			this.parties.barbe.src = `img/vide.png`;
		}
	}
	get bouche() {
		return this.attributs.bouche;
	}
	set bouche(bouche) {
		if (bouche === this.attributs.bouche) return;
		this.attributs.bouche = bouche;
		this.parties.bouche.src = `img/bouche/${bouche}.png`;
	}
	get langue() {
		return this.attributs.langue;
	}
	set langue(langue) {
		if (langue === this.attributs.langue) return;
		this.attributs.langue = langue;
		if (langue) {
			this.parties.bouche.src = `img/bouche/${this.bouche}_langue.png`;
		} else {
			this.parties.bouche.src = `img/bouche/${this.bouche}.png`;
		}
	}
	html() {
		var div = document.createElement("div");
		div.id = "apercu";
		this.parties.tete = div.appendChild(this.html_tete());
		this.parties.cheveux = div.appendChild(this.html_cheveux());
		this.parties.barbe = div.appendChild(this.html_barbe());
		this.parties.bouche = div.appendChild(this.html_bouche());
		this.parties.yeux = div.appendChild(this.html_yeux());
		this.parties.nez = div.appendChild(this.html_nez());
		this.parties.chapeau = div.appendChild(this.html_chapeau());
		return div;
	}
	html_tete() {
		var img = document.createElement("img");
		img.id = "tete";
		img.src = "img/tete/1.png";
		img.alt = "Tete";
		return img;
	}
	html_cheveux() {
		var img = document.createElement("img");
		img.id = "cheveux";
		img.src = `img/vide.png`;
		img.alt = `Cheveux`;
		return img;
	}
	html_barbe() {
		var img = document.createElement("img");
		img.id = "barbe";
		img.src = `img/vide.png`;
		img.alt = `Barbe`;
		return img;
	}
	html_bouche(bouche) {
		var img = document.createElement("img");
		img.id = "bouche";
		img.src = `img/bouche/1.png`;
		img.alt = `Bouche ${bouche || this.bouche}`;
		return img;
	}
	html_yeux(yeux) {
		var img = document.createElement("img");
		img.id = "yeux";
		img.src = `img/yeux/${yeux || this.yeux}.png`;
		img.alt = `Yeux ${yeux || this.yeux}`;
		return img;
	}
	html_nez(nez) {
		var img = document.createElement("img");
		img.id = "nez";
		img.src = `img/nez/${nez || this.nez}.png`;
		img.alt = `Nez ${nez || this.nez}`;
		return img;
	}
	html_chapeau(chapeau) {
		var img = document.createElement("img");
		img.id = "chapeau";
		img.src = `img/vide.png`;
		img.alt = `Chapeau`;
		return img;
	}
	mettreAJour(form) {
		this.tete = form.inTete.value;
		this.poils = form.inPoils.value;
		this.cheveux = form.inCheveux.value;
		this.yeux = form.inYeux.value;
		this.nez = form.inNez.value;
		this.moustache = form.inMoustache.checked;
		this.bouche = form.inBouche.value;
		this.langue = form.inLangue.checked;
		this.barbe = form.inBarbe.checked;
		this.chapeau = form.inChapeau.value;
		return;

	}
	static form() {
		var form = document.createElement("form");
		form.action = "";
		form.id = "parties";
		form.name = "parties";
		form.addEventListener("submit", e => {
			e.preventDefault();
		});

		form.appendChild(this.form_tete());
		form.appendChild(this.form_poils());
		form.appendChild(this.form_cheveux());
		form.appendChild(this.form_yeux());
		form.appendChild(this.form_nez());
		form.appendChild(this.form_moustache());
		form.appendChild(this.form_chapeau());
		form.appendChild(this.form_bouche());
		form.appendChild(this.form_langue());
		form.appendChild(this.form_barbe());

		var div = form.appendChild(document.createElement("div"));
		var button = div.appendChild(document.createElement("button"));
		button.id = "btnMettreAJour";
		button.type = "button";
		button.textContent = "Mettre à jour";
		return form;
	}
	static form_tete() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "inTete");
		label.textContent = "Tete";
		var input = div.appendChild(document.createElement("input"));
		input.type = "range";
		input.id = "inTete";
		input.name = "inTete";
		input.min = "1";
		input.max = "4";
		input.value = "1";
		return div;
	}
	static form_yeux() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "inYeux");
		label.textContent = "Yeux";
		var input = div.appendChild(document.createElement("input"));
		input.type = "range";
		input.id = "inYeux";
		input.name = "inYeux";
		input.min = "1";
		input.max = "6";
		input.value = "1";
		return div;
	}
	static form_bouche() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "inBouche");
		label.textContent = "Bouche";
		var input = div.appendChild(document.createElement("input"));
		input.type = "range";
		input.id = "inBouche";
		input.name = "inBouche";
		input.min = "1";
		input.max = "2";
		input.value = "1";
		return div;
	}
	static form_nez() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "inNez");
		label.textContent = "Nez";
		const choixNez = { "Gros": "gros", "Petit": "petit" };
		var fieldset = div.appendChild(document.createElement("fieldset"));
		for (let texte in choixNez) {
			let valeur = choixNez[texte];
			let label = fieldset.appendChild(document.createElement("label"));
			let input = label.appendChild(document.createElement("input"));
			input.type = "radio";
			input.id = "inNez_" + valeur;
			input.name = "inNez";
			input.value = valeur;
			input.checked = valeur === "gros";
			label.appendChild(document.createTextNode(texte));
		}
		return div;
	}
	static form_cheveux() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "inCheveux");
		label.textContent = "Cheveux";
		const choixCheveux = {
			"Aucun": "",
			"Chauve": "chauve",
			"Court": "court",
			"Afro": "afro",
			"Mohawk": "mohawk",
		};
		const select = div.appendChild(document.createElement("select"));
		select.id = "inCheveux";
		select.name = "inCheveux";
		for (let texte in choixCheveux) {
			let valeur = choixCheveux[texte];
			let option = select.appendChild(document.createElement("option"));
			option.textContent = texte;
			option.value = valeur;
		}
		return div;
	}
	static form_chapeau() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "inChapeau");
		label.textContent = "Chapeau";
		const choixChapeau = {
			"Aucun": "",
			"Baseball": "baseball",
			"Beret": "beret",
			"Casque": "casque",
			"Casserole": "casserole",
			"Couperet": "couperet",
			"Cowboy": "cowboy",
			"Fleches": "fleches",
			"Hache": "hache",
			"Pirate": "pirate",
			"Police": "police",
		};
		const select = div.appendChild(document.createElement("select"));
		select.id = "inChapeau";
		select.name = "inChapeau";
		for (let texte in choixChapeau) {
			let valeur = choixChapeau[texte];
			let option = select.appendChild(document.createElement("option"));
			option.textContent = texte;
			option.value = valeur;
		}
		return div;
	}
	static form_moustache() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "inMoustache");
		label.textContent = "Moustache";
		var input = div.appendChild(document.createElement("input"));
		input.type = "checkbox";
		input.id = "inMoustache";
		input.name = "inMoustache";
		return div;
	}
	static form_langue() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "inLangue");
		label.textContent = "Tirer la langue";
		var input = div.appendChild(document.createElement("input"));
		input.type = "checkbox";
		input.id = "inLangue";
		input.name = "inLangue";
		return div;
	}
	static form_barbe() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "inBarbe");
		label.textContent = "Barbe";
		var input = div.appendChild(document.createElement("input"));
		input.type = "checkbox";
		input.id = "inBarbe";
		input.name = "inBarbe";
		return div;
	}
	static form_lunettes() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "inLunettes");
		label.textContent = "lunettes";
		const choixLunettes = { "Aucunes": "", "Nerd": "nerd", "Patch": "patch", "Soleil": "soleil" };
		const select = div.appendChild(document.createElement("select"));
		select.id = "inLunettes";
		select.name = "inLunettes";
		for (let texte in choixLunettes) {
			let valeur = choixLunettes[texte];
			let option = select.appendChild(document.createElement("option"));
			option.textContent = texte;
			option.value = valeur;
		}
		select.value = "blond";
		return div;
	}
	static form_poils() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "inPoils");
		label.textContent = "Poils";
		const choixPoils = { "Blonds": "blond", "Bruns": "brun", "Noirs": "noir" };
		const select = div.appendChild(document.createElement("select"));
		select.id = "inPoils";
		select.name = "inPoils";
		for (let texte in choixPoils) {
			let valeur = choixPoils[texte];
			let option = select.appendChild(document.createElement("option"));
			option.textContent = texte;
			option.value = valeur;
		}
		select.value = "blond";
		return div;
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
// App.init();
