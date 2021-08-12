// ajouter une donnée dans le local storage
bouton_inscription.onclick = () =>{
    localStorage.setItem("Nom",Nom.value);
    localStorage.setItem("Prénom",Prenom.value);
    localStorage.setItem("Email",Email.value);
    
    document.location.reload();
}
//affiche message de confirmation
function displayMessage(message) {
    const templateElement = document.getElementById("templateMessage")
    document.getElementById("container").appendChild(templateElement)
  
}

if(localStorage.getItem("Quantité") != null)
titre_panier.textContent = `Voici le récapitulatif de vos commandes`;

//récupérer une donnée dans le local storage
 let maDonneeNom = localStorage.getItem("Nom");
 let maDonneePrenom = localStorage.getItem("Prénom");
 let maDonneeQuantite = localStorage.getItem("Quantité");
 console.log(maDonneeNom);
 console.log(maDonneePrenom);
 console.log(maDonneeQuantite);


//supprimer une donnée dans le local storage
//  localStorage.removeItem("Prénom")

//supprimer le local storage
clear.onclick = () =>{
    localStorage.clear();
    document.location.reload();//recharge la page
}
//écoute le formulaire
console.log(document.forms["inscription"]["email_confirmation"]);
//validation du formulaire
//valeur name
document.forms["inscription"].addEventListener("submit", function(e) {
    let erreur;
    let inputs = document.getElementById("inscription").getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs"
        }
    }
  
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('Formulaire envoyé!');
    }

    
});

