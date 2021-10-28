import Router from 'next/router';

//  ui
import Layout from '../../components/Layout/Layout';

const About = (): JSX.Element => {
  return (
    <Layout title="About">
      <>
        <main>
          <h1>About</h1>
          <button onClick={() => Router.push('/')}>Go home</button>
        </main>
      </>
    </Layout>
  )
};

export default About;