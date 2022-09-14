

const init = async() => {
let url = "../js/pageObj.json";
let resp = await fetch(url);
let data = await resp.json();

console.log(data);
return data;

};

init();

