import Row from "../components/Row";
import Main from "./Main";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchURL={requests.requestUpComing} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Up Coming" fetchURL={requests.requestUpComing} />
    </>
  );
};

export default Home;
