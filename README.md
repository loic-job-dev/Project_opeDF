Projet développé lors d'un stage au sein de Promo.dev

Consignes :
Utiliser chatGPT pour lire des PDF, puis : Lister les points communs et les points différents (infos répétitives entre chaque)
Pour les infos différentes, on doit avoir un formulaire pour pouvoir les remplir manuellement.

La finalité est la génération rapide d'un PDF, en renseigant uniquement les informations varaibles et en conservant le même texte répétitif.

Dans un premier temps, le retour peut être fait en markdown.


A utiliser : GitHib Pages, Vue3 et Vite, pinia, html2pdf.js, markdown-it, html-to-pdfmake, pdfmake

La solution est pensée pour être facilement modifiée en fonction des besoins du contenu du PDF (si jamais ces derniers évoluent dans le temps).
Projet réalisé initialement avec vue.js + Vite, en JavaScript vanilla.
Switch vers TypeScript dans la V2.

Le composant ExportButtons.vue est créé pour permettre d'autres types d'export que PDF (à ajouter, selon les besoins futurs).
Un bouton permet de faire le switch facilement entre le formulaire et l'aperçu markdown qui sert de "brouillon" avant édition d'un PDF final.
Les données ajoutées via le formulaire sont stockées en un store Pinia.

La V1 est réalisée avant démonstration, et avant appel d'API Sirene.

La V2 contient l'appel API Sirene pour autocomplétion du formulaire relatif aux informations de l'entreprise.

La V3 comporte une mise à jour du formulaire pour correspondre d'avantage aux besoins rééels.