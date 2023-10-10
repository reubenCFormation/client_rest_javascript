// Que se passe t'il si je souhaite envoyer des données de mon javascript a un autre serveur et lui envoyer des données? Autrement dit, si je souhaite faire une requette a un autre serveur (Un serveur PHP,Python ou autre). Je ne peux pas directement lui envoyer des données sous format d'objet javascript, ca ne sera pas compris par mon serveur. 

const dataToSend={firstname:"Tom",lastname:"Brady",professsion:"Goat",teams:["Patriots","Bucanneers"]};

console.log("Mon Objet Javascript");
console.log(dataToSend);

// Heuresement, on peux faire un JSON.stringify qui va officiellement transformer mon objet javascript en JSON. Mon serveur va pouvoir lui meme parser ce json et le transformer sous un format comprehensible pour lui (Tableau associatif en PHP)

console.log("Mon objet datatosend en format JSON");
console.log(JSON.stringify(dataToSend));