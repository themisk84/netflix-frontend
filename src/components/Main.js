import React, { useState, useEffect } from "react";

import { SORT_URL, YEAR_URL } from "utils/urls";
import Card from "./Card";
import Header from "./Header";
import SearchContent from "./SearchContent";
import CardYear from "./CardYear";

const Main = () => {
  const [genre, setGenre] = useState([]);
  const [year, setNewYear] = useState();
  const [page, setPage] = useState(1);

  const handleSortContent = (type) => {
    fetch(SORT_URL(type, page))
      .then((res) => res.json())
      .then((data) => setGenre(data));
  };

  useEffect(() => {
    handleSortContent("tv show");
  }, [page]);

  console.log(genre);
  //   console.log(year);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <Header onSortContent={handleSortContent} />
      {/* <SearchContent onSubmitForm={handleYear} setNewYear={handleNewYear} /> */}
      <button onClick={nextPage}>Next page</button>
      <button onClick={previousPage}>Previous page</button>
      {genre?.response?.results.map((item) => (
        <Card
          key={item.show_id}
          title={item.title}
          genre={item.listed_in}
          description={item.description}
        />
      ))}
      {/* {year?.response?.results.map((item) => (
        <CardYear
          key={item.show_id}
          title={item.title}
          genre={item.listed_in}
          description={item.description}
        />
      ))} */}
    </div>
  );
};

export default Main;
