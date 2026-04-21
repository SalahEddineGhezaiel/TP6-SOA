# API REST/GraphQL avec RxDB

Une application Node.js avec des APIs REST et GraphQL pour gérer les utilisateurs et les appareils avec RxDB.

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur :
```bash
node server.js
```

Le serveur s'exécute sur `http://localhost:5000`

## API REST

- `GET /users` - Récupérer tous les utilisateurs
- `GET /users/:id` - Récupérer un utilisateur
- `POST /users` - Créer un utilisateur (envoyer `{name, email, password}`)
- `PUT /users/:id` - Modifier un utilisateur
- `DELETE /users/:id` - Supprimer un utilisateur
- `GET /users/:id/devices` - Récupérer les appareils de l'utilisateur
- `POST /devices` - Créer un appareil
- `DELETE /devices/:id` - Supprimer un appareil

## GraphQL

Envoyer les requêtes à `POST /graphql`

Exemple de requête :
```graphql
{
  users {
    id
    name
    email
  }
}
```

Exemple de mutation :
```graphql
mutation {
  addUser(name: "Ali", email: "ali@example.com", password: "123") {
    id
    name
  }
}
```

## Fichiers

- `db.js` - Configuration de la base de données avec RxDB
- `schema.gql` - Schéma GraphQL
- `server.js` - Serveur Express et routes REST
- `userResolver.js` - Résolveurs GraphQL pour les utilisateurs
- `deviceResolver.js` - Résolveurs GraphQL pour les appareils
- `deviceService.js` - Logique métier des appareils
