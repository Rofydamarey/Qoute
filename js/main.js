var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}

let qoutes = [
    {
        quote: `“A friend is someone who knows all about you and still loves you.”`,
        author: `― Elbert Hubbard`
    },
    {
        quote: `
        “In three words I can sum up everything I've learned about life: it goes on.”`,
        author: `― Maya Angelou`
    },
    {
        quote: `
        “If you tell the truth, you don't have to remember anything.”`,
        author: `― Mark Twain`
    },
    {
        quote: `
       “Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
        author: `― Oscar Wilde`
    },
    {
        quote: `
       “Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
        author: `― Mahatma Gandhi`
    },
    {
        quote: `
        “Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
        author: `― C.S. Lewis, The Four Loves`
    }
]

function addqoute() {
    let randomNum = Math.floor(Math.random() * (qoutes.length));

    console.log(randomNum);
    document.getElementById("addquotes").innerHTML = qoutes[randomNum].quote
    document.getElementById("addauthor").innerHTML = qoutes[randomNum].author

}
