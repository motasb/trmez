import Link from "next/link";

export default async function Posts(){
    const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    const postJSX = posts.map((post)=>{
      return(
        <Link href={`/posts/${post.id}`} style={{width :"70%" ,
          background: "black" ,
          padding:"10px" ,
          borderRadius: "10px" ,
          color:"white",
          marginTop : "20px"}}>
          <div >
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
          </Link>
      );
    });
    return(
    <div>
        <h1>Posts</h1>
        <div style={{display : "flex" , justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          {postJSX}
        </div>
    </div> 
    )
}