//Javascript for interactive CV page

//Toggle the display of blocks and change the button from a plus to a minus.
function toggleBlock(blockID) {	
	var buttonPressed = blockID + "Toggle";
	if (document.getElementById(blockID).style.display === "none") {
		document.getElementById(blockID).style.display = "block";
		document.getElementById(buttonPressed).innerHTML = "&ominus;";
	} else {
		document.getElementById(blockID).style.display = "none";
		document.getElementById(buttonPressed).innerHTML = "&oplus;";
	}
}

//Toggle the individual GCSE grades
function toggleGCSE() {
	if (document.getElementById('GCSE').style.display === "none") {
		document.getElementById('GCSE').style.display = "block";
		document.getElementById('GCSEButton').innerHTML = "&nbsp; &nbsp;(hide grades)";
	} else {
		document.getElementById('GCSE').style.display = "none";
		document.getElementById('GCSEButton').innerHTML = "&nbsp; &nbsp;(show grades)";
	}
}

//Toggle the images of games
function toggleGames() {
	if (document.getElementById('Games').style.display === "none") {
		document.getElementById('Games').style.display = "block";
		document.getElementById('GamesButton').innerHTML = "&nbsp; &nbsp;(hide examples)";
	} else {
		document.getElementById('Games').style.display = "none";
		document.getElementById('GamesButton').innerHTML = "&nbsp; &nbsp;(see examples)";
	}
}

//Toggle the images of games
function toggleSpace() {
	if (document.getElementById('Space').style.display === "none") {
		document.getElementById('Space').style.display = "block";
		document.getElementById('SpaceButton').innerHTML = "&nbsp; &nbsp;(hide more)";
	} else {
		document.getElementById('Space').style.display = "none";
		document.getElementById('SpaceButton').innerHTML = "&nbsp; &nbsp;(see more)";
	}
}