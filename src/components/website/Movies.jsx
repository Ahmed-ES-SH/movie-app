import React, { useState } from "react";
import { Data_context } from "../../context/Moviescontext";
import Cards from "./Cards";
import ReactPaginate from "react-paginate";
import "../../Css/pageniate.css";

const Movies = (props) => {
  const { all } = Data_context();
  let items_per_page = 20;
  const [currentpage, setcurrentpage] = useState(0);

  const handelselected = (data) => {
    const selecet_page = data.selected;
    setcurrentpage(selecet_page);
  };

  const offset = currentpage * items_per_page;
  const current_page_data =
    props.data && props.data.length > 0
      ? props.data.slice(offset, offset + items_per_page)
      : all.slice(offset, offset + items_per_page);

  return (
    <div>
      <div className="pagination">
        {current_page_data.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>

      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(all.length / items_per_page)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handelselected}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Movies;
