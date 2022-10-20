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