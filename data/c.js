function loadMarkersForC() {
    var cEvaAndersson = L.marker([57.8455,12.3427], {icon: partyIcons["c"]})
	.bindPopup("1. <b>Eva Andersson</b><br>Kommunalråd<br>Gråbo");
    var cRobertLinderBlomberg = L.marker([57.7848634,12.2722966], {icon: partyIcons["c"]})
	.bindPopup("2. <b>Robert Linder Blomberg</b><br>Dataingenjör<br>Stenkullen");
    var cGunnyKron = L.marker([57.8289667,12.3745343], {icon: partyIcons["c"]})
	.bindPopup("3. <b>Gunny Kron</b><br>Marknadschef<br>Floda");
    var cIngelaGyllesten = L.marker([57.9140046,12.3640592], {icon: partyIcons["c"]})
	.bindPopup("4. <b>Ingela Gyllesten</b><br>Kommunfullmäktiges Ordförande<br>Sjövik");
    var cSuzanneParenius = L.marker([57.74746,12.20900], {icon: partyIcons["c"]})
	.bindPopup("5. <b>Gunny Kron</b><br>Affärsutvecklingskonsulent<br>Lerum/Jonsered");
    var cLernyHermansson = L.marker([57.83739,12.30004], {icon: partyIcons["c"]})
	.bindPopup("6. <b>Lerny Hermansson</b><br>Fd. Bygglovschef<br>Gråbo");
    var cAnnelieNyberg = L.marker([57.77797,12.39304], {icon: partyIcons["c"]})
	.bindPopup("7. <b>Annelie Nyberg</b><br>Sjuksköterska/Företagare<br>Floda");
    var cIngvarRinghage = L.marker([57.7994194,12.3557104], {icon: partyIcons["c"]})
	.bindPopup("8. <b>Ingvar Ringhage</b><br>Fd. Byggnadsarbetare<br>Floda");
    var cPerEricBörjesson = L.marker([57.77544,12.24836], {icon: partyIcons["c"]})
	.bindPopup("9. <b>Per-Eric Börjesson</b><br>Fd. enhetschef arbetsmarknad<br>Lerum");
    var cClaesBerlin = L.marker([57.7551166,12.2360502], {icon: partyIcons["c"]})
	.bindPopup("10. <b>Claes Berlin</b><br>Fd. Rymdingenjör<br>Aspen");
    var cÖrjanWennersten = L.marker([57.76983,12.30052], {icon: partyIcons["c"]})
        .bindPopup("11. <b>Örjan Wennersten</b><br>Nämndeman<br>Stenkullen");
    var cAnnMarieTörnell = L.marker([57.76618,12.25995], {icon: partyIcons["c"]})
        .bindPopup("12. <b>Ann-Marie Törnell</b><br>Fd. arbetsmarknadschef<br>Lerum");
    var cAlfHansson = L.marker([57.83982,12.27475], {icon: partyIcons["c"]})
        .bindPopup("13. <b>Alf Hansson</b><br>Byggnadsingenjör<br>Gråbo");
    var cMaxZamanianBakhtyari, = L.marker([57.86679,12.44205], {icon: partyIcons["c"]})
        .bindPopup("14. <b>Max Zamanian Bakhtyari</b><br>Fil dr Nationalekonomi<br>Norsesund");
    var cAndreasLifvmark, = L.marker([57.76943,12.25219], {icon: partyIcons["c"]})
        .bindPopup("15. <b>Andreas Lifvmark</b><br>Projektledare<br>Lerum");

    return L.layerGroup([cEvaAndersson,
			 cRobertLinderBlomberg,
			 cGunnyKron,
			 cIngelaGyllesten,
			 cSuzanneParenius,
			 cLernyHermansson,
			 cAnnelieNyberg,
			 cIngvarRinghage,
			 cPerEricBörjesson,
			 cClaesBerlin,
			 cÖrjanWennersten,
			 cAnnMarieTörnell,
			 cAlfHansson,
			 cMaxZamanianBakhtyari,
			 cAndreasLifvmark
			]);
}
