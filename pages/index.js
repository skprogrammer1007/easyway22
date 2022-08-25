import Head from 'next/head'
import Features from '../components/home/Features'
import ServiceContainer from '../components/home/ServiceContainer'
import Slider from '../components/home/Slider'
import TopBar from '../components/home/TopBar'
import Category from '../components/home/Category'
import HomeFooter from '../components/home/HomeFooter'
import Offer from '../components/home/Offer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <TopBar />
        <hr className='my-2' />
        <Slider />
        <hr className='my-2' />
        <Category />
        <hr className='my-2' />
        <Features />
        <Offer/>
        <HomeFooter />
      </main>
    </div>
  )
}
