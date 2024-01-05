import { useState } from "react";
import { useEffect } from "react";
import TanstackTable from "./TanstackTable";

const ListComponent = ({ children, heading, btnName, handleBtn, data, columnData, setPageSize, setCurrentPageNum, height, hideSearch, hidePagination, classname, totalCount = data?.length }) => {

    const [array, setArray] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        if (totalCount) {
            let lengthOfArray = Math.ceil(totalCount / limit) > 0 ? Math.ceil(totalCount / limit) : 0
            setArray(Array.from({ length: lengthOfArray }, (_, i) => i + 1));
        }
    }, [totalCount, limit])

    const handleNextBtn = () => {
        if (currentPage >= 5) {
            let newArray = array;
            newArray.shift();
            setArray([...newArray]);
        }
    }

    const handlePreviousBtn = () => {
        let newArray = array;
        if (currentPage > 5) {
            let arrlength = currentPage - 5;
            newArray.unshift(arrlength)
            setArray([...newArray]);
        }
    }

    return (
        <>
            <div className={`w-full relative rounded-xl bg-white py-7 md:px-5 2xl:px-12 2xl:border-t 2xl:border-[#f3f2f2] 2xl:shadow-xl 2xl:shadow-[#00000014] ${height ? height : 'min-h-screen'} `}>
                {!btnName && !heading ? '' :
                    <div className={`w-full flex justify-between font-semibold ${classname ? classname : 'mb-5'}  `}>
                        <p className="font-primary text-2xl" >{heading}</p>
                        {btnName ?
                            <div>
                                {permissionData && permissionData?.includes('create') ?
                                    <button
                                        className="bg-red px-4 py-2 rounded-md text-white uppercase font-medium"
                                        onClick={() => handleBtn()}
                                    >
                                        {btnName}
                                    </button>
                                    : ""
                                }
                            </div>
                            : ""
                        }
                    </div>
                }
                {/* {data?.length ? */}
                <div className="w-full mb-[100px]">
                    <TanstackTable children={children} data={data?.length ? data : []} columns={columnData} setPageSize={setPageSize} setCurrentPageNum={setCurrentPageNum}
                        hideSearch={hideSearch} hidePagination={hidePagination} totalCount={totalCount} setCurrentPage={setCurrentPage} limit={limit} setLimit={setLimit} />

                </div>
                <div>
                    {hidePagination  ? '' :
                        <div className='flex justify-between mt-9 font-primary text-base text-[18px] font-medium text-[#484848]'>
                            <div className="absolute bottom-8 ">
                                Show {(limit * currentPage + 1) - limit} to {limit * currentPage > totalCount ? totalCount : limit * currentPage} of {totalCount} entries
                            </div>
                            <div className="absolute bottom-8 right-11 flex gap-2 items-center">
                                <button
                                    disabled={currentPage === 1}
                                    className={`border-none outline-none cursor-pointer ${currentPage === 1 ? "text-[#C3C3C3]" : ""} `}
                                    onClick={() => {
                                        handlePreviousBtn();
                                        setCurrentPage((prev) => prev - 1)
                                        setCurrentPageNum((prev) => prev - 1)
                                    }}
                                >
                                    Previous
                                </button>
                                {array?.length && array?.slice(0, 5)?.map((item, index) => {
                                    return (
                                        <div key={index} className={`h-8 w-8 rounded-sm text-center py-1 ${currentPage === item ? 'bg-[#2E90EF33]' : ''} `}>
                                            <button onClick={() => {
                                                setCurrentPage(item)
                                                setCurrentPageNum(item)
                                            }}
                                                className={`active:font-semibold ${currentPage === item ? 'text-[#2E90EF]' : ''} `}>{item}</button>
                                        </div>
                                    );
                                })}
                                <button
                                    disabled={currentPage === Math.ceil(totalCount / limit)}
                                    className={`border-none outline-none cursor-pointer ${currentPage === Math.ceil(totalCount / limit) ? "text-[#C3C3C3]" : ""} `}
                                    onClick={() => {
                                        handleNextBtn();
                                        setCurrentPage((prev) => prev + 1)
                                        setCurrentPageNum((prev) => prev + 1)
                                    }}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    }
                </div>
                {/* : ""
                } */}
            </div>
        </>
    );

}

export default ListComponent;