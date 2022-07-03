import { useEffect, useState } from "react";

export default function Pagination({ totalRecord, page, pageSize, setPage }) {
  const [pageCount, setPageCount] = useState(0);

  function goToNextPage() {
    // not yet implemented
  }

  function goToPreviousPage() {
    // not yet implemented
  }

  const getPaginatedData = () => {
    // not yet implemented
  };

  const getPaginationGroup = () => {
    // not yet implemented
  };

  useEffect(() => {
    let newPageCount = (totalRecord + pageSize - 1) / pageSize;
    let newPageSize = Math.round(newPageCount);
    console.log("new page count: ", newPageCount);
    console.log("new page count: ", newPageSize);
    setPageCount(newPageSize);
  }, [totalRecord]);

  return (
    <div className="pagination-area mb-30 wow fadeInUp animated">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-start">
          <li className="page-item">
            <a
              disable
              className="page-link"
              href="javascript:void(0)"
              onClick={() => setPage(page > 0 ? page - 1 : 0)}
            >
              <i className="elegant-icon arrow_left" />
            </a>
          </li>
          {Array(pageCount || 0)
            ?.fill(null)
            ?.map((item, index) => {
              return (
                <li className={`page-item ${page === index ? "active" : ""}`}>
                  <a className="page-link" href="javascript:void(0)" onClick={() => setPage(index)}>
                    {index + 1}
                  </a>
                </li>
              );
            })}
          <li className="page-item">
            <a
              className="page-link"
              href="javascript:void(0)"
              onClick={() => setPage(page < pageCount - 1 ? page + 1 : pageCount - 1)}
            >
              <i className="elegant-icon arrow_right" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
