import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseconfig";

export const handleChange = (event, oldData, setterFunc) => {
  const { name, value } = event.target;
  const data = { ...oldData };
  data[name] = value;
  setterFunc(data);
};

export const uploadFile = async (uploadFn, reference, file) => {
  try {
    const uploadResponse = await uploadFn(reference, file);
    return uploadResponse;
  } catch (error) {
    return error;
  }
};

export const getDocumentById = async (table, docId) => {
  const docRef = doc(db, table, docId);
  const docData = await getDoc(docRef);
  if (docData.exists) {
    return docData.data();
  }
  return "";
};
