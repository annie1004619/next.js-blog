import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import Alert from "../components/alert";
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from "../components/date";
import {getSortedPostsData} from '../lib/post'


export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hello, I'm <strong>Jiwon</strong>. I am a student majoring in computer science.
                    I'm very interested in developing the front end.
                    I'm currently studying next.js!</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
            <Alert type={`success`}>
                <div>
                    success alert
                </div>
            </Alert>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}