var kalendarz = ",Czwartek, 17 Października 2016,";
var godzina = "Wybierz godzine";
var specjalizacja = "Ortopeda";
var poprzgodzina;
var poprzid; 
var id;
var value;
function wybierz(id){
    $("#"+poprzid).removeClass("zaznaczony");
    $("#"+poprzid).addClass("czternascie");
    $("#"+id).removeClass("czternascie");
    $("#"+id).addClass("zaznaczony");
    if(id == 1){document.getElementById(id).innerHTML="✔ 13:00"; godzina = "13:00";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="✔ 13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="19:30"}
    poprzid = id;}  
    if(id == 2){document.getElementById(id).ClassName="zaznaczony";document.getElementById(id).innerHTML="✔ 13:30"; godzina = "13:30";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="✔ 13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="19:30"}
    poprzid = id;}
    if(id == 3){document.getElementById(id).ClassName="zaznaczony";document.getElementById(id).innerHTML="✔ 14:00"; godzina = "14:00";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="✔ 14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="19:30"}
    poprzid = id;}
    if(id == 4){document.getElementById(id).ClassName="zaznaczony";document.getElementById(id).innerHTML="✔ 14:30"; godzina = "14:30";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="✔ 14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="19:30"}
    poprzid = id;}
    if(id == 5){document.getElementById(id).ClassName="zaznaczony";document.getElementById(id).innerHTML="✔ 15:00"; godzina = "15:00";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="✔ 15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="19:30"}
    poprzid = id;}
    if(id == 6){document.getElementById(id).ClassName="zaznaczony";document.getElementById(id).innerHTML="✔ 15:30"; godzina = "15:30";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="✔ 15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="19:30"}
    poprzid = id;}
    if(id == 7){document.getElementById(id).ClassName="zaznaczony";document.getElementById(id).innerHTML="✔ 16:00"; godzina = "16:00";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="✔ 16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="19:30"}
    poprzid = id;}
    if(id == 8){document.getElementById(id).ClassName="zaznaczony";document.getElementById(id).innerHTML="✔ 16:30"; godzina = "16:30";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="✔ 16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="19:30"}
    poprzid = id;}
    if(id == 9){document.getElementById(id).ClassName="zaznaczony";document.getElementById(id).innerHTML="✔ 17:00"; godzina = "17:00";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="✔ 17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="19:30"}
    poprzid = id;}
    if(id == 10){document.getElementById(id).ClassName="zaznaczony";document.getElementById(id).innerHTML="✔ 17:30"; godzina = "17:30";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="✔ 17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="19:30"}
    poprzid = id;}
    if(id == 11){document.getElementById(id).ClassName="zaznaczony";document.getElementById(id).innerHTML="✔ 18:00"; godzina = "18:00";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="✔ 18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="19:30"}
    poprzid = id;}
    if(id == 12){document.getElementById(id).ClassName="zaznaczony";document.getElementById(id).innerHTML="✔ 18:30"; godzina = "18:30";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="✔ 18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="19:30"}
    poprzid = id;}
    if(id == 13){document.getElementById(id).ClassName="zaznaczony";document.getElementById(id).innerHTML="✔ 19:00"; godzina = "19:00";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="✔ 19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="19:30"}
    poprzid = id;}
    if(id == 14){document.getElementById(id).ClassName="zaznaczony";document.getElementById(id).innerHTML="✔ 19:30"; godzina = "19:30";
    if(poprzid == 1){document.getElementById(poprzid).innerHTML="13:00"}
    if(poprzid == 2){document.getElementById(poprzid).innerHTML="13:30"}
    if(poprzid == 3){document.getElementById(poprzid).innerHTML="14:00"}
    if(poprzid == 4){document.getElementById(poprzid).innerHTML="14:30"}
    if(poprzid == 5){document.getElementById(poprzid).innerHTML="15:00"}
    if(poprzid == 6){document.getElementById(poprzid).innerHTML="15:30"}
    if(poprzid == 7){document.getElementById(poprzid).innerHTML="16:00"}
    if(poprzid == 8){document.getElementById(poprzid).innerHTML="16:30"}
    if(poprzid == 9){document.getElementById(poprzid).innerHTML="17:00"}
    if(poprzid == 10){document.getElementById(poprzid).innerHTML="17:30"}
    if(poprzid == 11){document.getElementById(poprzid).innerHTML="18:00"}
    if(poprzid == 12){document.getElementById(poprzid).innerHTML="18:30"}
    if(poprzid == 13){document.getElementById(poprzid).innerHTML="19:00"}
    if(poprzid == 14){document.getElementById(poprzid).innerHTML="✔ 19:30"}
    poprzid = id;}
    wyswietl();
  
}
function wyswietl(){
    document.getElementById('end').innerHTML=specjalizacja+kalendarz+godzina;
}
function zmien(value){
    specjalizacja = value;
    wyswietl();
}
function alerts(){
    alert("Umówiono wizyte");
}