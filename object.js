let memberArray = ['coffeemori', 'sam', 'tom'];
console.log("memberArray[1]", memberArray[1]);

let memberObject = {
    dev : 'coffeemori',
    manager : 'sam',
    designer : 'tom'
}
memberObject.designer = 'Tom';
console.log("memberObject.designer", memberObject.designer);
delete memberObject.manager;
console.log("memberObject.manager", memberObject.manager);