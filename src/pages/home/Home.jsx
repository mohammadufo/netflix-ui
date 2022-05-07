import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import { img1, img2, img3, img4 } from '../../data';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List img={img1} />
      <List img={img2} />
      <List img={img3} />
      <List img={img4} />

      <p className="copy">All rights reserved. Muhammad UFO.</p>
    </div>
  );
};

export default Home;
