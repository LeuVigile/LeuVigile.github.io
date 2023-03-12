function add_player(){
      const nom = document.getElementById("nom").value;
      const id = document.getElementById("id").value;
      const missions = document.getElementById("missions").value;
    
      // Récupère les données du fichier data.json
      fetch("data.json")
        .then(response => response.json())
        .then(data => {
          // Ajoute un nouvel objet joueur aux données existantes
          data.joueurs.push({
            nom: nom,
            id: id,
            missions: missions
          });
    
          // Envoie les données mises à jour vers le serveur
          fetch("data.json", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
            .then(response => {
              console.log("Données mises à jour avec succès !");
            })
            .catch(error => {
              console.error("Erreur lors de la mise à jour des données : ", error);
            });
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des données : ", error);
        });}