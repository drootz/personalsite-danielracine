// Insert Date in Copyright Footer Section
var dt = new Date(),
    year = dt.getFullYear(),
    copyDateEl = document.getElementById("js-year"),
    currentYear = document.createTextNode(year);
copyDateEl.appendChild(currentYear);
