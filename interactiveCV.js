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
		document.getElementById('GCSEButton').innerHTML = "&nbsp; &nbsp;(hide)";
	} else {
		document.getElementById('GCSE').style.display = "none";
		document.getElementById('GCSEButton').innerHTML = "&nbsp; &nbsp;(show more)";
	}
}