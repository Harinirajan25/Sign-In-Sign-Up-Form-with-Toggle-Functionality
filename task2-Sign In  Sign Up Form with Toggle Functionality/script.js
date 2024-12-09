let click1 = document.getElementById("btn2");

let click = document.getElementById("btn1");

let form1 = document.getElementById("form1");
form1.style.display = 'none';

let form2 = document.getElementById("form2");
form2.style.display = 'none';

function fun() {

    
    click.style.borderBottomColor = "#6C13D5";
    click.style.borderBottomWidth = "5px";


    click1.style.border = "2px solid black";

    form1.style.display = 'block';

    form2.style.display = 'none';

}
function fun1() {



    click1.style.borderBottomColor = "#6C13D5";
    click1.style.borderBottomWidth = "5px";

    click.style.border = "2px solid black";

    form2.style.display = 'block';

    form1.style.display = 'none';

}