function f1() {
    msg = "";
    if (document.getElementById('a').value == "") {
        msg += "Enter Number 1\n";
    }
    if (document.getElementById("b").value == "") {
        msg += "Enter Number 2\n";
    }
    if (document.getElementById("r1").checked == false && document.getElementById("r2").checked == false && document.getElementById("r3").checked == false && document.getElementById("r4").checked == false) {
        msg += 'Select an operation.\n';
    }
    if (msg == "") {
        a = document.getElementById("a").value;
        b = document.getElementById("b").value;
        a = parseInt(a);
        b = parseInt(b);
        if (document.getElementById('r1').checked == true) {
            z = a + b;
            document.getElementById('l1').style.color = 'blue';
            document.getElementById('l1').innerHTML = 'Sum of ' + a + ' and ' + b + ' is ' + z;
        }
        else if (document.getElementById('r2').checked == true) {
            z = a - b;
            document.getElementById('l1').style.color = 'green';
            document.getElementById('l1').innerHTML = 'Difference of ' + a + ' and ' + b + ' is ' + Math.abs(z);
        }
        else if (document.getElementById('r3').checked == true) {
            z = a * b;
            document.getElementById('l1').style.color = 'red';
            document.getElementById('l1').innerHTML = 'Product of ' + a + ' and ' + b + ' is ' + Math.abs(z);
        }
        else if (document.getElementById('r4').checked == true) {
            z = a / b;
            document.getElementById('l1').style.color = 'black';
            document.getElementById('l1').innerHTML = 'Division of ' + a + ' and ' + b + ' is ' + (z);
        }
    }
    else {
        alert(msg);
    }

}