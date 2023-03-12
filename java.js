function afficher(){
    // Charger le fichier JSON contenant les données des joueurs
    fetch('donnees-joueurs.json')
    .then(response => response.json())
    .then(data => {
        // Boucler sur chaque joueur et afficher les données
        data.forEach(joueur => {
        console.log(`Nom: ${joueur.nom}, ID: ${joueur.id}, Missions: ${joueur.missions}`);
        });
    });}