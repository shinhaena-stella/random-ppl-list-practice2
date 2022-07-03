import { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";

const PeopleList = ({ list, setList, filterKey, page }) => {
  const [filteredList, setFilteredList] = useState(list);

  useEffect(() => {
    let newArr = [...list];
    if (filterKey === "" || filterKey === "all") setFilteredList(list);
    else {
      newArr = newArr.filter((person) => person.gender === filterKey);
      setFilteredList(newArr);
    }
  }, [filterKey, list]);

  return (
    <div>
      <div>
        {filteredList.map((person) => (
          <>
            <PeopleCard
              className="people-card"
              key={`${person.phone}${person.name.last}`}
              id={person.email}
              name={person.name}
              picture={person.picture}
              gender={person.gender}
              list={list}
              setList={setList}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
