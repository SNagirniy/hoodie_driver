import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable, uploadString } from "firebase/storage";
import { v4 } from "uuid";


export const getImageRef = async ()=> {
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


export const uploadCustomLogo = async(file, filename)=> {

const id = v4();
const uniqueFileName = `${id}-${filename}`;
const storageRef = ref(storage, `userlogo/${uniqueFileName}`);
const uploadTask = await uploadBytesResumable(storageRef, Buffer.from(file, 'base64'));

const downloadURL = await getDownloadURL(uploadTask?.ref);

return downloadURL;
}

