import React from 'react';
import {Pagination} from "react-bootstrap";

const AppPagination = ({heroes, setHeroes, totalCount, setTotalCount, page, setPage, limit}) => {
    const pageCount = Math.ceil(totalCount / limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination>
            {pages.map(selectedPage =>
                <Pagination.Item
                    key={selectedPage}
                    active={page === selectedPage}
                    onClick={() => setPage(selectedPage)}
                >
                    {selectedPage}
                </Pagination.Item>
            )}
        </Pagination>
    );
};

export default AppPagination;