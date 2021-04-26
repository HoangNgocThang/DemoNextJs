import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout.js'

export default function FirstPost() {

  const onClick = () => {
    alert('a')
  }

  return (
    <Layout>
      <Head>
        <title>FirstPost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>An Unordered HTML List</h2>

      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>

      <h2>An Ordered HTML List</h2>

      <ol>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>

      <button onClick={onClick}>Click Me!</button>

      {/* <img src="/images/profile.jpg" alt="Your Name" /> */}

      <Image
        src="/images/profile.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />

      <h2>
        <Link href="/">
          <a style={{ color: 'blue' }}>Back to home</a>
        </Link>
      </h2>

      <h2 className="title">
        <Link href="https://nextjs.org" >
          <a style={{ color: 'blue' }}>Learn Next.js!</a>
        </Link>
      </h2>

    </Layout>
  )
}