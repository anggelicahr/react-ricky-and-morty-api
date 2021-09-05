import React from 'react';

const Pagination = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <div className="container">
            <ul className="pagination justify-content-end">
                {prev ?
                    <li className="page-item">
                        <button className="btn btn-outline-dark" onClick={handlePrevious} >
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only"> Previous</span>
                        </button >
                        <p className="box-spece">...</p>
                    </li >
                    : null}

                {next ?
                    <li className="page-item">
                        <button className="btn btn-outline-dark" onClick={handleNext}>
                            <span className="sr-only">Next </span>
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                    : null}
            </ul >
        </div >
    )
}

export default Pagination;