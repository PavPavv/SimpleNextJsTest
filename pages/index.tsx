import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

//  ui
import Layout from '../components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <>
        <main>
          <h1>
            Main page
          </h1>
          <nav>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </nav>
        </main>
      </>
    </Layout>
  )
}

export default Home
