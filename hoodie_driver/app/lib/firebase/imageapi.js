import { storage } from "./firebase";
import { ref, getDownloadURL } from "firebase/storage";


const getImageRef = async ()=> {
    let path
    const spaceRef = ref(storage);
  const imageRef = ref(spaceRef, 'hoodie/hoodie.jpg');

  getDownloadURL(imageRef)
  .then((url) => {
    path = url
    console.log("Посилання на зображення:", url);
    return path
  })
  .catch((error) => {

    console.error("Помилка отримання посилання на зображення:", error);
  });
  

}

export default getImageRef;