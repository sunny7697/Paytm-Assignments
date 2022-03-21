import "./Main.css";
const Pagination = ({ numOfPages, activePageHandler, pageActive }) => {
  let num = 0;
  let numArr = [];
  while (num++ != numOfPages) numArr.push(num);

  const pageClickedHandler = (event) => {
    activePageHandler(event.target.textContent);
  };

  const pages = numArr.map((item, i) => (
    <div
      key={item}
      onClick={pageClickedHandler}
      className={`page-num ${pageActive - 1 === i ? "active" : ""}`}
    >
      {item}
    </div>
  ));

  return <div className="pagination">{pages}</div>;
};

export default Pagination;
