'use server'

import { v4 } from "uuid";
import { db } from "./firebase";
import { collection, getDocs, addDoc , query, orderBy, limit, where, setDoc, doc,startAt, Timestamp,getDoc, updateDoc} from "firebase/firestore";

const customID = () => {
    const uuid = v4(); // Генеруємо стандартний UUID
    // Перетворюємо UUID у масив байтів
    const byteArray = new Uint8Array(uuid.match(/[\da-f]{2}/gi).map((h) => parseInt(h, 16)));
    // Кодуємо у base64
    let base64UUID = btoa(String.fromCharCode.apply(null, byteArray));
    // Заміна символів, які не є URL-безпечними
    base64UUID = base64UUID.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    // Повертаємо скорочений UUID без спец символів
    return base64UUID.substring(0, 8);
  };


const addNewOrder = async(orderCred)=> {

    const data = orderCred.order;

    const orderId = customID();

    try {
        const docRef = await setDoc(doc(db, "orders", orderId), {...data, date: Timestamp.now()});
        return{ ok: true, id: orderId}
    } catch (e) {
        return {ok: false, message: e.message}
    }
}

export default addNewOrder;