import { useEffect, useState } from "react";
// import NewsCard from "./NewsCard";

let API_KEY = "9d4cd64a88f1f83df2cd240a940f08cc";
let url = `https://gnews.io/api/v4/search?q=example&apikey=${API_KEY}`;

const NewsList = () => {
  let [news, setNews] = useState([]);
  console.log("news", news);

  useEffect(() => {
    const fetchdata = async () => {
      let data=localStorage.getItem("news")
      if(data){
        setNews(JSON.parse(data))
      }else{
        await fetch(url)
        .then((res) => res.json())
        .then((da) => {
          setNews(da?.articles);
          localStorage.setItem("news", JSON.stringify(da?.articles));
        });
      }
    };
    // calling the async function
    fetchdata();
  }, []);
  return (
    <div>
      <div className="row gy-2">
        {/* {news.map((val) => (
          <div className="col-sm-12 col-lg-4 col-md-4">
            <NewsCard
              title={val.title}
              des={val.description}
              imgurl={val.image}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default NewsList;
