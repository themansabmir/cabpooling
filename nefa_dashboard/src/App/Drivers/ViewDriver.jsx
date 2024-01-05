import {
  collection,
  doc,
  getDoc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/firebaseconfig";
import { DB_ENUM } from "../../DbEnum";
import { getDocumentById } from "../../util/util";
import {
  useCollection,
  useCollectionDataOnce,
  useCollectionOnce,
} from "react-firebase-hooks/firestore";

export const ViewDriver = () => {
  const { driverId } = useParams();
  const subCategorytable = collection(db, DB_ENUM.SUBCATEGORY_DB);

  const [driverDetails, setDetails] = useState("");
  const [loading, setLoading] = useState(true);

  const [subCategoryId, setSubCategoryId] = useState("");

  const customQuery = query(subCategorytable, where("isActive", "==", true));

  const [data, isLoading, iserror] = useCollectionOnce(customQuery, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const updateDriverVerification = (driverId, currentState) => {
    const driverRef = doc(db, DB_ENUM.DRIVER_DB, driverId);
    updateDoc(driverRef, {
      isVerified: !currentState,
      subcategory: subCategoryId,
    });
  };

  console.log(driverDetails);

  console.log(data);

  useEffect(() => {
    getDocumentById(DB_ENUM.DRIVER_DB, driverId).then((res) => {
      if (res) {
        setDetails(res);
        setLoading(false);
      }
    });
  }, []);
  if (loading) return "loading";
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold">Driver Details</h1>
        <div>
          <h1>{driverDetails.name}</h1>
          <h1>{driverDetails.email}</h1>
          <h1>{driverDetails.number}</h1>
          <h1>{driverDetails.emergencyNumber}</h1>
          <h1>
            <img src={driverDetails.imageurl} alt="" />
          </h1>
          <h1>{driverDetails.isActive}</h1>
          <h1>{driverDetails.isVerified}</h1>
          <h1>{driverDetails.street}</h1>

          <h1>{driverDetails.state}</h1>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Vehicle Details</h1>
        <div>
          <div>
            <p>Adhar</p>
            <img src={driverDetails.aadharCard} alt="" />
          </div>
          <div>
            <p>Adhar</p>
            <img src={driverDetails.aadharCard} alt="" />
          </div>
          <div>
            <p>Adhar</p>
            <img src={driverDetails.aadharCard} alt="" />
          </div>
          <div>
            <p>Adhar</p>
            <img src={driverDetails.aadharCard} alt="" />
          </div>
          <div>
            <p>Adhar</p>
            <img src={driverDetails.aadharCard} alt="" />
          </div>
          <div>
            <p>Adhar</p>
            <img src={driverDetails.aadharCard} alt="" />
          </div>
          <div>
            <p>Adhar</p>
            <img src={driverDetails.aadharCard} alt="" />
          </div>

          <select
            name="subcategoryId"
            onChange={(e) => setSubCategoryId(e.target.value)}
          >
            <option value="">Select Vehcile Category</option>
            {!isLoading &&
              data.docs.map((subcategory) => {
                const subcategoryData = {
                  ...subcategory.data(),
                  subcategoryId: subcategory.id,
                };
                return (
                  <option value={subcategoryData.subcategoryId}>
                    {" "}
                    {subcategoryData.name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>

      <div className="mt-10 flex gap-2">
        <button
          onClick={() => {
            updateDriverVerification(driverId, driverDetails.isVerified);
          }}
          disabled={subCategoryId ? false : true}
        >
          Approve
        </button>
        <button>Reject</button>
      </div>
    </div>
  );
};
