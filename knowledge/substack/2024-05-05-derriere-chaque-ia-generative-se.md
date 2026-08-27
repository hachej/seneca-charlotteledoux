# L'IA générative a besoin de Data Gouvernance, et non l'inverse

> #4 Ou comment répondre à la hype

- **Author:** Charlotte Ledoux
- **Published:** 2024-05-05
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/derriere-chaque-ia-generative-se
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😀

J’adresse d’abord un immense merci à [Elodie Zanella](https://www.linkedin.com/in/elodie-zanella-7956b129/), Head of Product chez Sarus qui a co-écrit cette édition !

L’autre week-end j’ai pris un malin plaisir à faire tester ChatGPT à mes parents pour voir leur réaction.

Ce jour-là, ils avaient ramassé des champignons - une vie normale de retraités à la campagne en somme . Donc mon père a eu l’idée de demander à ChatGPT une recette avec des pieds-de-mouton.

Et là..🥁 patatra. ChatGPT n’a pas compris qu’il s’agissait de champignons, mais bien des pieds que l’on pourrait cuisiner en tant que viande.

Pourquoi? Parce que ChatGPT n’a visiblement pas été entraîné sur des connaissances fines en matière de champignons. Vous allez vite comprendre l’importance de cette anecdote, mais revenons-en à nos moutons 😅

Vous devez répondre quoi quand on vous demande le rôle de la Data Gouvernance là dedans?

Allez, on vous répond 👇

## Ordre du jour

- La hype des modèles d’IA générative
- Les challenges de Data Gouvernance à relever
- Le tur-fu : la base de prompts parfaits
---

## La hype des modèles d’IA générative

Disclaimer : nous parlons ici uniquement des modèles LLM qui génèrent du langage naturel.

Si on veut que les modèles LLM puissent répondre correctement à des questions précises, par exemple sur des recettes de champignons ou sur les derniers résultats financiers de tel projet , il sera plus judicieux de disposer d'une série de modèles spécifiques qui peuvent fonctionner ensemble, plutôt que d'un grand modèle qui couvre tout de manière superficielle.

Les modèles spécifiques qui sont plus petits doivent être affinés à partir des grands modèles - c'est pourquoi les entreprises auront besoin :

- de données de très haute qualité venant de sources fiables
- de données respectant la confidentialité
- de données respectant la propriété intellectuelle
Et ce n'est que pour la phase d’entraînement des modèles, il y a beaucoup d'autres considérations à prendre en compte pour l'inférence.

---

## Les challenges de Data Gouvernance à relever

Afin d’obtenir un modèle performant sur une tâche précise, il va en effet falloir spécialiser ce modèle en l’entraînant sur cette tâche et les données associées.

Il existe plusieurs techniques telles que le “fine-tuning” ou le “prompt engineering” pour ce faire.

Ces approches comportent des défis intimement liés à la gouvernance :

1️⃣ La qualité des données : afin que le modèle parvienne à identifier les informations importantes versus le “bruit” et les informations de second plan, et puisse être pertinent dans une variété de situations, il va falloir nourrir ce modèle avec de la donnée la plus qualitative possible.

Idéalement cette donnée est :

> - spécifique , dans le jargon précis de la tâche à réaliser - variée : elle couvre les situations d’intérêt sous différents angles, pour différentes populations, et toutes les situations y compris les plus rares - plutôt volumineuse , même si aujourd’hui certaines techniques parviennent à capter l’information clé en quelques itérations

2️⃣ La confidentialité des données : un LLM qu’on spécialise sur une tâche en lui montrant les données spécifiques à cette tâche risque d’apprendre cette donnée par coeur et pourra, de façon inattendue, la “recracher” fuitant potentiellement de l’information personnelle et/ou sensible.

C’est l’exemple du prompt “poem poem poem poem” ci-dessous :

Il est donc important de protéger cette donnée via par exemple la pseudonymisation du jeu d’apprentissage (data masking, encryption) ou en utilisant des techniques d’apprentissage qui protègent comme le fine-tuning avec [confidentialité différentielle](https://fr.wikipedia.org/wiki/Confidentialit%C3%A9_diff%C3%A9rentielle).

La solution [Sarus](https://www.sarus.tech/product/sarusllm) permet par exemple de le faire très facilement.

3️⃣ La propriété intellectuelle des données d’entraînement : le modèle va apprendre sur des documents qui peuvent être protégés par le droit d’auteur (articles de blog, les messages de forum, les bouts de code logiciel, etc).

Or la simple manifestation d’un désaccord de l’auteur suffira à exercer leur droit, ce qui nécessite un travail d’audit préalable de la part des entreprises .

Pour l’heure le Code de la Propriété Intellectuelle n’a pas encore été complété, en dépit de mises à jour proposées par l’Assemblée Nationale afin d’offrir aux auteurs une protection renforcée de leurs droits et une meilleure rémunération face à ces systèmes d’IA qui réutilisent leurs œuvres.

---

## Le tur-fu : la base de prompts parfaits

Vous l’avez compris, laisser les utilisateurs prompter à leur guise sera… risqué.

👉 Mais vous avez cru qu’on allait faire que des chatbots avec cette belle invention?

Oh que non, il y aura aussi beaucoup d’applications qui vont prompter le modèle pour pousser du contenu en langage naturel à leurs utilisateurs, via des emails ou sms par exemple.

Pour gérer ces “prompts” et les résultats du modèle pour toutes les applications de l’entreprise, il sera essentiel d'intégrer des outils de gouvernance dans les bibliothèques de modèles .

Ces agents de gouvernance peuvent ainsi vérifier que les prompts sont conformes aux politiques , masquant les données sensibles ou refusant les demandes si nécessaire.

L'application de ces politiques repose donc sur les capacités de l’agent de gouvernance à comprendre des échanges de textes non structurés. Pour y arriver, le moteur responsable de ces opérations récolte généralement des métadonnées dans les catalogues de données et les solutions de gouvernance des données existantes .

Il y a donc bien tout un champ d’activités qui s’ouvre dans le périmètre de l’équipe Data Gouvernance :

- Définir les règles et politiques auxquels les modèles LLM doivent se conformer
- Valider un cadre de gestion des risques associés à ce type de modèle qui permettra de réaliser des audits réguliers (principes éthiques, sécurité, confidentialité, etc.)
- Prévoir la gestion du cycle de vie de la base de prompts parfaits : gestion des accès, mise à jour des métadonnées dans les catalogues afin d’améliorer la qualité des réponses fournies, revue des règles et politiques définis précédemment, etc.
> 🔍 Conseil : Allez convaincre votre boss au plus tôt que votre équipe doit être là dès le début des projets d’IA générative ! Et arrêtez de croire que vous allez résoudre vos problèmes de Data Gouvernance avec de l’IA générative…

A très vite,

Charlotte

Merci de lire Les Coulisses de la Data Gouvernance ! Abonnez-vous gratuitement pour recevoir de nouveaux posts et soutenir mon travail.

---

Je suis Charlotte Ledoux , freelance dans la Data Gouvernance et l’IA.

Tu peux me suivre sur [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) aussi !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
