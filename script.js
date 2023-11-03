const quotes = [
    '"Success is not final; failure is not fatal: It is the courage to continue that counts."',
    '"It is better to fail in originality than to succeed in imitation."',
    '"The road to success and the road to failure are almost exactly the same."',
    '“Success usually comes to those who are too busy looking for it.”',
    '“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.”'
]
const quotebox = document.getElementById("quotebox");
const loadQuotes = ()=>{
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    quotebox.innerHTML = randomQuotes; 
}
const getNewQuote = ()=>{
    loadQuotes();
    return;
}
loadQuotes();
