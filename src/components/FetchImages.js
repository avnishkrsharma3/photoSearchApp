
import React from 'react';
import ImageItems from './ImageItems';
import { useEffect, useState } from 'react';
import './imageItems.css';
const FetchImages = (props) => {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPage] = useState(1);
  let { pageNum, apiKey, progress, search, query} = props;
  const fetching = async () => {
    console.log(apiKey);
    progress = 20;
    let url = `https://api.unsplash.com/photos?page=${pageNumber}&client_id=${apiKey}`;
    let data = await fetch(url);
    progress=90;
    let parseData = await data.json();
    setArticles(parseData.splice(0, 9));
    //articles.pop();
    console.log("fetched");
    progress = 100;
  }
  //`https://api.unsplash.com/photos?page=${pageNumber}&client_id=${apiKey}`;
  //https://api.unsplash.com/search/photos?page=1&query=office&client_id=
  useEffect(() => {
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let handleNextClick = async () => {
    setPage(pageNumber+1);
    progress = 20;
    if(search === '' || query === '')
    var url = `https://api.unsplash.com/photos?page=${pageNumber}&client_id=${apiKey}`;
    else
      var url = `https://api.unsplash.com/search=${search}/photos?page=${pageNumber}&query=${query}&client_id=${apiKey}`;
    let data = await fetch(url);
    let parseData = await data.json();
    progress = 80;
    setArticles(parseData.splice(0, 9));
    //articles.pop();
    console.log("Next");
    progress = 100;
  }
  let handlePrevClick = async () => {
    if(pageNumber > 0){
      progress = 20;
    setPage(pageNumber-1);
    let url = `https://api.unsplash.com/photos?page=${pageNumber}&client_id=${apiKey}`;
    let data = await fetch(url);
    progress = 80;
    let parseData = await data.json();
    setArticles(parseData.splice(0, 9));
    //articles.pop();
    console.log("Previous");
    progress = 100;
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {articles.map((elem) => {
            return (
              <div key={elem.id} className="col-md-4">
                <ImageItems
                  imageUrl={elem.urls.small}
                />
              </div>
            );
          })}
          <div id="pagination">
            <button disabled={pageNumber <= 1} type="button" class="btn btn-dark button" onClick={handlePrevClick}> &larr; Previous</button>
            <button type="button" className="btn btn-dark button" onClick={handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FetchImages
