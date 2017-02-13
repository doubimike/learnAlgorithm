function titleCase(str) {
    return str.toLowerCase().replace(/( |^)/g, (L) => L.toUpperCase());

}


console.log(titleCase("hello world"));
