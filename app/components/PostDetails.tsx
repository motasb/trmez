type ShowPostsProps = {
        postId: string;
    
};
export default async function PostDetails({postId}:ShowPostsProps){


    const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
        next:{
            revalidate: 120 ,
        },
    });
    const post = await response.json()

    return(
    <div>
        <div>
            <h1>{post.title}</h1>
        </div>
    </div>
    )
}