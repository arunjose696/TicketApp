import buildClient from '../api/buildClient';
export default function LandingPage({ data }) {
  console.log('aabbbbbbbbbbbb');

  return <h1>Hey you are {data.currentUser ? '' : 'not'} logged in</h1>;
}

export async function getServerSideProps(context) {
  // Fetch data from external
  let data = null;
  const client = buildClient(context);
  console.log('running getServerprops');

  try {
    const res = await client.get('/api/users/currentuser');
    data = res.data;
  } catch (error) {
    console.log(error);
  }

  return { props: { data } };
}
