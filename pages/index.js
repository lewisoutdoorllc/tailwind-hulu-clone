import Head from 'next/head'
// import Image from 'next/image'
import Header from '../componets/Header'
import Nav from '../componets/Nav'
import Results from '../componets/Results'
import requests from '../utils/requests'
// import styles from '../styles/Home.module.css'

export default function Home(props) {
  console.log(props)
  return (
    <div>
      <Head>
        <title>HULU TailwindCSS Clone</title>
        <link rel="icon" href="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpng-5.findicons.com%2Ffiles%2Ficons%2F1253%2Fflurry_extras%2F128%2Fhulu.png&f=1&nofb=1" />
      </Head>
      {/* header */}
      <Header />
      {/* nav */}
      <Nav />
      {/* results componet section */}
      <Results />
    </div>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`
  ) .then((res) => res.json());
  return {
    props: {
      results: request.results,
    }
  }
  
}