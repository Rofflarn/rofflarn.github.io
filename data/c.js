function loadMarkersForC() {
    var cEvaAndersson = L.marker([57.8455,12.3427], {icon: partyIcons["c"]})
	.bindPopup("1. <b>Eva Andersson</b><br>Kommunalråd<br>Gråbo");
    var cRobertLinderBlomberg = L.marker([57.7848634,12.2722966], {icon: partyIcons["c"]})
	.bindPopup("2. <b>Robert Linder Blomberg</b><br>Dataingenjör<br>Lerum");
    var cGunnyKron = L.marker([57.9140046,12.3640592], {icon: partyIcons["c"]})
	.bindPopup("3. <b>Gunny Kron</b><br>Marknadschef<br>Floda");
    var cIngelaGyllesten = L.marker([57.7715635,12.2709849], {icon: partyIcons["c"]})
	.bindPopup("4. <b>Ingela Gyllesten</b><br>Kommunfullmäktiges Ordförande<br>Sjövik");
    var cSuzanneParenius = L.marker([57.8289667,12.3745345], {icon: partyIcons["c"]})
	.bindPopup("5. <b>Suzanne Parenius</b><br>Affärsutvecklingskonsulent<br>Lerum/Jonsered");
    var cLernyHermansson = L.marker([57.7657502,12.2688322], {icon: partyIcons["c"]})
	.bindPopup("6. <b>Lerny Hermansson</b><br>Fd. Bygglovschef<br>Gråbo");
    var cAnnelieNyberg = L.marker([57.8036415,12.3627102], {icon: partyIcons["c"]})
	.bindPopup("7. <b>Annelie Nyberg</b><br>Sjuksköterska/Företagare<br>Floda");
    var cIngvarRinghage = L.marker([57.9117095,12.3676478], {icon: partyIcons["c"]})
	.bindPopup("8. <b>Ingvar Ringhage</b><br>Fd. Byggnadsarbetare<br>Floda");
    var cPerEricBorjesson = L.marker([57.7660551,12.257752], {icon: partyIcons["c"]})
	.bindPopup("9. <b>Per-Eric Börjesson</b><br>Marknadsekonom<br>Lerum");
    var cClaesBerlin = L.marker([57.7551166,12.2360502], {icon: partyIcons["c"]})
	.bindPopup("10. <b>Claes Berlin</b><br>Rymdingenjör<br>Aspen");
    var cOrjanWennersten = L.marker([57.7994194,12.3557104], {icon: partyIcons["c"]})
        .bindPopup("11. <b>Örjan Wennersten</b><br>Nämndeman<br>Stenkullen");
    var cAnnMariTornell = L.marker([57.7533296,12.2532026], {icon: partyIcons["c"]})
        .bindPopup("12. <b>Ann-Mari Törnell</b><br>Fd. Arbetsmarknadschef<br>Lerum");
    var cAlfHansson = L.marker([57.875255,12.3271488], {icon: partyIcons["c"]})
        .bindPopup("13. <b>Alf Hansson</b><br>Byggnadsingenjör<br>Gråbo");
    var cMaxZamanianBakhtyari = L.marker([57.86679,12.44205], {icon: partyIcons["c"]})
        .bindPopup("14. <b>Max Zamanian Bakhtyari</b><br>Fil dr Nationalekonomi<br>Norsesund");
    var cAndreasLifvmark = L.marker([57.76943,12.25219], {icon: partyIcons["c"]})
        .bindPopup("15. <b>Andreas Lifvmark,</b><br>Projektledare<br>Lerum");



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
			]);
}
