import Head from 'next/head'
import CardList from '../components/CardList'
import Header from '../components/Header'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {

  const { data, error } = useSWR('/api/staticdata', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const techno = JSON.parse(data)

  return (
    <>
    <Header/>
    <main>
      <Head>
        <title>G Spasova</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@500&display=swap" rel="stylesheet"/>
</Head>
      
      <CardList technologies={techno}/>
    </main>
    </>
  )
}