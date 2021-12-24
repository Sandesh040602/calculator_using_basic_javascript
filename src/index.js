var es = "";
var first = "";
var second = "";
var operator = "";

var cplusm = 0;
//all ids
var outputbox = document.getElementsByClassName("outputbox"); //outputbox
// all nos
var nine = document.getElementsByClassName("nine");
var eight = document.getElementsByClassName("eight");
var seven = document.getElementsByClassName("seven");
var six = document.getElementsByClassName("six");
var five = document.getElementsByClassName("five");
var four = document.getElementsByClassName("four");
var three = document.getElementsByClassName("three");
var two = document.getElementsByClassName("two");
var one = document.getElementsByClassName("one");
var zero = document.getElementsByClassName("zero");
var decimal = document.getElementsByClassName("decimal");
var plusm = document.getElementsByClassName("plusm");
//updating the output boxof touched nos;
zero[0].addEventListener("click", function () {
  es += "0";
  outputbox[0].innerHTML = es;
});
one[0].addEventListener("click", function () {
  es += "1";
  outputbox[0].innerHTML = es;
});
two[0].addEventListener("click", function () {
  es += "2";
  outputbox[0].innerHTML = es;
});
three[0].addEventListener("click", function () {
  es += "3";
  outputbox[0].innerHTML = es;
});
four[0].addEventListener("click", function () {
  es += "4";
  outputbox[0].innerHTML = es;
});
five[0].addEventListener("click", function () {
  es += "5";
  outputbox[0].innerHTML = es;
});
six[0].addEventListener("click", function () {
  es += "6";
  outputbox[0].innerHTML = es;
});
seven[0].addEventListener("click", function () {
  es += "7";
  outputbox[0].innerHTML = es;
});
eight[0].addEventListener("click", function () {
  es += "8";
  outputbox[0].innerHTML = es;
});
nine[0].addEventListener("click", function () {
  es += "9";
  outputbox[0].innerHTML = es;
});
decimal[0].addEventListener("click", function () {
  es += ".";
  outputbox[0], (innerHTML = es);
});

plusm[0].addEventListener("click", function () {
  cplusm++;
  if (cplusm == 1) {
    es = "-" + es;
  } else if (cplusm % 2 == 0) {
    es = "+" + es.substring(1);
  } else {
    es = "-" + es.substring(1);
  }

  outputbox[0].innerHTML = es;
});

//all operator excluding "=" and "ac"
var plus = document.getElementsByClassName("plus");
var minus = document.getElementsByClassName("minus");
var divide = document.getElementsByClassName("divide");
var multiply = document.getElementsByClassName("multiply");
var mod = document.getElementsByClassName("mod");
//actions on above clicks
plus[0].addEventListener("click", function () {
  first = es;
  es = "";
  operator = "+";
  outputbox[0].innerHTML = operator;
});

minus[0].addEventListener("click", function () {
  first = es;
  es = "";
  operator = "-";
  outputbox[0].innerHTML = operator;
});

multiply[0].addEventListener("click", function () {
  first = es;
  es = "";
  operator = "*";
  outputbox[0].innerHTML = operator;
});

divide[0].addEventListener("click", function () {
  first = es;
  es = "";
  operator = "/";
  outputbox[0].innerHTML = operator;
});

mod[0].addEventListener("click", function () {
  first = es;
  es = "";
  operator = "%";
  outputbox[0].innerHTML = operator;
});

//AC
var ac = document.getElementsByClassName("ac");
ac[0].addEventListener("click", function () {
  es = "";
  first = "";
  second = "";
  operator = "";
  cplusm = 0;
  outputbox[0].innerHTML = "";
});
var ans = 0;
//EQUAL
var equal = document.getElementsByClassName("equal");
equal[0].addEventListener("click", function () {
  second = "(" + es + ")";
  first = "(" + first + ")";
  ans = eval(second + operator + first);
  outputbox[0].innerHTML = ans;
  first = ans.toString();
});
