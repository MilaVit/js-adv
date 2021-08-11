function orbitalPeriod (arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    
    arr.map(element => {
        element.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + element.avgAlt, 3)/ GM));
        delete element.avgAlt;
    })

    return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

