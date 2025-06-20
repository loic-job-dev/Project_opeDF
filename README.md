Projet développé lors d'un stage au sein de Promo.dev

Consignes :
Utiliser chatGPT pour lire des PDF, puis : Lister les points communs et les points différents (infos répétitives entre chaque)

Pour les infos différentes, on doit avoir un formulaire pour pouvoir les remplir manuellement.

La finalité est la génération rapide d'un PDF, en renseigant uniquement les informations varaibles et en conservant le même texte répétitif.

Dans un premier temps, le retour peut être fait en markdown.

A utiliser : GitHib Pages, Vue3 et Vite, pinia, html2pdf.js, markdown-it, html-to-pdfmake, pdfmake, vue3-simple-typeahead

La solution est pensée pour être facilement modifiée en fonction des besoins du contenu du PDF (si jamais ces derniers évoluent dans le temps)

La V1 est réalisée avant démonstration, et avant appel d'API Sirene.

La V2 contient l'appel API Sirene pour autocomplétion du formulaire relatif aux informations de l'entreprise.