import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yatudmtuaqqtmlmktuik.supabase.co';

export class Supabase {
    public supabase = createClient(supabaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyNzM5NzYwLCJleHAiOjE5NTgzMTU3NjB9.z8xzQAQiS4ixqbwrMqyD-iiMGl9iZPnaTVeN0vHbqys')

    public generateBucket = async (name: string) => {
        const { data, error } = await this.supabase.storage.createBucket(name);
    
        if (error) console.log(error);
        console.log(data);
    }
    
    public getFile = async (bucket: string, fileName: string, folder = '') => {
        const { data, error } = await this.supabase.storage
            .from(bucket)
            .download(folder + fileName)
    
        if (error) console.log(error);

        return {
            name: fileName,
            path: `${supabaseUrl}/storage/v1/object/public/${bucket}/${fileName}`,
            blob: data
        }
    }

    public getAllFilesFromBucket = async (
        bucket: string, 
        folder = '',
        options = {
            limit: 100,
            offset: 0,
            sortBy: { column: 'name', order: 'asc' },
        }
    ) => {
        const { data, error } = await this.supabase
            .storage
            .from(bucket)
            .list(folder, options)

        if (error) console.log(error);

        return data
    }
    
    public uploadFile = async (bucket: string, file: FileList, folder = '') => {
        const name = file[0].name;
        
        const { data, error } = await this.supabase.storage
            .from(bucket)
            .upload(`${folder}${name}`, file[0])
    
        if (error) console.log(error);

        return data        
    }
}
 