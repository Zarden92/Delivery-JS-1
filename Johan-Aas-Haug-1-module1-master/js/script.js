// Question 1:

const cat = {
    complain: "Meow!"
};
console.log(cat.complain);


//Question 2:
 
const heading = document.querySelector("h3")
heading.innerHTML ="Updated heading";


//Question 3:

document.querySelector("h3")
heading.style.fontSize ="2em";


//Question 4:

heading.classList.add("subheading");
console.dir(heading);


// Question 5:

const paragraphs = document.querySelectorAll("p")

paragraphs.forEach((e) => {
    e.style.color ="red"
});


// Question 6:

const resultcontainer = document.querySelector(".results");

resultcontainer.innerHTML += "<p> New paragraph </p>";
resultcontainer.style.backgroundColor = "yellow";


//QUESTION 7:

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }

];

function list(name) {

    for(let i = 0; i < name.length; i++) {
        console.log(name[i].name);
    }
}

list(cats);


//Question 8

function createCats(cats) {
    
    for(let i = 0; i < cats.length; i++) {
        console.log(cats[i]);
    }
}

createCats(cats);

document.querySelector(".cat-container")

// did not manage to do this correctly. That's why i did not finish question 8
