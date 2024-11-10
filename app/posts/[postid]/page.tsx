import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";

type ShowPostsProps = {
    params: {
        postid: string;
    };
};
export default async function PostDetailsPage(props:ShowPostsProps){

    const postId = props.params.postid;

    const loading = (<div>
        <h1>Loading . . . fuck you</h1>
    </div>)
    return(
    <div>
        <h1> Post Details</h1>
            <Suspense fallback={loading}>
                <PostDetails postId={postId}/>
            </Suspense>
    </div>
    )
}