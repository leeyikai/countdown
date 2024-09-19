import Head from 'next/head'
import React, { ReactElement } from 'react'

import Countdown from '../components/Countdown'

const Home = (): ReactElement => {
  return (
    <div>
      <Head>
        <title>Countdown</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="relative flex flex-col items-center justify-center bg-theme_veryDarkMostlyBlackBlue min-h-screen bg-stars">
        <h1 className="text-white text-xl lg:text-2xl text-center tracking-widest pt-20 lg:pt-0 pb-32">
          YOUR GIFT IS COMING SOON
        </h1>

        <div className="pb-48">
          <Countdown />
        </div>

        <div className="absolute bottom-0 bg-hills left-0 right-0 h-44 bg-no-repeat bg-cover bg-x-82">
        </div>
      </main>

    </div>
  )
}

// Pages that are statically optimized by Automatic Static Optimization will be hydrated without their route parameters provided, i.e query will be an empty object ({}).
Home.getInitialProps = async () => {
  return {}
}

export default Home
