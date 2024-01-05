import React, { useState } from "react";
import { handleChange } from "../../util/util";
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseconfig";
import { useCollection } from "react-firebase-hooks/firestore";

export const AddCategory = () => {
  const categoryTable = collection(db, "category");
  const [value, loading, error] = useCollection(categoryTable, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
    isActive: false,
    isDelete: false,
  });

  const submitHandller = async (e) => {
    e.preventDefault();

    const newDoc = await addDoc(categoryTable, categoryData);
    if (newDoc?.id) {
      setCategoryData({
        name: "",
        description: "",
        isActive: false,
        isDelete: false,
      });
    }
  };

  return (
    <div>
      <form onSubmit={submitHandller}>
        <input
          type="text"
          required
          name="name"
          value={categoryData.name}
          onChange={(e) => handleChange(e, categoryData, setCategoryData)}
        />
        <input
          type="text"
          name="description"
          onChange={(e) => handleChange(e, categoryData, setCategoryData)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
