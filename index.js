require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

if (!process.env.TOKEN || !process.env.BUMP_CHANNEL) {
  console.error('❌ Erreur : Le fichier .env est mal configuré.');
  console.log('Copie .env.example en .env et remplis les valeurs.');
  process.exit(1);
}

client.on('ready', async () => {
  console.log(`✅ Connecté en tant que ${client.user.tag}`);

  const channel = await client.channels.fetch(process.env.BUMP_CHANNEL);
  if (!channel) {
    console.error('❌ Salon introuvable. Vérifie BUMP_CHANNEL dans .env.');
    process.exit(1);
  }

  async function bump() {
    try {
      await channel.sendSlash('302050872383242240', 'bump');
      console.log(`🔄 Bump envoyé à ${new Date().toLocaleString()}`);
    } catch (error) {
      console.error('❌ Erreur lors du bump :', error.message);
    }
  }

  function loop() {
    const delay = Math.floor(Math.random() * (10800000 - 7200000 + 1)) + 7200000;
    console.log(`⏳ Prochain bump dans ~${Math.round(delay / 3600000)} heures.`);

    setTimeout(() => {
      bump();
      loop();
    }, delay);
  }

  bump();
  loop();
});

client.on('error', (error) => {
  console.error('❌ Erreur Discord :', error.message);
});

client.login(process.env.TOKEN);
