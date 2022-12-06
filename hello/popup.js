console.log("This is a popup!")
const d = document.getElementById("date")
const currentDate = new Date()
console.log("This is a another popup!")
d.innerHTML = currentDate.toLocaleDateString().toString()
//  d.innerHTML = "abra ca dabra";