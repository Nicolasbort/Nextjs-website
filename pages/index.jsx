import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import homeStyles from '../styles/index.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  const [ session, loading ] = useSession()


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>


      {
      !session && <>
      Not signed in <br/>
      <button onClick={() => signIn("auth0")}>Sign in</button>
      </>
      }
      {
      session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
      </>
      }

      <div className={`${homeStyles.background_img} text-white`}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Blog</h1>
                        <hr className={`${homeStyles.blog_hr} mb-1`}/>
                        <p className="">Lorem ipsum dolor sit</p>
                        <Link href="/cadastrar">
                            <a className="btn btn-green btn-lg anchor-link" title="">Cadastrar-se</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

      <div className="container h-100">
        <div className="row my-3">

          <div className="col-10">
              <div className="row p-3 rounded shadow-lg mx-1">
              {
                allPostsData.map( ({ id, date, title, body }) => (
                  <div className="col-12 p-1">
                    <div className="bg-light p-3 shadow-lg position-relative">
                      <Link href={`/post/${id}`}>
                        <a className="text-decoration-none text-dark fw-bold fs-5">{title}</a>
                      </Link>
                      <p className={`${homeStyles.post_body} my-4`}>{body}</p>
                      <span className={homeStyles.span_date}>{date}</span>
                      <Link href={`/post/${id}`}>
                        <a className={`btn btn-green ${homeStyles.btn_read_more}`}>Ler mais...</a>
                      </Link>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="col-2">
              <div className="row p-3 rounded shadow-lg">
                Teste
              </div>
          </div>

        </div>
      </div>

    </Layout>
  )
}
