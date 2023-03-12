function add_player() {
    //récupérer valeurs du formulaire
    var nom = document.getElementById("nom").value;
    var discord_id = document.getElementById("discord_id").value;
    var roblox_id = document.getElementById("roblox_id").value;
    var nb_op = document.getElementById("nb_op").value;
    
    // Ajouter les données à Firebase
    firebase.database().ref('Joueurs/' + nom).set({
      nb_op: nb_op,
      roblox_id: roblox_id,
      discord_id: discord_id
    });
  }
  