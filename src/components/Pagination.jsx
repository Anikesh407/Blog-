import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/context";

const Pagination = () => {
  const { page, setPage, handlePageChange, totalPages } =
    useContext(AppContext);

  return (
    <div className="w-[100%]  border-t-gray-400 border-t-2 fixed bottom-0 bg-white flex justify-center items-center h-[50px]">
      <div className="flex justify-between items-centerp-[10px] w-[50vw] h-[40px] px-[20px] ">
        <div className=" w-[200px] h-auto flex justify-between items-center">
          {page === 1 ? null : (
            <button
              className=" w-[80px] h-[30px] rounded-xl border-gray-500 border-1 "
              onClick={() => {
                setPage(page - 1);
                handlePageChange(page - 1);
              }}
            >
              Previous
            </button>
          )}

          {page === totalPages ? null : (
            <button
              className=" w-[60px] h-[30px] rounded-xl border-gray-500 border-1 "
              onClick={() => {
                setPage(page + 1);

                handlePageChange(page + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
        <div>
          Page {page} of {totalPages}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
