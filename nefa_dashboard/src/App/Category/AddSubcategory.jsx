import { addDoc, collection, doc, getDoc, query } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { useUploadFile } from "react-firebase-hooks/storage";
import { db } from "../../Firebase/firebaseconfig";
import { storage } from "../../Firebase/firebaseconfig";
import { handleChange } from "../../util/util";
import { DB_ENUM } from "../../DbEnum";

/*
@author 
*/

export const AddSubcategory = () => {
  const categoryTable = collection(db, DB_ENUM.CATEGORY_DB);
  const subCategorytable = collection(db, DB_ENUM.SUBCATEGORY_DB);

  const [value, loading, error] = useCollection(categoryTable, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const [data, isLoading, iserror] = useCollection(subCategorytable, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const fetcheddata = !isLoading
    ? Promise.all(
        data?.docs.map(async (document) => {
          const subcategory = document.data();

          const categoryRef = doc(db, DB_ENUM.CATEGORY_DB, subcategory.categoryId);
          const category = await getDoc(categoryRef);

          return { ...subcategory, category: { ...category.data() } };
        })
      ).then((res) => console.log(res))
    : "";

  const [file, setFile] = useState("");
  const [uploadUrl, setUploadUrl] = useState();
  const [subCategoryData, setSubcategoryData] = useState({
    name: "",
    categoryId: "",
    description: "",
    capacity: "",
    basePrice: "",
    costPerKM: "",
    costPerMin: "",
    imageUrl: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const storageRef = ref(storage, `icons/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((fileUrl) => {
          setUploadUrl(fileUrl);

          addDoc(subCategorytable, {
            ...subCategoryData,
            imageUrl: fileUrl,
          }).then((res) => console.log(res.id));
        });
      }
    );
  };

  if (loading) return "loading";
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor=""> Select Category</label>
          <select
            name="categoryId"
            id=""
            onChange={(e) =>
              handleChange(e, subCategoryData, setSubcategoryData)
            }
          >
            <option value=""> Select Category</option>
            {value &&
              value.docs.map((doc) => {
                return <option value={doc.id}> {doc.data().name}</option>;
              })}
          </select>
        </div>

        <div>
          <label htmlFor="">Sub Category Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) =>
              handleChange(e, subCategoryData, setSubcategoryData)
            }
          />
        </div>

        <div>
          <label htmlFor="">Description </label>
          <input
            type="text"
            name="description"
            onChange={(e) =>
              handleChange(e, subCategoryData, setSubcategoryData)
            }
          />
        </div>

        <div>
          <label htmlFor="">Image </label>
          <input
            type="file"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
            accept="image/*"
          />
        </div>
        <div>
          <label htmlFor="">Capacity </label>
          <input
            type="text"
            name="capacity"
            onChange={(e) =>
              handleChange(e, subCategoryData, setSubcategoryData)
            }
          />
        </div>

        <div>
          <label htmlFor="">Base Price </label>
          <input
            type="text"
            name="basePrice"
            onChange={(e) =>
              handleChange(e, subCategoryData, setSubcategoryData)
            }
          />
        </div>

        <div>
          <label htmlFor="">Cost per KM </label>
          <input
            type="text"
            name="costPerKM"
            onChange={(e) =>
              handleChange(e, subCategoryData, setSubcategoryData)
            }
          />
        </div>

        <div>
          <label htmlFor="">Price per Minute </label>
          <input
            type="text"
            name="costPerMin"
            onChange={(e) =>
              handleChange(e, subCategoryData, setSubcategoryData)
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
