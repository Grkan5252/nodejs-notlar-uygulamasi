const fs = require('fs');

const komut = process.argv[2];
const veri = process.argv[3];

if (komut === 'ekle') {
  try {
    const dosya = fs.existsSync('notlar.json') ? fs.readFileSync('notlar.json', 'utf8') : '[]';
    const notlar = JSON.parse(dosya);

    const yeniNot = {
      id: notlar.length + 1,
      icerik: veri
    };

    notlar.push(yeniNot);

    fs.writeFileSync('notlar.json', JSON.stringify(notlar, null, 2), 'utf8');
    console.log("✅ Yeni not eklendi!");
  } catch (err) {
    console.error("❌ Hata oluştu:", err.message);
  }
}
if (komut === 'listele') {
    try {
      const dosya = fs.readFileSync('notlar.json', 'utf8');
      const notlar = JSON.parse(dosya);
  
      notlar.forEach(not => {
        console.log(`${not.id} - ${not.icerik}`);
      });
    } catch (err) {
      console.error("❌ Listeleme hatası:", err.message);
    }
  }
  if (komut === 'sil') {
    try {
      const id = parseInt(process.argv[3]); // ID’yi al
      const dosya = fs.readFileSync('notlar.json', 'utf8');
      const notlar = JSON.parse(dosya);
  
      const filtrelenmis = notlar.filter(not => not.id !== id);
  
      fs.writeFileSync('notlar.json', JSON.stringify(filtrelenmis, null, 2), 'utf8');
      console.log(`🗑️ ID'si ${id} olan not silindi.`);
    } catch (err) {
      console.error("❌ Silme hatası:", err.message);
    }
  }
    