import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Map from '../components/map';
import Header from '../components/header';
import Footer from '../components/footer';
import styled from 'styled-components';

const TextCont = styled.div`
padding:3%;
`

const TextHeader = styled.div`
font-weight:bold;
font-family:'Roboto';
color:#5b5345;
font-size:30px;
margin-top:5%;
margin-bottom:3%;
width:110%;
padding:5%;
border-radius:30px;
background-color:white;
`

const TextContent = styled.div`
font-size:14px;
font-weight:'light';
font-family:'Roboto';
color:#5b5345;
line-height:30px;
margin-bottom:-10%;
padding:5%;
width:110%;
`

const Ul = styled.li`
text-indent:24px;
`


export default function Home() {
  return (
    <>
      <main className={styles.main}>
      <Header/>
      <Map/>
      <TextCont>
        <TextHeader>
          Expo Line
        </TextHeader>

        <TextContent>
        The Expo Line operates two routes:
        <br/>
          <Ul>
          Waterfront Station (Downtown Vancouver) to King George Station (Surrey)
          </Ul>
          <Ul>
          Waterfront Station (Downtown Vancouver) to Production Way–University Station (Burnaby)
          </Ul>
        <br/>
        Transfer to the Millennium Line at the following stations:
        <br/>
          <Ul>
          Commercial–Broadway Station
          </Ul>
          <Ul>
          Lougheed Town Centre Station
          </Ul>
          <Ul>
          Production Way–University Station
          </Ul>
        <br/>
        Use Columbia Station to transfer to and from a train going to either King George or Production Way–University.
        <br/>
        Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.
        </TextContent>
      </TextCont>
      <Footer/>
      </main>
    </>
  )
}
