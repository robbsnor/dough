import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://yatudmtuaqqtmlmktuik.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyNzM5NzYwLCJleHAiOjE5NTgzMTU3NjB9.z8xzQAQiS4ixqbwrMqyD-iiMGl9iZPnaTVeN0vHbqys')




interface Post {
    title: string
    content: string
}

const fetchPosts = async () => {
    const { data, error } = await supabase
        .from('posts')
        .select()

    console.log(data);
    console.log(error);

};

fetchPosts();

const setPost = async (post: Post) => {
    const { data, error } = await supabase
      .from('posts')
      .insert([
        post
      ])

}

document.getElementById('button').addEventListener('click', () => {
    const title = document.getElementById('title') as HTMLInputElement
    const content = document.getElementById('content') as HTMLInputElement
    
    setPost({title: title.value, content: content.value});

    title.value = '';
    content.value = '';
})

