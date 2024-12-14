const drivers = [
    { name: 'Bobby', hometown: 'Jericho' },
    { name: 'bobby', hometown: 'Galilee' },
    { name: 'Peter', hometown: 'Nineva' },
    { name: 'Sammy', hometown: 'Canaan' },
    { name: 'Sarah', hometown: 'Bethlehem' },
    { name: 'Sally', hometown: 'Jordan' }
];


function findMatching(drivers, name) {
    return drivers.filter(driver => driver.name && driver.name.toLowerCase() === name.toLowerCase());
}


function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.name && driver.name.toLowerCase().startsWith(letters.toLowerCase()));
}


function matchName(drivers, name) {
    return drivers.filter(driver => driver.name && driver.name.toLowerCase() === name.toLowerCase());
}
