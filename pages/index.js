import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>The Coffee News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-white text-6xl font-bold">
          Brewing...{' '}
          <br/>
          <a className="text-red-600 text-lg" href="/">
            thecoffee.today
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get brew right now{' '}
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          
        </div>
      </main>
    </div>
  )
}
