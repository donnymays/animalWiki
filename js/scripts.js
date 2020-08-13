$(document).ready(function(){
  const animal = prompt(" Choose an animal cat, jirafa or kiwi");

  if (animal === "cat"){
    $("#cat").show();
  } else if (animal === "jirafa"){
    $("#jirafa").show();
  } else {
    $("#kiwi").show();
  }
});