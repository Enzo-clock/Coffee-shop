# Création de tables et insertion de données

Exécuter un ficjhier SQL depuis le terminal

```bash
psql -U trombino -d trombino -f sql/init.sql
```

Pour ajouter les données directement

- copier les INSERT INTO présnets sur DB Fiddle
- les coller dans le fichier init.sql (à la fin)
- exécuter la commande psql -f
- on vérifie en étant connecté à psql
  - select * from "promo";
  - select * from "student";
