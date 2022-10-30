let handler = async(m, { conn, text }) => {
if (!text) throw `Masukkan query!`
              awikwok = `NENEN NENEN KEPENGEN NENEN SAMA ${text}. TETEK GEDE NAN KENCANG MILIK ${text} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${text}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${text}. BIARKAN AKU MENGENYOT NENENMU ${text}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${text} WANGIIII`
              
 conn.sendButtonImg(m.chat, fla + 'Yamete', awikwok, wm, '𝐒 𝐈 𝐌 𝐏', '.simp', m)
          
}
handler.help = ['nenen <pasangan>']
handler.tags = ['fun']
handler.command = /^nenen/i

module.exports = handler
