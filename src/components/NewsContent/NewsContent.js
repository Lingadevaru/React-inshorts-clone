import React from "react";
import { Container } from "@mui/material";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, newsResults, setLoadmore, loadmore }) => {
  //console.log(newsArray.length)

  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use Inshorts App on your smartphone.
          </span>
        </div>

        {newsArray && newsArray.length
          ? newsArray.map((newsItem) => (
              <NewsCard newsItem={newsItem} key={newsItem.title} />
            ))
          : null}

        {loadmore <= newsResults && (
          <>
            <hr />
            <button className="loadMore" onClick={()=>setLoadmore(loadmore+20)}>Load More</button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
