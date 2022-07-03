const PeopleCard = ({ list, setList, name, gender, picture, id }) => {
  const handleDelete = (e) => {
    let newArr = [...list];
    newArr = newArr.filter((person) => person.email !== e.target.id);
    setList(newArr);
    console.log(e.target.id);
    console.log(newArr);
  };

  return (
    <>
      <div className="people-card" id={id} onClick={(e) => handleDelete(e)}>
        <h2>
          {name.first} {name.last}
        </h2>
        <p>{gender}</p>
        <p>{id}</p>
        <img src={picture.medium} alt={`${name.first} ${name.last}`} />
      </div>
    </>
  );
};

export default PeopleCard;
