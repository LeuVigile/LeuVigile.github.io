function add_player(){
    // Récupérer le formulaire et le bouton de validation
    const formulaire = document.querySelector('#formulaire-joueur');
    const boutonValider = document.querySelector('#valider');

    // Ajouter un événement de clic sur le bouton de validation
    boutonValider.addEventListener('click', (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire

    // Récupérer les valeurs des champs de saisie
    const nom = document.querySelector('#nom').value;
    const id = document.querySelector('#id').value;
    const missions = document.querySelector('#missions').value;

    // Créer un nouvel objet joueur avec les valeurs saisies
    const nouveauJoueur = {
        nom: nom,
        id: id,
        missions: missions
    };

    // Envoyer les données JSON au serveur en utilisant fetch()
    fetch('data.json', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(nouveauJoueur)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Nouveau joueur ajouté avec succès !');
        console.log(data); // Afficher les données du fichier JSON mis à jour
    })
    .catch(error => console.error(error));
    });}