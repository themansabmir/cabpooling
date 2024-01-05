import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";

const TanstackTable = ({
    data,
    columns,
    setPageSize,
    setCurrentPageNum,
    hidePagination,
    hideSearch,
    setCurrentPage,
    limit,
    setLimit,
    children
}) => {
    let dataLimitArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    const [sorting, setSorting] = useState([]);
    const [filter, setFilter] = useState("");

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),

        state: {
            globalFilter: filter,
            sorting: sorting,
        },

        onGlobalFilterChange: setFilter,
        onSortingChange: setSorting,
    });

    return (
        <>
            <div className="w-full bg-white">
                <div className="bg-white h-9 mb-4 flex justify-between items-center">
                    {hideSearch ? (
                        ""
                    ) : (
                        <div className="h-full 2xl:w-[399px] border border-[#8F98A8] rounded-3xl py-2 px-4 flex justify-between items-center">
                            <input
                                type="text"
                                value={filter}
                                className="w-full h-full font-secondary outline-none  "
                                placeholder="Search"
                                onChange={(e) => setFilter(e.target.value)}
                                name="Search"
                                id="Search"
                            />
                            <div>
                                {/* <img src={SearchIcon} /> */}
                            </div>
                        </div>
                    )}
                    <div className="h-full flex gap-2">
                    {children ? children : null}
                        <div>
                            <button className="border flex items-center gap-2 p-1 px-4 rounded">
                                <p className="text-base font-primary">Download</p>
                                <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_260_991)">
                                        <path d="M28 4H14.87L8 10.86V15H10V13.61H17.61V6H28V30H8C8 30.5304 8.21071 31.0391 8.58579 31.4142C8.96086 31.7893 9.46957 32 10 32H28C28.5304 32 29.0391 31.7893 29.4142 31.4142C29.7893 31.0391 30 30.5304 30 30V6C30 5.46957 29.7893 4.96086 29.4142 4.58579C29.0391 4.21071 28.5304 4 28 4ZM16 12H10V11.68L15.7 6H16V12Z" fill="#3AAFA6" />
                                        <path d="M11.94 26.28C11.8353 26.3697 11.7503 26.48 11.6903 26.6041C11.6303 26.7281 11.5965 26.8633 11.5912 27.001C11.5859 27.1387 11.6091 27.276 11.6594 27.4044C11.7096 27.5327 11.7859 27.6492 11.8833 27.7467C11.9808 27.8442 12.0974 27.9204 12.2257 27.9707C12.354 28.021 12.4913 28.0442 12.6291 28.0388C12.7668 28.0335 12.9019 27.9998 13.026 27.9398C13.15 27.8798 13.2604 27.7947 13.35 27.69L19 22L13.32 16.32C13.1287 16.1562 12.8826 16.0706 12.6309 16.0803C12.3793 16.0901 12.1405 16.1944 11.9624 16.3725C11.7843 16.5506 11.68 16.7893 11.6703 17.041C11.6606 17.2927 11.7462 17.5387 11.91 17.73L15.2 21H3C2.73478 21 2.48043 21.1054 2.29289 21.2929C2.10536 21.4805 2 21.7348 2 22C2 22.2653 2.10536 22.5196 2.29289 22.7072C2.48043 22.8947 2.73478 23 3 23H15.23L11.94 26.28Z" fill="#3AAFA6" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_260_991">
                                            <rect width="36" height="36" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white text-[#333333]">
                    <table className="w-full">
                        <thead className="font-primary font-normal text-lg">
                            {data &&
                                table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id} className="">
                                        {headerGroup.headers.map((header) => (
                                            <th
                                                key={header.id}
                                                onClick={header.column.getToggleSortingHandler()}
                                                className=" font-semibold p-4 text-start"
                                            >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {
                                                    { asc: "🔼", desc: "🔽" }[
                                                    header.column.getIsSorted() ?? null
                                                    ]
                                                }
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                        </thead>
                        <tbody className="border font-primary">
                            {table.getRowModel().rows.map((row) => (
                                <tr
                                    key={row.id}
                                    style={{ 'borderRadius': '5px, 0px, 0px, 5px' }}
                                    className="border-b border-gray hover:border-l-8 border-l-[#49c1b7] border-l-8 hover:border-l-[#fcad47]
                                    hover:shadow-xl hover:shadow-[#2E90EF1C] hover:rounded-l-lg cursor-pointer py-6 "
                                >
                                    {row.getVisibleCells().map((cell, i) => (
                                        <td
                                            key={cell.id}
                                            className={
                                                i === 1 ? "text-[#49c1b7] font-medium" : "py-2 font-normal px-4"
                                            }
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default TanstackTable;
