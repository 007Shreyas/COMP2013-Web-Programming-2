import { useState, useEffect } from "react";

export default function QuoteFetcher() {
  const URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
  const [quote, setQuote] = useState({ quote: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setQuote({ quote: data.quote.text, author: data.quote.author });
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <h1>{quote.quote}</h1>
      <h2>{quote.author}</h2>
      <button onClick={() => fetchQuote()}>Get Quote</button>
    </div>
  );
}