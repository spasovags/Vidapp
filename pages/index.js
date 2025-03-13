import Head from 'next/head'
import CardList from '../components/CardList'
import useSWR from 'swr'
import Footer from '../components/Footer'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {

  const { data, error } = useSWR('/api/staticdata', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const techno = JSON.parse(data)

  return (
    <>
    <main>
      <Head>
        <title>Spasova</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,100,1,200" rel="stylesheet" /> 
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />

     </Head>
      
      <CardList technologies={techno}/>
      <Footer/>
    </main>
    </>
  )
}