import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  <Head>
    <script src="https://unpkg.com/flowbite@1.4.4/dist/flowbite.js"></script>
    <link
      rel="stylesheet"
      href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css"
    />
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" /> */}
    {/* <script
      src="https://kit.fontawesome.com/ac94ebba60.js"
      crossorigin="anonymous"
    ></script> */}
  </Head>;
  return <Component {...pageProps} />;
}
