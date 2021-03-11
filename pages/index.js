import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>next.js-tutorial</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>toki</p>
        <p>
          tokiです。
        </p>
      </section>
    </Layout>
  )
}