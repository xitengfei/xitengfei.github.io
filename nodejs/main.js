
let fs = require('fs');
// console.log("Hello World");

const jsonStr = fs.readFileSync('./test2.json', 'utf-8');
let jsonData = JSON.parse(jsonStr);
// console.log(typeof jsonData);

const getDates = (str) => {
    let result = [];
    const pattern = /(\d+.\d{1,2}.\d{1,2})[\-\——]+(\d+.\d{1,2}.\d{1,2})/;
    // if(!pattern.test(str)) return [];

    let matches = pattern.exec(str);
    if(matches && matches.length >= 3){
        result.push(matches[1]);
        result.push(matches[2]);
    }
    return result;
}

const processData = (data) => {
    let newData = [];
    data.forEach(area => {
        console.log(area.area_name);
        if(!area.area_name) return;
        area.items.forEach(item => {
            let newItem = Object.assign({area_name: area.area_name},item);
            let dates = getDates(newItem.mixed);
            newItem.start_date = dates[0];
            newItem.end_date = dates[1];
            newItem.mixed = newItem.mixed.replace(/\r\n/g, '');

            newData.push(newItem);
            if(dates.length < 2){
                // console.log("error when getting date:", newItem);
            }else{
                console.log(newItem);
            }
        })
    })
    return newData;
}



const newData = processData(jsonData);

// console.log(newData);