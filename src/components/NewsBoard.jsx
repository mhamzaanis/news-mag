import {useState, useEffect} from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({ category , country }) => {
    const [articles, setarticles] = useState([])

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then((response=> response.json())).then((data)=>{
            console.log("API response:", data);
            setarticles(data.articles);
        });
    },[category, country])

    return (
    <div>
      <h2 className="text-center mt-4">Latest <span className="badge bg-danger">News</span>{
      category ? ": " + category.charAt(0).toUpperCase() + category.slice(1) 
        : ": General"}</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((news, index) => (
          <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))}
      </div>
    </div>
  );
}

export default NewsBoard
