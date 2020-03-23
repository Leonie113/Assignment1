function counter_function() {
    var counter = document.getElementById("cntr");
    var count = 0;
    count = counter.value;
    count = count + 1;
    counter.innerHTML = count;
}
window.onload = counter_function;