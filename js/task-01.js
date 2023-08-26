const count = (parameter) => {
  return  parameter.length;
};

const countElements = (parameter) => {
  parameter.forEach((element) => {
    console.log("Category:" + element.querySelector("h2").textContent);
    console.log(count(element.querySelectorAll("li")));
  });
};

const element = document.querySelectorAll(".item");
console.log("Number of categories:" + count(element));
countElements(element);



