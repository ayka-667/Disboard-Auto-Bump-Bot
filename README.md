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

1. Ouvre Discord dans ton navigateur ([discord.com](https://discord.app/)) et connecte-toi.
2. Appuie sur `F12` (ou `Ctrl + Maj + I`) pour ouvrir les outils de développement.
3. Activee le mode mobile (`Ctrl + Maj + M` ou 📱 en haut à gauche).
4. Recharge la page (`F5`)
5. Va dans : `Application -> Local storage -> https://discord.com`
6. Dans le champ `Filter`, tape `token`.
7. Copie la valeur (colonne `Value`) de la clé `token`.

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
