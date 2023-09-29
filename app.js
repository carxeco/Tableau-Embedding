let viz

// Create varianble to store viz container
const vizContainer = document.getElementById("vizContainer");

// Create Variable to store URL
const options = {
    device: "desktop",
    height: "1200vw",
    width: "1600vw",
    hideToolbar: true,   
};

// Create variable to store the URL
const url = "https://public.tableau.com/views/BadOmensSetlist/OverallView";


//Define Function to our Dashboard
function initviz(){
    viz = new tableau.Viz(vizContainer, url, options);
}

//Execute function to load dashabord after website loads
document.addEventListener("DOMContentLoaded", initviz);

//Create variable to store the export pdf button
const exportPDFButton = document.getElementById("exportPDF");

//Define a function to trigger on button click
function exportPDFfunction(){
    viz.showExportPDFDialog();
};

//Add event listener for when the button is clicked
exportPDFButton.addEventListener("click", exportPDFfunction);

//Create variable to store the export powerpoint button
const exportPowerPointButton = document.getElementById("exportPP");

//Define a function to trigger on button click
function exportPowerPointfunction(){
    viz.showExportPowerPointDialog();
};

//Add event listener for when the button is clicked
exportPowerPointButton.addEventListener("click", exportPowerPointfunction);

// Set Filter interaction
function getDatevalues(){
    const dateValue=document.getElementById
    ("dateVal").value;
    console.log(dateValue);
}

const filterButton = document.getElementById("filterButton");
filterButton.addEventListener("click", getDatevalues);