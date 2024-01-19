// animate(document.querySelector(".premier"), 5, 50, 1000);

// function animate(elem, start, end, maxDuration) {
//   elem = elem || document.querySelector(`#value`);
    
//   if (start < end) {
//     elem.textContent = !elem.textContent.trim() ? start : start + 1;
//     return setTimeout( () =>
//       animate( elem, start + 1, end, maxDuration ), 
//     Math.floor( (Math.random() * maxDuration) ) );
//   }

// }

let counts = setInterval(updated)
let upto = 0

function updated() {

   let count = document.querySelector("h2")
    count.innerText = (upto = upto + 50)

    if (upto === 12000) {
        clearInterval(counts)
    }

}

let counts1 = setInterval(updated1)
let upto1 = 0

function updated1() {

   let count1 = document.querySelectorAll("h2")[1]
    count1.innerText = (upto1 = upto1 + 10)

    if (upto1 === 5000) {
        clearInterval(counts1)
    }

}

let counts2 = setInterval(updated2)
let upto2 = 0

function updated2() {

   let count2 = document.querySelectorAll("h2")[2]
    count2.innerText = (upto2 = upto2 + 10)

    if (upto2 === 7500) {
        clearInterval(counts2)
    }

}





