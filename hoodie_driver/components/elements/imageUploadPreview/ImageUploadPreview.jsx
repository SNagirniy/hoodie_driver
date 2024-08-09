"use client"
import s from './image_upload_preview.module.scss';
import { useState } from 'react';
import Close from '../../../public/close.svg';


const ImageUploadPreview =()=> {
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileInputKey, setFileInputKey] = useState(Date.now());
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file && (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/webp')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
        setSelectedFile(file);
      } else {
        alert('Please upload a valid image file (JPEG, JPG, WEBP).');
      }
    };
  
    const handleRemoveImage = () => {
      setImagePreview(null);
      setSelectedFile(null);
      setFileInputKey(Date.now()); // Оновлення ключа для очищення інпуту
    };
  
    return (
      <div className={s.container}>
        <label className={s.logo_label}>
        <input
        className={s.input}
          key={fileInputKey} // Унікальний ключ для оновлення інпуту
          type="file"
          accept="image/jpeg,image/jpg,image/webp"
          onChange={handleImageUpload}
          disabled={selectedFile !== null}
          placeholder='file'
        /> Завантажити лого</label>
        {imagePreview && (

          <div className={s.preview}>
            <img
              src={imagePreview}
              alt="Preview"
            />
            <button className={s.delete_button} onClick={handleRemoveImage}><Close className={s.close_btn}/></button>
          </div>
          

        )}
      </div>
    );
  }

export default ImageUploadPreview;