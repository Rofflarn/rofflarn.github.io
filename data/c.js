function loadMarkersForC() {
    var cEvaAndersson = L.marker([57.8455,12.3427], {icon: partyIcons["c"]})
	.bindPopup("1. <b>Eva Andersson</b><br>Kommunalråd<br>Gråbo");
    var cRobertLinderBlomberg = L.marker([57.78830,12.31928], {icon: partyIcons["c"]})
	.bindPopup("2. <b>Robert Linder Blomberg</b><br>Dataingenjör<br>Lerum");
    var cGunnyKron = L.marker([57.8289667,12.3745343], {icon: partyIcons["c"]})
	.bindPopup("3. <b>Gunny Kron</b><br>Marknadschef<br>Floda");
    var cIngelaGyllesten = L.marker([57.9140046,12.3640592], {icon: partyIcons["c"]})
	.bindPopup("4. <b>Ingela Gyllesten</b><br>Kommunfullmäktiges Ordförande<br>Sjövik");
    var cSuzanneParenius = L.marker([57.74746,12.20900], {icon: partyIcons["c"]})
	.bindPopup("5. <b>Suzanne Parenius</b><br>Affärsutvecklingskonsulent<br>Lerum/Jonsered");
    var cLernyHermansson = L.marker([57.83739,12.30004], {icon: partyIcons["c"]})
	.bindPopup("6. <b>Lerny Hermansson</b><br>Fd. Bygglovschef<br>Gråbo");
    var cAnnelieNyberg = L.marker([57.77797,12.39304], {icon: partyIcons["c"]})
	.bindPopup("7. <b>Annelie Nyberg</b><br>Sjuksköterska/Företagare<br>Floda");
    var cIngvarRinghage = L.marker([57.7994194,12.3557104], {icon: partyIcons["c"]})
	.bindPopup("8. <b>Ingvar Ringhage</b><br>Fd. Byggnadsarbetare<br>Floda");
    var cPerEricBorjesson = L.marker([57.77544,12.24836], {icon: partyIcons["c"]})
	.bindPopup("9. <b>Per-Eric Börjesson</b><br>Marknadsekonom<br>Lerum");
    var cClaesBerlin = L.marker([57.7551166,12.2360502], {icon: partyIcons["c"]})
	.bindPopup("10. <b>Claes Berlin</b><br>Rymdingenjör<br>Aspen");
    var cOrjanWennersten = L.marker([57.76983,12.30052], {icon: partyIcons["c"]})
        .bindPopup("11. <b>Örjan Wennersten</b><br>Nämndeman<br>Stenkullen");
    var cAnnMariTornell = L.marker([57.76618,12.25995], {icon: partyIcons["c"]})
        .bindPopup("12. <b>Ann-Mari Törnell</b><br>Fd. Arbetsmarknadschef<br>Lerum");
    var cAlfHansson = L.marker([57.83982,12.27475], {icon: partyIcons["c"]})
        .bindPopup("13. <b>Alf Hansson</b><br>Byggnadsingenjör<br>Gråbo");
    var cMaxZamanianBakhtyari = L.marker([57.86679,12.44205], {icon: partyIcons["c"]})
        .bindPopup("14. <b>Max Zamanian Bakhtyari</b><br>Fil dr Nationalekonomi<br>Norsesund");
    var cAndreasLifvmark = L.marker([57.76943,12.25219], {icon: partyIcons["c"]})
        .bindPopup("15. <b>Andreas Lifvmark,</b><br>Projektledare<br>Lerum");
    var cJosefJohnsson = L.marker([57.74903,12.25843], {icon: partyIcons["c"]})
        .bindPopup("16. <b>JosefJohnsson</b><br>Tekn Dr Byggnadsteknologi<br>Lerum");
    var cCeciliaBolleLarsson = L.marker([57.77040,12.28351], {icon: partyIcons["c"]})
        .bindPopup("17. <b></b><br>Företagare<br>Aspen");
    var cRolfBackegårdh = L.marker([57.83774,12.32836], {icon: partyIcons["c"]})
        .bindPopup("18. <b>Rolf Backegårdh</b><br>Byggnadssnickare<br>Stenkullen");
    var cLarsGustafsson = L.marker([57.83474,12.30031], {icon: partyIcons["c"]})
        .bindPopup("22. <b>Lars Gustafsson,</b><br>Ingenjör<br>Lerum");
    var cLarsErikPeterson = L.marker([57.84217,12.25176], {icon: partyIcons["c"]})
        .bindPopup("23. <b>Lars-Erik Petersson</b><br>Lantbrukare<br>Lerum");






    return L.layerGroup([cClaesBerlin,
			 cAnnMariTornell,
			 cLernyHermansson,
			 cAnnelieNyberg,
			 cOrjanWennersten,
			 cGunnyKron,
			 cSuzanneParenius,
			 cIngelaGyllesten,
			 cRobertLinderBlomberg,
			 cEvaAndersson,
			 cIngvarRinghage,
			 cPerEricBorjesson,
			 cAlfHansson,
			 cMaxZamanianBakhtyari,
			 cAndreasLifvmark,
			 cJosefJohnsson,
			 cCeciliaBolleLarsson,
			 cRolfBackegårdh,
			 cLarsGustafsson,
			 cLarsErikPeterson,
			]);
}
