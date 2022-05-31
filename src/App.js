import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";
import apikey from "./data/config";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  const newsApi = async () => {
    try {
      //const proxyUrl="https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&pageSize=${loadmore}`
      );
      setnewsArray(news.data.articles);
      //console.log(news.data.articles);
      setnewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  //console.log(newsArray)
  useEffect(() => {
    newsApi();
    //eslint-disable-next-line
  }, [newsResults, category, loadmore]);

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <NewsContent loadmore={loadmore} setLoadmore={setLoadmore} newsArray={newsArray} newsResults={newsResults} />
      <Footer />
    </div>
  );
}

export default App;
