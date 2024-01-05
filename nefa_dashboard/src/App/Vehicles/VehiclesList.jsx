import { useEffect, useState } from "react";
import ListComponent from "../../Common/List/List";
import Car from "../../assets/images/car.jpg"

const Vehicles = ({ setComponentName }) => {

    const [pageSize, setPageSize] = useState(10);
    const [CurrentPageNum, setCurrentPageNum] = useState(1);

    const data = [
        {
            modal: "Maruti SUV 800",
            driverName: "Joy Frenk",
            type: "SUV",
            purchase: "23 June 2017",
            capacity: "5 person"
        },
        {
            modal: "Maruti SUV 800",
            driverName: "Joy Frenk",
            type: "SUV",
            purchase: "23 June 2017",
            capacity: "5 person"
        },
        {
            modal: "Maruti SUV 800",
            driverName: "Joy Frenk",
            type: "SUV",
            purchase: "23 June 2017",
            capacity: "5 person"
        },
        {
            modal: "Maruti SUV 800",
            driverName: "Joy Frenk",
            type: "SUV",
            purchase: "23 June 2017",
            capacity: "5 person"
        },
        {
            modal: "Maruti SUV 800",
            driverName: "Joy Frenk",
            type: "SUV",
            purchase: "23 June 2017",
            capacity: "5 person"
        },
        {
            modal: "Mahindra Thar",
            driverName: "Joy Frenk",
            type: "Thar",
            purchase: "23 June 2017",
            capacity: "5 person"
        },
        {
            modal: "Mahindra Thar",
            driverName: "Joy Frenk",
            type: "Thar",
            purchase: "23 June 2017",
            capacity: "5 person"
        },
        {
            modal: "Mahindra Thar",
            driverName: "Joy Frenk",
            type: "Thar",
            purchase: "23 June 2017",
            capacity: "5 person"
        },
        {
            modal: "Mahindra Thar",
            driverName: "Joy Frenk",
            type: "Thar",
            purchase: "23 June 2017",
            capacity: "5 person"
        },
    ]

    const columns = [
        {
            header: "",
            accessorKey: "name",
            cell: ({ row }) => (
                <td>
                    <img src={Car} className="pt-1 rounded-full h-[45px] w-[45px] object-fill" />
                </td>
            )
        },
        {
            header: "Vehicle Model",
            accessorKey: "modal",
        },
        {
            header: "Driver Name",
            accessorKey: "driverName",
        },
        {
            header: "Type",
            accessorKey: "type",
        },
        {
            header: "Purchase Date",
            accessorKey: "purchase",
        },
        {
            header: "Seating Capacity",
            accessorKey: "capacity",
        },
        {
            header: "Actions",
            accessorKey: "",
            cell: ({ row }) => (
                <div className="flex gap-2 justify-start">
                    <button
                        name="View"
                    >
                        <svg width="24" height="23" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.927 16.4866C32.927 25.3094 25.6744 32.4733 16.7135 32.4733C7.75257 32.4733 0.5 25.3094 0.5 16.4866C0.5 7.66388 7.75257 0.5 16.7135 0.5C25.6744 0.5 32.927 7.66388 32.927 16.4866Z" stroke="#F58B02" />
                            <path d="M16.7141 19.2205C18.0987 19.2205 19.2211 18.0981 19.2211 16.7135C19.2211 15.3289 18.0987 14.2065 16.7141 14.2065C15.3295 14.2065 14.207 15.3289 14.207 16.7135C14.207 18.0981 15.3295 19.2205 16.7141 19.2205Z" fill="#F58B02" />
                            <path d="M25.0377 16.5327C24.3825 14.9148 23.2449 13.5156 21.7656 12.5081C20.2863 11.5006 18.5301 10.929 16.7142 10.8638C14.8982 10.929 13.1421 11.5006 11.6628 12.5081C10.1835 13.5156 9.04589 14.9148 8.39061 16.5327C8.34636 16.6495 8.34636 16.7775 8.39061 16.8943C9.04589 18.5122 10.1835 19.9114 11.6628 20.9189C13.1421 21.9264 14.8982 22.498 16.7142 22.5632C18.5301 22.498 20.2863 21.9264 21.7656 20.9189C23.2449 19.9114 24.3825 18.5122 25.0377 16.8943C25.082 16.7775 25.082 16.6495 25.0377 16.5327ZM16.7142 20.1702C15.9979 20.1702 15.2978 19.9674 14.7023 19.5876C14.1067 19.2078 13.6426 18.6679 13.3685 18.0363C13.0944 17.4047 13.0227 16.7097 13.1624 16.0391C13.3021 15.3686 13.647 14.7527 14.1535 14.2693C14.6599 13.7858 15.3052 13.4566 16.0077 13.3233C16.7102 13.1899 17.4383 13.2583 18.1 13.52C18.7617 13.7816 19.3273 14.2246 19.7252 14.7931C20.1232 15.3615 20.3355 16.0298 20.3355 16.7135C20.3341 17.6298 19.9521 18.5082 19.2732 19.1562C18.5944 19.8041 17.6742 20.1687 16.7142 20.1702Z" fill="#F58B02" />
                        </svg>
                    </button>
                    <button name="update">
                        <svg width="24" height="23" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.3548 16.4866C33.3548 25.3094 26.1022 32.4733 17.1412 32.4733C8.1803 32.4733 0.927734 25.3094 0.927734 16.4866C0.927734 7.66388 8.1803 0.5 17.1412 0.5C26.1022 0.5 33.3548 7.66388 33.3548 16.4866Z" stroke="#08A99C" />
                            <path d="M15.4691 9.89201H13.1292C12.1933 9.89201 11.7253 9.89201 11.3676 10.0717C11.0531 10.2297 10.7974 10.4819 10.6373 10.7922C10.4551 11.145 10.4551 11.6066 10.4551 12.5299V20.4435C10.4551 21.3667 10.4551 21.8283 10.6373 22.1811C10.7975 22.4913 11.0532 22.7435 11.3676 22.9016C11.7245 23.0813 12.1924 23.0813 13.1267 23.0813H21.1542C22.0885 23.0813 22.5557 23.0813 22.9125 22.9016C23.2275 22.7433 23.4833 22.4911 23.6437 22.1811C23.8259 21.8283 23.8259 21.3675 23.8259 20.4459V18.1353M20.4832 10.7163L15.4691 15.6623V18.1353H17.9762L22.9902 13.1893M20.4832 10.7163L22.9902 8.24335L25.4972 10.7163L22.9902 13.1893M20.4832 10.7163L22.9902 13.1893" stroke="#08A99C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button
                        name="delete"
                    >
                        <svg width="24" height="23" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.7825 16.4866C33.7825 25.3094 26.5299 32.4733 17.569 32.4733C8.60804 32.4733 1.35547 25.3094 1.35547 16.4866C1.35547 7.66388 8.60804 0.5 17.569 0.5C26.5299 0.5 33.7825 7.66388 33.7825 16.4866Z" stroke="#F3223C" />
                            <path d="M12.8223 21.1688L17.5688 16.4866L22.3154 21.1688M22.3154 11.8045L17.5679 16.4866L12.8223 11.8045" stroke="#F3223C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            ),
        },
    ];

    useEffect(() => {
        setComponentName("Vehicles");
    }, [])
    return (
        <div>
            <ListComponent
                // heading={"All Vehicles"}
                data={data}
                columnData={columns}
                setPageSize={setPageSize}
                setCurrentPageNum={setCurrentPageNum}
                totalCount={20}
            />
        </div>
    );
}

export default Vehicles;