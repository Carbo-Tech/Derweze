import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { idContract } = router.query

  return <p>Post: {idContract}</p>
}

export default Post
