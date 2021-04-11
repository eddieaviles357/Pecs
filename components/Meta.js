import Head from 'next/head';

function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
  		{/* <script src="https://kit.fontawesome.com/ada117092c.js" crossOrigin="anonymous"></script>  */}
      <title>{title}</title>
    </Head>
  )
};

// given default parameters
Meta.defaultProps = {
  title: "Pecs communication",
  keywords: "Learning, Disabilities, Pecs, Cards",
  description: "Pecs are to help with communicaction"
};

export default Meta
