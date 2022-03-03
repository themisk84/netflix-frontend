import React, { useState, useEffect } from "react";

import { API_URL, SORT_URL } from "utils/urls";
import Card from "./Card";
import Header from "./Header";
import ButtonGenre from "./ButtonGenre";

const Main = () => {
  const [genre, setGenre] = useState("");
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${API_URL}?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContent(data.response.results);
      });
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const handleGenre = (type, pageNumber) => {
    fetch(`${API_URL}/type/${type}?page=${pageNumber}&country=germany`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContent(data.response);
      });
  };

  const genreType = ["Movie", "TV Show"];
  // useEffect(() => {
  //   handleGenre();
  // }, [genre, page]);

  return (
    <div>
      <Header />
      {/* <ButtonGenre onHandleGenre={() => handleGenre(genre, page)} />
      <ButtonGenre onClick={() => handleGenre("movie", page)} /> */}
      {genreType.map((item) => (
        <ButtonGenre
          type={item}
          onHandleGenre={() => {
            setGenre(item);
            console.log(item);
            handleGenre(item, page);
          }}
        >
          {item}
        </ButtonGenre>
      ))}
      <button onClick={nextPage}>Next page</button>
      {page > 1 && <button onClick={previousPage}>Previous page</button>}
      {content?.map((item) => (
        <Card
          key={item.show_id}
          title={item.title}
          genre={item.listed_in}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Main;
