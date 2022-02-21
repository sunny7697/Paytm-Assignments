export const fetchData = async (search, searchType) => {
  const res = await fetch("http://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  return data.filter((d) => {
    return searchType === "name"
      ? d.name.indexOf(search) === 0
      : searchType === "email"
      ? d.email.indexOf(search) !== -1
      : d.id == search;
  });
};
