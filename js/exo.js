// Test pour lancer le script
console.log("test 1...2...1...2");
// Creation objet hercule friend
let hercule = {
  name: "Hercule",
  job: "Demi-dieu",
  age: 35,
  department: 75,
  arm: 60.5,
  inRelationship: true,
};
//J'execute la function dans le script base.js et je lui passe en argument mon objet "hercule"
base.fillProfil(hercule);
// Étape 3 - Tableau
// J'affiche et crée les amis d'hercule
let herculeFriend = ["Jupiter", "Junon", "Alcmène", "Déjanire"];
base.printFriends(herculeFriend);
// J'affiche le meilleur ami d'hercule
base.setBestFriend(herculeFriend[0]);
// Étape 4 - DOM
// Je make l'element
let h1 = document.createElement("h1");
// Je lui ajoute une class
h1.classList.add("banner__title");
// Je lui rajoute du texte avec textcontent, not innerHTML car probable injection
h1.textContent = "Vous consultez le profil de Hercule";
// Je recupere la banniere du HEADER et lui passe comme enfant le H1 créee auparavant
let headerbanner = document.getElementById("header-banner");
headerbanner.appendChild(h1);
// Étape 5 - Boucle
// Je déclare une boucle et un index commencant a 0 qui se repete 11 fois, et qui va relancer ma methode 11 fois vue que il prend en argument mon index
for (let index = 0; index <= 11; index++) {
  base.displayWork(index);
}
// Étape 6 - Condition
// Je recupere un ID
const dispo = document.getElementById("availability");
// Je lance une methode qui me permet de définir l'heure
let heure = base.getHour();
//Si l'heure est SUPERIEUR ou = a 8 ET inferieur ou = a 20 je ajoute du textContent comme quoi hercule est Dispo
if (heure >= 8 && heure <= 20) {
  console.log("test reussis");
  dispo.textContent = "Hercule est disponbile";
  // Dans le cas inverse Hercule est indisponible et on lui ajoute la class OFF qui change une pastille en ROUGE
  // J'ai également essayer de changer la variable heure en un simple type number pour essayer mes deux conditions de la boucle
} else {
  dispo.textContent = "Hercule est indisponbile";
  dispo.classList.add("off");
}
// Étape 7 - Fonction
// Je genere une function qui prend en argument un pseudo et un argument et qui retourne une simple phrase utilisé que j'ai générer avec les litéraux de gabarit (Je crois que sa sapl comme sa)
function generatePseudo(pseudo, department) {
  let name = `${pseudo}-du-${department}`;
  return name;
}
//Je lance ma function avec deux argument ("Hercule" et , 75)
let testfunction = generatePseudo("Hercule", 75);
// Je recupere l'id profil-name de ma page HTML et je le stock dans ma const profilname
const profilname = document.getElementById("profil-name");
// Vue que dans ma function je déclare un retour de la variable name elle renvoie donc la phrase créée dans la function et ici je peux me permettre d'ajouter le contenu de name dans ma const
profilname.textContent = testfunction;
// Étape 8 - Event
// Je recupere mon ID menu-toggler
const menutoggler = document.getElementById("menu-toggler");
// Quand je clique sur menutoggler une function fléchée se lance qui recupere un ID(Header-banner) et qui ajoute et retire une classe("Banner--open") grace a toggle
menutoggler.addEventListener("click", () => {
  let header = document.getElementById("header-banner");
  header.classList.toggle("banner--open");
});
// Étape 9 - Event bis
const form = document.getElementById("contact");
// J'ecoute l'envoie de mon formulaire("Submit"), je recupere l'evenement grace au parametre event et je lui preventDefault pour empecher le rechargement de la page et ensuite l'alert se déclenche
form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Hercule ne souhaite pas être dérangé");
});
//Bonus Étape 10 - Algo
// Je définis dans une constante la valeur totale pour calculer mon pourcentage ulterieurement
const valeurtotale = base.vote.cesar + base.vote.hercule;
function calculpourcentageCesar() {
  let pourcentagcesar = document.getElementById("popularitycesar");
  let peoplebar = document.getElementById("peoplebarcesar");
  //Formule pour calculer un pourcentage
  let resultat = (base.vote.cesar / valeurtotale) * 100;
  // J'arrondis pour ne pas avoir de chiffre apres la virgule
  let resultatArrondis = Math.round(resultat);
  pourcentagcesar.textContent = resultatArrondis + "%";
  peoplebar.style.width = resultatArrondis + "%";
  console.log(resultatArrondis);
}
calculpourcentageCesar();
function calculpourcentageHercule() {
  let pourcentagcesar = document.getElementById("popularityhercule");
  let peoplebar = document.getElementById("peoplebarhercule");
  let resultat = (base.vote.hercule / valeurtotale) * 100;
  let resultatArrondis = Math.round(resultat);
  pourcentagcesar.textContent = resultatArrondis + "%";
  peoplebar.style.width = resultatArrondis + "%";
  console.log(resultatArrondis);
}
calculpourcentageHercule();
