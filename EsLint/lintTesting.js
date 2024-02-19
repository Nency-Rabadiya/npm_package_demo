//"semi" : "warn" ,"eqeqeq" : "warn"
function printName(name) {
  if (name == "nency") {
    console.log(name);
  }
}
printName('nency');

//
let num = () => 0;
//"no-else-return": "warn"
function foo() {
  if (x) {
    return y;
  } else {
    return z;
  }
}

//"no-alert" : "warn"
alert("here!");

confirm("Are you sure?");

// "no-unreachable": "warn"
function too() {
  return bar();
  function bar() {
    return 1;
  }
}

function bar() {
  return x;
  var x; //Unreachable code detected.
}

switch (too) {
  case 1:
    break;
    var x; //Unreachable code detected.
}