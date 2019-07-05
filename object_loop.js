let memberArray = ['coffeemori', 'sam', 'tom'];
console.group('array loop');
let i = 0;
while(i < memberArray.length) {
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');
let memberObject = {
    dev : 'coffeemori',
    manager : 'sam',
    designer : 'tom'
}
console.group('array loop');
for(let name in memberObject){
    console.log(name, memberObject[name]);
}
console.groupEnd('array loop');