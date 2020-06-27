let stats = {
    shooting: 3,
    handle: 3,
    pass: 3
}

let shooting = 4;
let handle = 3;
let pass = 4;

let newStats = {}

// console.log("shooting stat:", stats.shooting)
for(let el in stats){
    if(stats[el] !== pass){
        newStats.pass = pass
    }

    if(stats[el] !== handle){
        newStats.handle = handle
    }
    
    if(stats[el] !== shooting){
        newStats.shooting = shooting
    }
}

console.log(newStats)