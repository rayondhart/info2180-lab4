window.onload = click;

var textfield = document.getElementById("name");

function click(){
    document.getElementsByClassName("btn")[0].addEventListener('click', displayAlert);
}

function displayAlert(event){
    fetch("http://localhost/info2180-lab4/superheroes.php")
    .then(a => a.text())
    .then(y=>{
            if (textfield === null){
                document.getElementById("result").innerHTML = y;
            }
    })
}