
/* On selectionne le tbody du tableau pour afficher une ligne */

var ligne = document.querySelector(".ligne");
var num = 0;
var num = parseInt(localStorage.getItem("num")) ? JSON.parse(localStorage.getItem("num")) : 0;
var getDatas = localStorage.getItem("datas") ? JSON.parse(localStorage.getItem("datas")) : [];

console.log(getDatas);
console.log(num);

for (let i = 0; i < getDatas.length; i++) {
    getDatas[i];

    ligne.innerHTML += `

    <tr>
        <td >${getDatas[i].id}</td>
        <td class="nom">${getDatas[i].nomE}</td>
        <td class="prenom">${getDatas[i].prenomE}</td>
        <td class="prenom">${getDatas[i].sexeE}</td>
        <td class="date">${getDatas[i].dateNaissanceE}</td>
        <td class="lieu">${getDatas[i].lieuNaissanceE}</td>
        <td class="classe">${getDatas[i].classeE}</td>
        <td class="tuteur">${getDatas[i].nomT + " " + getDatas[i].prenomT}</td>
    </tr>

`
    
}

document.querySelector(".valider").addEventListener("click", (e)=>{
    e.preventDefault();
    num += 1
    var nomEleve = document.querySelector(".nomEleve").value;
    var prenomEleve = document.querySelector(".prenomEleve").value;
    var dateNaissanceEleve = document.querySelector(".dateNaissanceEleve").value;
    var sexeEleve = document.querySelector(".sexeEleve").value;
    var lieuNaissanceEleve = document.querySelector(".lieuNaissanceEleve").value;
    var classeEleve = document.querySelector(".classeEleve").value;

    var nomTuteur = document.querySelector(".nomTuteur").value;
    var prenomTuteur = document.querySelector(".prenomTuteur").value;
    var prenonTuteur = document.querySelector(".prenomTuteur").value;
    var professionTuteur = document.querySelector(".professionTuteur").value;
    var numeroTuteur = document.querySelector(".numeroTuteur").value;
    var adresseTuteur = document.querySelector(".adresseTuteur").value;
    var emailTuteur = document.querySelector(".emailTuteur").value;

    
    /* Stockage des infos dans un objet */

    var infos = {
        id: num,
        nomE: nomEleve,
        prenomE: prenomEleve,
        sexeE: sexeEleve,
        dateNaissanceE: dateNaissanceEleve,
        lieuNaissanceE: lieuNaissanceEleve,
        classeE: classeEleve,
        nomT: nomTuteur,
        prenomT: prenonTuteur
    }
    /* Ajout des infos dans le tableau */
    getDatas.push(infos);

    /* Stockage du tableau dans localStorage */
    localStorage.setItem("datas", JSON.stringify(getDatas));
    localStorage.setItem("num", JSON.stringify(num));

    ligne.innerHTML += `

        <tr>
            <td>${num}</td>
            <td class="nom">${nomEleve}</td>
            <td class="prenom">${prenomEleve}</td>
            <td class="prenom">${sexeEleve}</td>
            <td class="date">${dateNaissanceEleve}</td>
            <td class="lieu">${lieuNaissanceEleve}</td>
            <td class="classe">${classeEleve}</td>
            <td class="tuteur">${nomTuteur+ " " +prenomTuteur}</td>
        </tr>

    `
})
