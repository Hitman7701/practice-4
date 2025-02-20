module.exports = {
  routes: [
    {
      method: "POST", // méthode de la route
      path: "/images/buy", // chemin de la route (le /api est implicite)
      handler: "image.buy", // lien vers le controller lié à la route (pas encore créé)
    },
  ],
};
