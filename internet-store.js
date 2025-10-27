let prece = [
    {nosaukums: "Telefons", kategorija: "Elektronika", cena: 120, daudzums: 12 }, // 0
    {nosaukums: "Dators", kategorija: "Elektronika", cena: 900, daudzums: 7 }, // 1
    {nosaukums: "Krekls", kategorija: "Apģērbs", cena: 6, daudzums: 3}, // 2
]


for (let i = 0; i < prece.length; i++) {
  console.log(prece.kategorija == "Elektronika");
}