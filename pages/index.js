import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Map from '../components/map';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
      <Header>
      </Header>
      <Map/>
      <Footer/>
      </main>
    </>
  )
}
