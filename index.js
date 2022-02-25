
function receivesAFunction(thisIsTheFunction) {
    thisIsTheFunction();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log("Anonymous Function")
    }
}