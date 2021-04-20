import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from './navbar'

const name = 'Nicolas P. Bortoluzzi'
export const siteTitle = 'Blog'

export default function Layout({ children, home }) {
  return (
    <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content={`${name}`}/>
            <meta name="description" content="Learn how to build a personal website using Next.js"/>
            <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
            <meta name="og:title" content={siteTitle} />
        </Head>

        <Navbar/>

        <main>
            {children}
        </main>
    </div>
  )
}

