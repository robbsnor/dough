import { Supabase } from './supabase';
import { downloadFileFromBlob } from './util';

const sb = new Supabase;

sb.getFile('images', '1.jpg').then((file) => {    
    // downloadFileFromBlob(file.data, file.fileName)
    console.log(file);
    
    const imgEl = document.getElementById('image') as HTMLImageElement;
    imgEl.src = file.path;
})


const file = document.getElementById('file') as HTMLInputElement;
const uploadButton = document.getElementById('upload') as HTMLButtonElement;

uploadButton.addEventListener('click', () => {
    console.log(file.files[0]);

    sb.uploadFile('images', file.files)
})