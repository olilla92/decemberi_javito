//BMI
function bmi(weight, height) {
    const bmi = weight / height**2;
    if (bmi <= 18.5){
      return "Underweight";
    }
    else if (bmi <= 25.0){
      return "Normal";
    }
    else if (bmi <= 30.0){
      return "Overweight";
    }
    else{
      return "Obese";
    }
  }

//Négyzetszám
  function isSquare(n){
    if (n < 0){
      return false;
    }
    else if(Math.sqrt(n) % 1 != 0){
      return false;
    }
    else{
      return true;
    }
    
  }

//Középső karakter
  function getMiddle(s) {
    var s = s.split('');
    for (let i = 0; i < s.length; i++){
      if (s.length % 2 == 0){ 
        return s[s.length / 2-1] + s[s.length / 2];
      }
      else{
        return s[s.length / 2 - 0.5]
      }
    }
  }

//string tisztítás
  function stringClean(s){
    const szamok = ['0','1','2','3','4','5','6','7','8','9'];
    let szo = "";
    for (let i = 0; i < s.length; i++){
      if (s[0] == ""){
          return "";
        }
      for (let j = 0; j < szamok.length; j++){
        if (s[i] == szamok[j]){
          szo += "";
        }
        else{
          szo += s[i];
          
        }
      }
      return szo;
      
    }
  }