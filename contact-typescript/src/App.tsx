import {
  Search,
  ProfileList,
  Information,
  CreateButton,
} from './components/route/route';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1 className='subject'>홍길동의 연락처</h1>
      <div className='contact-wrap'>
        <div className='col left'>
          <Search />
          <ProfileList />
        </div>
        <div className='col right'>
          <Information />
        </div>
      </div>
      <div>
        <CreateButton />
      </div>
    </div>
  );
}

export default App;
