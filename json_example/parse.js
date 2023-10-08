// ici nous avons un exemple simple de comment nous pouvons recevoir des données sous format json et les transformer en objet javascript:

const jsonRestaurants=
`{
    "restaurants": [
      {
        "name": "Los Pollos Hermanos",
        "owner": "Gus",
        "cuisine": "Fast Food",
        "location": "New Mexico"
      },
      {
        "name": "La Brasserie Du Coin",
        "owner": "Toto",
        "cuisine": "Bistrot",
        "location": "Paris"
      },
      {
        "name": "Giordano's Pizza",
        "owner": "Joseph Bogilio",
        "cuisine": "Deep Dish Pizza",
        "location": "Chicago"
      },
      {
        "name": "Katz Deli",
        "owner": "Jake Dell",
        "cuisine": "Deli Sandwiches",
        "location": "New York City"
      }
    ]
  }`

// ici nous voyons rien d'autre que une chaine de caractere, nous pouvons rien faire avec dans l'etait mais cette chaine de caractere est bien ecrite sous format JSON avec nos clés en chaine de caracters.
console.log("L'etat originale de mon JSON");
console.log(jsonRestaurants);

// En utilisant un la methode JSON.parse, je vais pouvoir transformer ce JSON qui est rien d'autre que une chaine de caractere en objet javascript.

console.log("Mon JSON en transformation");
console.log(JSON.parse(jsonRestaurants));

