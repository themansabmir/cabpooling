import { useEffect, useState } from "react";
import ListComponent from "../../Common/List/List";

export const Dropdown = () => {
    return (
        <select className="border w-full focus:border-[#49c1b7] rounded focus:outline-0 font-primary text-base bg-white text-black font-normal p-2 px-4 h-full">
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
        </select>
    );
}

const Trips = ({ setComponentName }) => {

    const [pageSize, setPageSize] = useState(10);
    const [CurrentPageNum, setCurrentPageNum] = useState(1);

    useEffect(() => {
        setComponentName("Trips");
    }, [])

    const data = [
        {
            "tripId": "ID234",
            "DriverName": "John Smith",
            "PassangerName": "Kevin Wilson",
            "tripFrom": "34, Alax street",
            "tripTo": "99 Myrtle Dr.Long Branch",
            "startTime": "12:24",
            "endTime": "1:24",
            "distance": "4.5 KM",
            "fare": "$20",
            "status": "Completed"
        },
        {
            "tripId": "ID244",
            "DriverName": "William Miller",
            "PassangerName": "Nancy Clark",
            "tripFrom": "34, Alax street",
            "tripTo": "99 Myrtle Dr.Long Branch",
            "startTime": "12:24",
            "endTime": "",
            "distance": "",
            "fare": "",
            "status": "Active"
        },
        {
            "tripId": "ID254",
            "DriverName": "Daniel Davis",
            "PassangerName": "Lisa Scott",
            "tripFrom": "34, Alax street",
            "tripTo": "99 Myrtle Dr.Long Branch",
            "startTime": "12:24",
            "endTime": "1:24",
            "distance": "4.5 KM",
            "fare": "$20",
            "status": "Completed"
        },
        {
            "tripId": "ID264",
            "DriverName": "Kevin Miller",
            "PassangerName": "Sarah k",
            "tripFrom": "34, Alax street",
            "tripTo": "99 Myrtle Dr.Long Branch",
            "startTime": "12:24",
            "endTime": "",
            "distance": "",
            "fare": "",
            "status": "Active"
        },
    ]

    const columns = [
        {
            header: "Trip ID",
            accessorKey: "tripId",
        },
        {
            header: "Driver Name",
            accessorKey: "DriverName",
        },
        {
            header: "Passanger Name",
            accessorKey: "PassangerName",
        },
        {
            header: "Trip From",
            accessorKey: "tripFrom",
        },
        {
            header: "Trip To",
            accessorKey: "tripTo",
        },
        {
            header: "Start Time",
            accessorKey: "startTime",
        },
        {
            header: "End Time",
            accessorKey: "endTime",
        },
        {
            header: "Distance",
            accessorKey: "distance",
        },
        {
            header: "Fare",
            accessorKey: "fare",
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: ({ row }) => (
                <span className={`${row?.original?.status === "Active" ? "text-[#fcad47]" : "text-[#49c1b7]"} font-medium`}>{row?.original?.status} </span>
            ),
        },
    ];



    return (
        <div>
            <ListComponent
                // heading={"All Trips"}
                data={data}
                columnData={columns}
                setPageSize={setPageSize}
                setCurrentPageNum={setCurrentPageNum}
                totalCount={20}
                children={<Dropdown/>}
            />
        </div>
    );
}
export default Trips;