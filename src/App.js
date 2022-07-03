import { useEffect, useState } from "react";
import PeopleList from "./PeopleList";
import "./styles.css";

// https://randomuser.me/api/?page=3&results=10&seed=abc
const API_URI = "https://randomuser.me/api/";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);
  const [filterKey, setFilterKey] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${API_URI}?page=${page}&results=20&seed=abcde`)
      .then((res) => res.json())
      .then((data) => {
        setList([...list, ...data.results]);
        setIsLoading(false);
        // console.log(data.results);
        // console.log(list);
      })
      .catch((err) => console.log(err));
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <h1>Random People List</h1>
      <div>
        <label htmlFor="filter-select-box">Filter by </label>
        <select
          onChange={(e) => setFilterKey(e.target.value)}
          className="filter-select-box"
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <PeopleList list={list} setList={setList} filterKey={filterKey} />
        )}
      </div>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}
