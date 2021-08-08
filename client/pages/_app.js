// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/buildClient';
import Header from '../components/header';
// own css files here

export default function MyApp({ props, Component, pageProps }) {
  return (
    <div>
      <Header currentUser={props.data.currentUser}></Header>
      <Component {...pageProps} />
    </div>
  );
}
MyApp.getInitialProps = async ({ ctx }) => {
  let data = null;
  const client = buildClient(ctx);
  console.log('running initial Serverprops!!!!!!!!!!!!!!!!!!!!!');
  console.log(ctx);
  try {
    const res = await client.get('/api/users/currentuser');
    data = res.data;
  } catch (error) {
    console.log(error);
  }
  console.log('finished running initial Serverprops!!!!!!!!!!!!!!!!');
  return { props: { data } };
};
