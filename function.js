function add(x, y) {
    var total = x + y;
    return total;
  }
  
  var tes = add("hello","world"); // NaN
// You can't perform addition on undefined
console.log(tes)

function add() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  
  tes2 = add(2, 3, 4, 5); // 14  

  console.log(tes2);

  function avg1() {
    var sum = 0;
    // for (var i = 0, j = arguments.length; i < j; i++) {
    //   sum += arguments[i];
    // }
    for (let value of arguments) {
        sum += value;
      }
    return sum / arguments.length;
  }
  
avg1(2, 3, 4, 5); // 3.5
console.log(avg1(2, 3, 4, 5)); 


function avg2(...args) {
    var sum = 0;
    for (let value of args) {
      sum += value;
    }
    return sum / args.length;
  }
  
  avg2(2, 3, 4, 5); // 3.5
  console.log(avg2(2, 3, 4, 5));

  function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10

  function avgArray(arr) {
    var sum = 0;
    for (var i = 0, j = arr.length; i < j; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  console.log(avgArray([2, 3, 4, 5])); // 3.5

 console.log(avg2.apply(null, [2, 3, 4, 5])); // 3.5

 //Anonymous functions
/*  function() {      //ERROR KARENA GAK ADA NAMANYA
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}; */


 var avg3 = function() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
};
console.log(avg3(10));

//Emulating private methods with closures
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.


//Recursive functions
function countChars(elm) {
  if (elm.nodeType == 3) { // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; child = elm.childNodes[i]; i++) {
    count += countChars(child);
  }
  return count;
}

const makeWithdraw = balance => (function(copyBalance) {
  let balance = copyBalance; // This variable is private
  let doBadThings = function() {
    console.log("I will do bad things with your money");
  };
  doBadThings();
  return {
    withdraw: function(amount) {
      if (balance >= amount) {
        balance -= amount;
        return balance;
      } else {
        return "Insufficient money";
      }
    },
  }
})(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined, this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)) // "Insufficient money"
console.log(secondAccount.withdraw(20));  // 0

/* for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = "Button " + i;
  button.onclick = (function (copyOfI) {
    return function() {alert(copyOfI);};
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2 */