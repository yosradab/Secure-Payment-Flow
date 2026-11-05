# Secure Payment Flow — Section interactive « paiement sécurisé »

Intégration d'une section web interactive qui présente le **parcours de paiement sécurisé** (séquestre) entre un client et un artisan : l'argent est bloqué par la plateforme jusqu'à ce que le travail soit validé.

Exercice d'intégration front-end : HTML, Tailwind CSS et JavaScript vanilla.

## Fonctionnement

La section affiche les 5 étapes du parcours. Un clic sur une étape met le bouton en surbrillance et met à jour le panneau de détail :

| # | Étape | Ce qui se passe |
|---|---|---|
| 01 | **Quote** | L'artisan définit le chantier avec le client et ajoute son devis sur la plateforme |
| 02 | **Pay Fee** | Le client accepte le devis ; la plateforme conserve l'argent jusqu'à la fin des travaux |
| 03 | **Complete Work** | L'artisan réalise le chantier dans les délais et prévient le client |
| 04 | **Rate** | Le client note la qualité du travail |
| 05 | **Release Funds** | Note ≥ 4/5 : le paiement est versé à l'artisan. En dessous, un litige est ouvert et arbitré par la plateforme |

## Points techniques

- Contenu des étapes centralisé dans un objet JavaScript (`stepData`) : on ajoute ou modifie une étape sans toucher au HTML
- Mise à jour dynamique du DOM : état actif des boutons, liste à puces avec icônes SVG
- Mise en page responsive avec Tailwind CSS (CDN) : colonnes sur desktop, empilement sur mobile
- Styles complémentaires dans `style.css` : fond dégradé, cercle décoratif, états des boutons

## Structure

```
secure-payment-flow/
├── index.html   # Structure de la section (Tailwind via CDN)
├── style.css    # Styles personnalisés
└── script.js    # Données des étapes et interactions
```

## Tester en local

Aucune installation : ouvrir `index.html` dans un navigateur.

## Auteur

**Yosra Dab** — Ingénieure logiciel Full Stack · [Portfolio](https://yosradab.vercel.app) · [GitHub](https://github.com/yosradab) · [LinkedIn](https://linkedin.com/in/yosradab)
