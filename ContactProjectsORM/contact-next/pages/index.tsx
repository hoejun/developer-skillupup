import { LeftBox, RightBox } from './components/route/route';

const Home = () => {
  return (
    <div className='container'>
      <h1 className='subject'>연락처</h1>
      <div className='contact-wrap'>
        <LeftBox />
        <RightBox />
      </div>
    </div>
  );
};
export default Home;
