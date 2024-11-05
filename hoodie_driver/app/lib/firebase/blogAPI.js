'use server'

import { db } from "./firebase";
import { collection, getDocs, addDoc , query, orderBy, limit, where, setDoc, doc,startAt, Timestamp,getDoc, updateDoc} from "firebase/firestore";

const convertDate = (sec, nanosec)=> {
const date = new Date(sec * 1000 + nanosec / 1000000);

const localDateString = date.toLocaleDateString();

return localDateString
}


export const addNewPost = async(data)=> {
const post = data.post;

    try {
        const docRef = await addDoc(collection(db, "posts"),{...post, date: Timestamp.now()});
       
        return{ ok: true, id: docRef.id}
    } catch (e) {
        return {ok: false, message: e.message}
    }
}


export const getAllPosts = async()=> {
    try {

        const querySnapshot = await getDocs(collection(db, "posts"));
        const posts = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            const date = convertDate(data.date.seconds, data.date.nanoseconds)
         const post = { id: doc.id,
        ...doc.data(), date};
        posts.push(post)
        });

        return posts
        
    } catch (error) {
        
    }
};

export const getPostById = async(postId)=> {
    try {
        const docRef = doc(db, "posts",postId);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        const date = convertDate(data.date.seconds, data.date.nanoseconds)
        console.log(date)
        const post = {...data,id: docSnap.id, date};
        return post;
            } catch (e) {
                console.log(e) 
            }

}