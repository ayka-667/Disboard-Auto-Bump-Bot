# Discord Auto-Bump Bot

Un bot simple qui envoie automatiquement des `/bump` sur [Disboard](https://disboard.org/) pour ton serveur Discord.

## ⚠️ Avertissements
- **Selfbot** : Ce bot utilise `discord.js-selfbot-v13`, ce qui est **contre les [Conditions d'Utilisation de Discord](https://discord.com/terms)**.
  - **Risque** : Compte banni si détecté.

- **Rate Limiting** : Disboard peut bloquer les bumps trop fréquents. Ce bot espace les envois entre **2 et 3 heures**.

---

## 🛠 Installation

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/ton-username/discord-auto-bump.git
   cd discord-auto-bump
   ```

2. **Installer les dépendances** :
  ```
  npm install
  ```

3. **Configurer `.env`** :
  - Copie `.env.example` en `.env`.
  - Remplis `TOKEN` avec le token de ton compte (voir ci-dessous).
  - Remplis `BUMP_CHANNEL` avec l'ID du salon où envoyer le `/bump`.

4. **Lancer le bot** :
  ```
  npm start
  ```

---

## 🔑 Comment obtenir le token ?

1. Ouvre Discord dans ton navigateur.
2. Appuie sur `F12`
3. Va dans l'onglet Application -> Local storage -> https://discord.com
4. Va dans `Filter` et entre `token`
5. Active device toolbar `l'icon tablette/telephone` ou `Ctrl + Shift + M`
6. Recharge la page `F5`
7. Copie la `Value` de la `Key` `Token`

---

## 🤖 Fonctionnalités

  - Envoie `/bump` automatiquement toutes les 2-3 heures.
  - Logs dans la console (timestamp + statut).
  - Gestion basique des erreurs.

---

## 📌 Personnalisation

  - Changer le délai : Modifie les valeurs dans `index.js` (lignes 25-26).
  - Ajouter des logs : Utilise `console.log` ou un autre module comme `winston`.

---

Made with ❤️ by [Ayka](https://www.ayka.dev/)
