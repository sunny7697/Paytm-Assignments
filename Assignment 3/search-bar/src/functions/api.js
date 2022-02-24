export const fetchData = async (search, searchType) => {
  try {
    if (search == "") return [];

    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();

    return filterData(data, search, searchType);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const filterData = (data, search, searchType, flag = true) => {
  return data.filter((d) => {
    return searchType === "name"
      ? d.name.indexOf(search.toLowerCase()) === 0
      : searchType === "email"
      ? d.email.indexOf(search) === 0 ||
        (flag && d.email.toLowerCase().indexOf(search) !== -1)
      : d.id == search || (flag && d.id.toString().indexOf(search) === 0);
  });
};
