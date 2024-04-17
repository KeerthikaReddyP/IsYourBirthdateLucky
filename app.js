const dobjs = document.querySelector("#dob");
const luckynum = document.querySelector("#lucky-num");
const btn = document.querySelector("#btn");

function checkLuck() {
  const sum = calcSum(dobjs.value);
  const num = Number(luckynum.value);
  if (sum && num) {
    document.querySelector("textarea").style.display = "block";
    if (sum % num == 0) {
      document.querySelector("textarea").innerText =
        "Hurrayyy, your birthdate is lucky";
    } else {
      document.querySelector("textarea").innerText =
        "Oops, your birthdate is unlucky";
    }
  }else{
    document.querySelector("#errMsg").style.display="block";
  }
}

function calcSum(string) {
  string = string.replaceAll("-", "");
  let sum = 0;
  for (var i = 0; i < string.length; i++) {
    sum = sum + Number(string.charAt(i));
  }
  return sum;
}

btn.addEventListener("click", checkLuck);
