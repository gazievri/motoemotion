import './Pagination.sass';

export const Pagination = ({ options }) => {
  const { nextPage, prevPage, page, gaps, setPage, totalPages } = options;

  return (
    <>
      <div className="pagination">
        <button onClick={prevPage} className={`pagination__page-prev`} />

        <div className="pagination__pages-block">
          <button
            onClick={() => setPage(1)}
            className={`pagination__page ${page === 1 && 'pagination__page_active'}`}
          >
            1
          </button>
          {gaps.before ? '...' : null}
          {gaps.paginationGroup.map((el) => (
            <button
              onClick={() => setPage(el)}
              key={el}
              className={`pagination__page ${page === el ? 'pagination__page_active' : ''}`}
            >
              {el}
            </button>
          ))}
          {gaps.after ? '...' : null}
          <button
            onClick={() => setPage(totalPages)}
            className={`pagination__page ${page === totalPages && 'pagination__page_active'}`}
          >
            {totalPages}
          </button>
        </div>

        <button onClick={nextPage} className={`pagination__page-next`} />
      </div>
    </>
  );
};
