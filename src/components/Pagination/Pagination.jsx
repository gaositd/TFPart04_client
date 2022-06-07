import style from './Pagination.module.css'

function Pagination({ productsPerPage, totalProducts, paginate }) {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    };
    return (
        <div className="w-full justify-items-center">
<nav className="">
            <ul className={style.pageList}>
                {pageNumbers.map(number => {
                    return (

                        // <div class="btn-group">
                        //     <button class="btn">1</button>
                        //     <button class="btn btn-active">2</button>
                        //     <button class="btn">3</button>
                        //     <button class="btn">4</button>
                        // </div>

                        <div
                            key={number}
                            className=" btn-group"
                        >
                            <button
                                onClick={() => paginate(number)}
                                href='#top'
                                className="btn"
                            >{number}
                            </button>
                        </div>
                    )
                })}
            </ul>
        </nav>
        </div>
        
    )
}

export default Pagination;