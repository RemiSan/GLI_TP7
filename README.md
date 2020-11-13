# Configuration

Commencez par télécharger les dépendances nécessaires en exécutant la commande:
```
npm install
```

Pour lier cette application au Back-End Jax-RS allez dans le fichier vue.config.js et modifiez la constante suivante:
```
proxy: 'http://localhost:8080' // enter the API url here
```

en entrant l'URL de votre back-end (sensé être le TP JaxRS de TAA).


Puis allez dans src/config.ts et modifiez la constante suivante:
```
export const urlVueProxy = "http://localhost:8081/"; // enter the vuejs url here
```

en entrant l'URL de votre application VueJS.
