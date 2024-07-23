import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet" />



                <script src='https://cdn.plot.ly/plotly-2.32.0.min.js' async ></script>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js' async ></script>
                <script src="https://unpkg.com/@astrodraw/astrochart"></script>
            </Head>
            <body>
                <div id='myDiv'></div>
                <div id="paper"></div>


                <Main />
                <NextScript />
            </body>
        </Html>
    )
}