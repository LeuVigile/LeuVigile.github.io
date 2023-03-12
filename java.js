function add_player() {
    var firebaseConfig = {
        apiKey: "AIzaSyBI-ngVWNuy21i2cEphbend_lW8Plb2Ny8",
        authDomain: "rpima3-brm5.firebaseapp.com",
        databaseURL: "https://rpima3-brm5-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "rpima3-brm5",
        storageBucket: "rpima3-brm5.appspot.com",
        messagingSenderId: "650078138602",
        appId: "1:650078138602:web:f945f00509e40f0e682793",
        measurementId: "G-RR2W6K8XWC"
    };
    firebase.initializeApp(firebaseConfig);

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
  