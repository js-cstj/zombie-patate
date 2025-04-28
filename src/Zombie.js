export default class Zombie {
	static choix = {
		tete: {
			"1": "1",
			"2": "2",
			"3": "3",
			"4": "4",
		},
		poils: {
			"Blonds": "blond",
			"Bruns": "brun",
			"Noirs": "noir",
		},
		yeux: {
			"1": "1",
			"2": "2",
			"3": "3",
			"4": "4",
			"5": "5",
			"6": "6",
		},
		lunettes: {
			"Aucunes": "",
			"Nerd": "nerd",
			"Patch": "patch",
			"Soleil": "soleil",
		},
		nez: {
			"Gros": "gros",
			"Petit": "petit",
		},
		cheveux: {
			"Aucun": "",
			"Chauve": "chauve",
			"Court": "court",
			"Afro": "afro",
			"Mohawk": "mohawk",
		},
		chapeau: {
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
		},
		bouche: {
			"1": "1",
			"2": "2",
		},
		barbe: {
			"Oui": true,
			"Non": false,
		},
		langue: {
			"Oui": true,
			"Non": false,
		},
		moustache: {
			"Oui": true,
			"Non": false,
		},
	};
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
		document.forms.parties.poils.value = poils;
		this.attributs.poils = poils;
		if (this.barbe) {
			this.parties.barbe.src = `img/barbe/${poils}.png`;
		}
		if (this.cheveux) {
			this.parties.cheveux.src = `img/cheveux/${this.cheveux}/${poils}.png`;
		}
		if (this.moustache) {
			this.parties.nez.src = `img/nez/${poils}.png`;
		}
	}
	get tete() {
		return this.attributs.tete;
	}
	set tete(tete) {
		if (tete === this.attributs.tete) return;
		document.forms.parties.tete.value = tete;
		this.attributs.tete = tete;
		this.parties.tete.src = `img/tete/${tete}.png`;
	}
	get moustache() {
		return this.attributs.moustache;
	}
	set moustache(moustache) {
		if (moustache === this.attributs.moustache) return;
		document.forms.parties.moustache.checked = moustache;
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
		document.forms.parties.cheveux.value = cheveux;
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
		document.forms.parties.yeux.value = yeux;
		this.attributs.yeux = yeux;
		this.parties.yeux.src = `img/yeux/${yeux}.png`;
	}

	get lunettes() {
		return this.attributs.lunettes;
	}
	set lunettes(lunettes) {
		if (lunettes === this.attributs.lunettes) return;
		document.forms.parties.lunettes.value = lunettes;
		this.attributs.lunettes = lunettes;
		if (lunettes) {
			this.parties.lunettes.src = `img/lunettes/${lunettes}.png`;
		} else {
			this.parties.lunettes.src = `img/vide.png`;
		}
	}
	get nez() {
		return this.attributs.nez;
	}
	set nez(nez) {
		if (nez === this.attributs.nez) return;
		document.forms.parties.nez.value = nez;
		this.attributs.nez = nez;
		this.parties.nez.src = `img/nez/${nez}.png`;
	}
	get chapeau() {
		return this.attributs.chapeau;
	}
	set chapeau(chapeau) {
		if (chapeau === this.attributs.chapeau) return;
		document.forms.parties.chapeau.value = chapeau;
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
		document.forms.parties.barbe.checked = barbe;
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
		document.forms.parties.bouche.value = bouche;
		this.attributs.bouche = bouche;
		this.parties.bouche.src = `img/bouche/${bouche}.png`;
	}
	get langue() {
		return this.attributs.langue;
	}
	set langue(langue) {
		if (langue === this.attributs.langue) return;
		document.forms.parties.langue.checked = langue;
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
		this.parties.lunettes = div.appendChild(this.html_lunettes());
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
	html_lunettes(lunettes) {
		var img = document.createElement("img");
		img.id = "lunettes";
		img.src = `img/vide.png`;
		img.alt = `Lunettes`;
		return img;
	}
	html_nez(nez) {
		var img = document.createElement("img");
		img.id = "nez";
		img.src = `img/nez/${nez || this.nez}.png`;
		img.alt = `Nez`;
		return img;
	}
	html_chapeau() {
		var img = document.createElement("img");
		img.id = "chapeau";
		img.src = `img/vide.png`;
		img.alt = `Chapeau`;
		return img;
	}
	mettreAJour(form) {
		this.tete = form.tete.value;
		this.poils = form.poils.value;
		this.cheveux = form.cheveux.value;
		this.yeux = form.yeux.value;
		this.lunettes = form.lunettes.value;
		this.nez = form.nez.value;
		this.moustache = form.moustache.checked;
		this.bouche = form.bouche.value;
		this.langue = form.langue.checked;
		this.barbe = form.barbe.checked;
		this.chapeau = form.chapeau.value;
		return;

	}
	piger(source) {
		if (typeof source === "number") {
			return Math.floor(Math.random() * source) + 1;
		} else if (Array.isArray(source)) {
			if (source[0] === "" && Math.random() < .5) {
				return "";
			}
			return source[Math.floor(Math.random() * source.length)];
		} else {
			return this.piger(Object.values(source));
		}
	}
	aleatoire() {
		for (let attribut in Zombie.choix) {
			this[attribut] = this.piger(Zombie.choix[attribut]);
		}
		return;
	}
	static form() {
		var form = document.createElement("form");
		form.action = "";
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
		form.appendChild(this.form_lunettes());

		// var div = form.appendChild(document.createElement("div"));
		// var button = div.appendChild(document.createElement("button"));
		// button.type = "button";
		// button.textContent = "Mettre à jour";
		var div = form.appendChild(document.createElement("div"));
		var button = div.appendChild(document.createElement("button"));
		button.name = "btnAlea";
		button.type = "button";
		button.textContent = "🎲 Aléatoire 🎲";
		return form;
	}
	static form_tete() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "tete");
		label.textContent = "Tete";
		var input = div.appendChild(document.createElement("input"));
		input.type = "range";
		input.name = "tete";
		input.min = "1";
		input.max = "4";
		input.value = "1";
		return div;
	}
	static form_yeux() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "yeux");
		label.textContent = "Yeux";
		var input = div.appendChild(document.createElement("input"));
		input.type = "range";
		input.name = "yeux";
		input.min = "1";
		input.max = "6";
		input.value = "1";
		return div;
	}
	static form_bouche() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "bouche");
		label.textContent = "Bouche";
		var input = div.appendChild(document.createElement("input"));
		input.type = "range";
		input.name = "bouche";
		input.min = "1";
		input.max = "2";
		input.value = "1";
		return div;
	}
	static form_nez() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "nez");
		label.textContent = "Nez";
		const choixNez = this.choix.nez;
		var fieldset = div.appendChild(document.createElement("fieldset"));
		for (let texte in choixNez) {
			let valeur = choixNez[texte];
			let label = fieldset.appendChild(document.createElement("label"));
			let input = label.appendChild(document.createElement("input"));
			input.type = "radio";
			input.id = "nez_" + valeur;
			input.name = "nez";
			input.value = valeur;
			input.checked = valeur === "gros";
			label.appendChild(document.createTextNode(texte));
		}
		return div;
	}
	static form_cheveux() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "cheveux");
		label.textContent = "Cheveux";
		const choixCheveux = this.choix.cheveux;
		const select = div.appendChild(document.createElement("select"));
		select.name = "cheveux";
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
		label.setAttribute("for", "chapeau");
		label.textContent = "Chapeau";
		const choixChapeau = this.choix.chapeau;
		const select = div.appendChild(document.createElement("select"));
		select.name = "chapeau";
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
		label.setAttribute("for", "moustache");
		label.textContent = "Moustache";
		var input = div.appendChild(document.createElement("input"));
		input.type = "checkbox";
		input.name = "moustache";
		return div;
	}
	static form_langue() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "langue");
		label.textContent = "Tirer la langue";
		var input = div.appendChild(document.createElement("input"));
		input.type = "checkbox";
		input.name = "langue";
		return div;
	}
	static form_barbe() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "barbe");
		label.textContent = "Barbe";
		var input = div.appendChild(document.createElement("input"));
		input.type = "checkbox";
		input.name = "barbe";
		return div;
	}
	static form_lunettes() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "lunettes");
		label.textContent = "lunettes";
		const choixLunettes = this.choix.lunettes;
		const select = div.appendChild(document.createElement("select"));
		select.name = "lunettes";
		for (let texte in choixLunettes) {
			let valeur = choixLunettes[texte];
			let option = select.appendChild(document.createElement("option"));
			option.textContent = texte;
			option.value = valeur;
		}
		select.value = "";
		return div;
	}
	static form_poils() {
		var div = document.createElement("div");
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "poils");
		label.textContent = "Poils";
		const choixPoils = { "Blonds": "blond", "Bruns": "brun", "Noirs": "noir" };
		const select = div.appendChild(document.createElement("select"));
		select.name = "poils";
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
