import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from 'components/Header'
import { getSession } from 'next-auth/react'
import Login from 'components/Login'
import Sidebar from 'components/Sidebar'
import Feed from 'components/Feed'
import Widgets from 'components/Widgets'
// import { db } from 'firebase';
const inter = Inter({ subsets: ['latin'] })

export default function Home(
  // {session,posts}
) {
  // if (!session) return <Login />;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden '>
      <Head>
        <title>My Social Book</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed
        // posts={posts} 
        />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  )
}
export async function getServerSideProps(context) {
  //get the user
  const session = await getSession(context);
  // const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  // const docs = posts.docs.map(post => ({
  //   id: post.id,
  //   ...post.data(),
  // timestamp: null,
  // }));
  return {

    props: {
      session
    }
  }
}
