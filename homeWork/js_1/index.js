let url = "../homeWork/js_1/index.json"
let myTest = "";


// brings data to my project
fetch(url)
  .then((response) => response.json())
  .then((data) => {
  test(data);
console.log(data);
  })
  .catch();

// make a function to take out the data
  let test = (data) => {
  console.log(data);
  myTest = data;
};

// לשרשר עד הפוסט

const fakeApi = (url) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //destructioring - taking out pages
      let { pages } = myTest;
      if (pages[url]) {
        res(pages[url]);
      } else {
        rej();
      }
    }, 2000);
  });
};

// traying pull out post
fakeApi("/post/101")
  .then((data) => {
    console.log(data);

    let wantedId = data.content;
    console.log(wantedId);

    // this is for chaning promises
    return fakeApi(`/post/101/${wantedId}`);
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("Page 404");
  });

 



 


