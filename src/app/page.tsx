export default function Home() {
  return (
    <main className="max-w-7xl flex flex-col justify-center items-center mx-auto px-3 gap-5">
      <section className="flex flex-col flex-wrap gap-2">
        <h1 className="text-lg font-medium">About</h1>
        <p>
          Welcome to our Real-Time Stock Data Visualization App, a cutting-edge
          platform designed to provide you with the most accurate and up-to-date
          financial information.
        </p>
        <p>
          Our application is built using Next.js, a powerful JavaScript
          framework that enables us to deliver a seamless and efficient user
          experience. We understand the importance of real-time data in the
          world of finance, and our app is designed to meet this need.
        </p>
        <p>
          We fetch our data from Finnhub API, a reputable source known for its
          comprehensive financial data. Finnhub API provides access to real-time
          stock data, making it an ideal choice for our application. This
          ensures that you always have the most current information at your
          fingertips.
        </p>
      </section>
      <section className="flex flex-col flex-wrap gap-2 w-full">
        <h1 className="text-lg font-normal">Key Features</h1>
        <ul className=" flex-col gap-3  list-disc px-7">
          <li>
            <b>Real-Time Data:</b> Our app provides real-time stock data,
            ensuring you have the most current information for your investment
            decisions.
          </li>
          <li>
            <b> User-Friendly Interface:</b> Built with Next.js, our app offers
            a seamless and efficient user experience.
          </li>
          <li>
            <b> Reliable Data Source: </b> We fetch our data from Finnhub API, a
            reputable source known for its comprehensive financial data.
          </li>
        </ul>
      </section>
    </main>
  );
}
