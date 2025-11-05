import { useState, useEffect } from "react";

export default function BadQuoteFetcher() {
  const URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
  // const [quote, setQuote] = useState({ quote: "", author: "" });
  // useEffect(() => {
  //   fetchQuote();
  // }, []);

  const fetchQuote = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const quote = await { quote: data.quote.text, author: data.quote.author };
    console.log(quote);
    return quote;
  };

  const quote = fetchQuote();

  return (
    <div>
      <h1>{quote.quote}</h1>
      <h2>{quote.author}</h2>
      {/* <button onClick={fetchQuote}>Get Quote</button> */}
    </div>
  );
}