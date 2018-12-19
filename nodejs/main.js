
let fs = require('fs');
// console.log("Hello World");

const jsonStr = fs.readFileSync('./test.json', 'utf-8');
let jsonData = JSON.parse(jsonStr);
// console.log(typeof jsonData);

const processData = (data) => {
    let newData = [];
    data.forEach(area => {
        console.log(area.area_name);
        if(!area.area_name) return;
        area.items.forEach(item => {
            let newItem = Object.assign({area_name: area.area_name},item);
            newData.push(newItem);
        })
    })
    return newData;
}



const newData = processData(jsonData);

console.log(newData);