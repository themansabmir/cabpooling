import { collection, doc, query, updateDoc, where } from "firebase/firestore";
import React from "react";
import { db } from "../../Firebase/firebaseconfig";
import {
  useCollection,
  useCollectionDataOnce,
  useCollectionOnce,
} from "react-firebase-hooks/firestore";
import ListComponent from "../../Common/List/List";
import { useNavigate } from "react-router-dom";
import { DB_ENUM } from "../../DbEnum";

export const PendingDrivers = () => {
    const navigate = useNavigate()
  const driverTable = collection(db, DB_ENUM.DRIVER_DB);
  const customQuery = query(driverTable, where("isVerified", "==", false), where("isDelete", "==" , false));
  const [value, loading, error] = useCollectionOnce(customQuery, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  console.log(value);


  const columns = [
    {
      header: "S.no",
      accessorKey: "id",
      cell: ({ row }) => <p>{row.index + 1}</p>,
    },
    {
      header: "Avatar",
      accessorKey: "imageUrl",
      cell: ({ row }) => {
        const imageUrl = row.original.imageurl;
        return (
          <div className=" ">
            <img src={imageUrl} alt="" height={"70px"} width={"100px"} />
          </div>
        );
      },
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Number",
      accessorKey: "number",
    },
    {
      header: "State",
      accessorKey: "state",
    },

    {
      header: "Activate",
      accessorKey: "isActive",
    },
    {
      header: "Verfied",
      accessorKey: "isVerified",
    },
    {
      header: "Actions",
      accessorKey: "actions", 
      cell:({row})=>{ 
        const {id}= row.original
     return    <div>
        <button onClick={()=> navigate(`/viewdriver/${id}`)}>view</button>

        </div>
      }
    },
  ];
  if (loading) return "loading";
  return (
    <div>
      {loading === false && (
        <ListComponent
          data={
            value
              ? value.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
              : []
          }
          columnData={columns}
          totalCount={20}
        />
      )}
    </div>
  );
};
