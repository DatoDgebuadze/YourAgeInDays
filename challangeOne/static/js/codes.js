//functionality in for age in days generator
function ageInDays() {
var dabadebisWeli = prompt('Romel Wels daibade?')
var formula = (2021 - dabadebisWeli) * 365; 
var h1 = document.createElement('h1');
var pasuxi = document.createTextNode("Shen xar\n" + formula + "\ndgis");
h1.setAttribute('id', 'ageInDays');
h1.appendChild(pasuxi);
document.getElementById("flex-box-result").appendChild(h1);

}

function reset() {
    document.getElementById('ageInDays').remove();
}
