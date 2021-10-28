import Head from 'next/head'
import Link from 'next/link'

type LayoutProps = {
  children: JSX.Element;
  title: string;
};

const Layout = ({ children, title }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="posts" />
        <meta name="description" content="posts some" />
        <title>{title}</title>
      </Head>
      <div>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </nav>
        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;