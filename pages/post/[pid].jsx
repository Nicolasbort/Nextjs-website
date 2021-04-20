import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>

      <div className="container my-2">
        <div className="row">
          <div className="col-12">
            <div className="shadow-lg p-2 rounded gb-light">
              Post: {pid}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
  
  // return <p>Post: {pid}</p>
}

export default Post