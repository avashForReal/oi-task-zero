import Post from './Post'


const Posts = ({posts}) => {
    return (
        <div className="flex justify-center flex-wrap items-center">
            {
                posts.map((post)=>(
                    <Post post={post}/>
                ))
            }
        </div>
    )
}

export default Posts
