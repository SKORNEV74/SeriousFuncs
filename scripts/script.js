window.onload = function () {
    alert("Yeah, that page loaded!");
};

setTimeout(function () {
    alert("Time to take the cookies out of the oven");
}, 5000);

let migrating = true;
let fly = function (num) {
    let sound = "Flying";
    function wingFlapper() {
        console.log(sound);
    }

    for (let i = 0; i < num; i++) {
        wingFlapper();
    }
};
function quack(num) {
    let sound = "Quack";
    let quacker = function () {
        console.log(sound);
    }
    for (let i = 0; i < num; i++) {
        quacker();
    }
}
if (migrating) {
    quack(4);
    fly(4);
}

let secret = "007";

function getSecret1() {
    let secret = "008";

    function getValue() {
        return secret;
    }

    return getValue();
}

console.log(getSecret1());

function getSecret2() {
    let secret = "008";

    function getValue() {
        return secret;
    }

    return getValue;
}

let getValueFan = getSecret2();
console.log(getValueFan());

function makePass(pass) {
    return function guess(passGuess) {
        return (passGuess === pass);
    };
}

let tryGuess = makePass("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));

function multN(n) {
    return function multBy(m) {
        return (n * m);
    };
}

let multBy3 = multN("3");
console.log("Multiplying 2: " + multBy3("2"));
console.log("Multiplying 3: " + multBy3("3"));

function makeCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            return count;
        }
    };
}

let counter = makeCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());