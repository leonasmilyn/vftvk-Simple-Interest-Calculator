function slider() {
    var s = document.getElementById("rate");
    var o = document.getElementById("sliderO");
    o.innerHTML = s.value;
    s.oninput = function () {
        o.innerHTML = this.value;
    }
}

function compute() {
    var p = document.getElementById("principal").value;
    if (p == "" || p <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var n = document.getElementById("years").value;
    var r = document.getElementById("rate").value;
    var si = p * n * r / 100;
    var d = new Date();
    var y = parseInt(d.getFullYear()) + parseInt(n);
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit " + "<span class='highlight'>" + p + "</span>," + "<br> at an interest rate of " + "<span class='highlight'>" + r + "%</span>." + "<br> You will receive an amount of " + "<span class='highlight'>" + si + "</span>," + "<br> in the year " + "<span class='highlight'>" + y + "</span>.";
}