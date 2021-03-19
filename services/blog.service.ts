import firebase from "firebase";
const db = firebase.firestore();

export const getListBlogs = (observer: any) => {
  return db.collection("blogs").onSnapshot(observer);
};

export const getBlogDetail = (id: string, observer: any) => {
  return db.collection("blogs").doc(id).onSnapshot(observer);
};
