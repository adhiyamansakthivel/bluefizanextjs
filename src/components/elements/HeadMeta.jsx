import Head from 'next/head'

const HeadMeta = ({metaTitle, metaDesc, metaUrl, metaImg, metaKeywd}) => {
    return ( 
        <Head>
            {/* Basic metas */}
            <meta charSet="utf-8" />
            <meta name="robots" content="noindex, follow" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content={`${metaDesc?metaDesc:"Bluefiza"}`} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>{`${metaTitle?metaTitle:"Bluefiza"} || Bluefiza`}</title>
            <link rel="icon" type="image/x-icon" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon.ico`} />
            <meta property="og:title" content={`${metaTitle?metaTitle:"Bluefiza"} || Bluefiza`}/>
            <meta property="og:description" content={`${metaDesc?metaDesc:"Bluefiza "}`} />
            <meta property="og:image" content={`${metaImg?metaImg:"/images/logo.svg"}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content={`${metaUrl?metaUrl:"https://bluefiza.com/"}`} />
            <link rel="canonical" href={`${metaUrl?metaUrl:"Bluefiza"} || Bluefiza`} />
            <meta name="keywords" content={`${metaKeywd?metaKeywd:"Bluefiza"} || Bluefiza`} />
            <meta name="robots" content="index, follow" />

        </Head>
     );
}
 
export default HeadMeta;