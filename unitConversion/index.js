
let feet = document.getElementById("ft")
let meter = document.getElementById("meter")
let gal = document.getElementById("gal")
let ltr = document.getElementById("ltr")
let lbs = document.getElementById("lbs")
let kl = document.getElementById("kl")

function showNum() {
    let num = document.getElementById("value").textContent
    x = document.getElementsByClassName("myNum")
    for(var i = 0; i < x.length; i++) {
        x[i].textContent = num;
    }

    let computeFeet = num * 3.280;
    let computeMeter = num * 0.304;
    let computeGal = num * 0.264;
    let computeLtr = num * 3.785;
    let computeLbs = num * 2.2;
    let computeKl = num * 0.453;

    feet.textContent = computeFeet.toFixed(3);
    meter.textContent = computeMeter.toFixed(3);
    gal.textContent = computeGal.toFixed(3);
    ltr.textContent = computeLtr.toFixed(3);
    lbs.textContent = computeLbs.toFixed(3);
    kl.textContent = computeKl.toFixed(3);
}
