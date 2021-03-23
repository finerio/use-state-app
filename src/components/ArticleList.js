// src/components/ArticleList.js
import { useState, useEffect } from "react";

import axios from "axios";

import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articles, set_articles] = useState([]);

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      console.log("Got back:", res);

      set_articles(res.data);
    }
    doSomeDataFetching();
  }, []);

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button onClick={() => set_articles([])}>Clear notifications</button>
      {articles.map((article, index) => (
        <ArticleCard
          title={article.title}
          content={article.body}
          key={article.id}
        />
      ))}
    </div>
  );
}
