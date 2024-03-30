 var dizel=42;
var  benzin=43.50;
var  gaz=37.25;


function Hesapla(){
hangiYakıt=document.getElementById("hangiYakıtİnput").value;

kacLitre=document.getElementById("kaçLitreİnput").value;

bakiye=document.getElementById("bakiyeİnput").value;

if(hangiYakıt=="dizel"){
    var sonuc=dizel*kacLitre;}
    

else if(hangiYakıt=="Dizel"){
    var sonuc=dizel*kacLitre;
}

if(hangiYakıt=="benzin"){
    
    var sonuc=benzin*kacLitre;
}

else if(hangiYakıt=="Benzin"){
    var sonuc=benzin*kacLitre;
}

if(hangiYakıt=="Gaz"){
    var sonuc=gaz*kacLitre;
}

else if(hangiYakıt=="gaz"){
   var sonuc=gaz*kacLitre;

}

if(bakiye<sonuc){
    document.getElementById("islemBasarısız").innerHTML="Bakiyeniz bu işlemi yapmak için yetersiz.";
    }
    else{

        document.getElementById("islemBasarılı").innerHTML= "İşlem tamamlandı"+ " Kalan bakiyeniz: " + (bakiye-sonuc) + " TL";
    }

document.getElementById("sonucSpan").innerHTML=sonuc + " TL";
}
