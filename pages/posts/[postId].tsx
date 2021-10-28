import { useRouter } from "next/router";

//  ui
import Layout from '../../components/Layout/Layout';

const Post = (): JSX.Element => {
  const router = useRouter();

  return (
    <Layout title={`Post ${router.query.postId}`}>
      <>
        <main>
          <h2>Post {router.query.postId}</h2>
        </main>
      </>
    </Layout>
  );
};

export default Post;