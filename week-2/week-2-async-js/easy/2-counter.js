let counter = 0;
function incrementCounter() {
    setTimeout(() => {
        counter++;
        console.log(counter);
        incrementCounter();
    }, 1000);
}

incrementCounter();
