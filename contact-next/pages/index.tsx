import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import {
  Search,
  ProfileList,
  Information,
  CreateButton,
} from './components/route/route';

export default function Home() {
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
