# Portfolio professionnel

Site vitrine personnel avec une bibliothèque documentaire intégrée.

## Aperçu

- Présentation et profil professionnel
- Domaines de compétences
- Sélection de projets avec statut explicite
- Bibliothèque filtrable de documents PDF
- Consultation des PDF directement dans la page et ouverture/téléchargement
- Mise en page responsive (ordinateur, tablette et mobile)

## Publication avec GitHub Pages

1. Ouvrir **Settings → Pages** dans ce dépôt.
2. Dans **Build and deployment**, choisir **Deploy from a branch**.
3. Sélectionner la branche `main` et le dossier `/(root)`.
4. Enregistrer. L'adresse du site sera : https://stebmic.github.io/professional-portfolio/

## Ajouter un document

1. Ajouter le PDF dans le dossier approprié sous `documents/` (par exemple `documents/cv/` ou `documents/certifications/`).
2. Ouvrir `assets/js/app.js` et ajouter une entrée dans le tableau `documents` :

```js
const documents = [
  {
    title: "CV — Français",
    category: "cv",
    description: "Curriculum vitae",
    file: "documents/cv/cv-fr.pdf",
    date: "2026"
  }
];
```

Catégories acceptées : `cv`, `education`, `certification`, `other`.

**Confidentialité :** ce dépôt est public. Ne pas y placer de carte d'identité, passeport, adresse personnelle, coordonnées privées, relevés contenant des données sensibles ou documents qui ne sont pas destinés à une diffusion publique. Préférer des versions expurgées ou des attestations vérifiables conçues pour le partage.

## Personnalisation

Le contenu de démonstration est volontairement prudent. Avant diffusion professionnelle, compléter et vérifier le nom, le titre ciblé, le parcours, les dates, les compétences maîtrisées, les coordonnées et les descriptions de projets.
