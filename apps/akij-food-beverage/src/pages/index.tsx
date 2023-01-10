import Head from 'next/head'
import { Layout } from '~/components/layouts'
import Banner from '~/components/ui/features/Banner/Banner'
import { Footer } from '../components/ui/features/Footer'
import { Header } from '../components/ui/features/Header'
import { Hero } from '../components/ui/features/Hero'
import IntroductionSection  from '~/components/ui/features/IntroductionSection'
import { Partner } from '../components/ui/features/PartnerSection/Partner'

const Home = () => {
  return (
    <>
      <Head>
        <title>Akij Food & Beverage Ltd</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout header={<Header />} h1={'Akij Header'} footer={<Footer />}>
        <main className="min-h-screen bg-gradient-to-b">
          <Hero headingLine={'Tanvir'} ingredients={true} />
          <IntroductionSection />
          <Banner />
          <Partner />
        </main>
      </Layout>
    </>
  )
}

export default Home
