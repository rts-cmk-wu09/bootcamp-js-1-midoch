function newQuote() {
  quotes = [
    "“Life is like riding a bicycle. To keep your balance, you must keep moving.”― Albert Einstein",
    "“Creativity is intelligence having fun.” – Albert Einstein",
    "“We cannot solve our problems with the same thinking we used to create them.” – Albert Einstein",
    "“Anyone who has never made a mistake has never tried anything new.” – Albert Einstein",
    "“Life is a journey, not a destination.” – Ralph Waldo Emerson",
    "“Today’s accomplishments were yesterday’s impossibilities.” – Robert H. Schuller",
    "“All our dreams can come true if we have the courage to pursue them.”- Walt Disney",
    "“Everything you’ve ever wanted is on the other side of fear.”- George Addair",
    "“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi",
    "“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson",
    "“What you lack in talent can be made up with desire, hustle and giving 110% all the time.” – Don Zimmer",
    "“Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.” – Brian Tracy",
  ];
  let pickQuote = Math.floor(Math.random() * quotes.length);
  document.querySelector("#quoteDisplay").innerHTML = quotes[pickQuote];
}

document.addEventListener("load", newQuote());
