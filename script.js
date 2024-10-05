const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "In the middle of difficulty lies opportunity. — Albert Einstein",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "The best way to predict the future is to invent it. — Alan Kay",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "It is our choices that show what we truly are, far more than our abilities. — J.K. Rowling",
    "Do what you can, with what you have, where you are. — Theodore Roosevelt",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
    "The only thing we have to fear is fear itself. — Franklin D. Roosevelt",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate. — Ralph Waldo Emerson",
    "It always seems impossible until it's done. — Nelson Mandela",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "To live is the rarest thing in the world. Most people exist, that is all. — Oscar Wilde",
    "Everything you can imagine is real. — Pablo Picasso",
    "The best revenge is massive success. — Frank Sinatra"
  ];
  

var paragraph = document.querySelector("#quoteDisplay");
var button = document.querySelector("#generateQuoteButton");

function quote() {
    var randomIndex = Math.floor(Math.random() * quotes.length); // Store the random index
    paragraph.textContent = quotes[randomIndex]; // Update the paragraph's text content
}

button.addEventListener("click", quote); // Trigger quote generation on button click


