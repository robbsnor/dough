import { Supabase } from './supabase';
import { downloadFileFromBlob } from './util';

const sb = new Supabase;

// sb.getFile('images', 'summer.jpg', 'test/').then((file) => {    
//     downloadFileFromBlob(file.data, file.fileName)
// })

sb.getAllFilesFromBucket('images').then((files) => {
    console.log(files);
    files[0].name

    sb.getFile('images', files[0].name).then((image) => {
        console.log(image);
    })
})

const file = document.getElementById('file') as HTMLInputElement;
const uploadButton = document.getElementById('upload') as HTMLButtonElement;

uploadButton.addEventListener('click', () => {
    console.log(file.files[0]);

    sb.uploadFile('video', file.files)
})