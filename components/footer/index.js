import styled from 'styled-components';
import Image from 'next/image'

const Image2 = styled(Image)`
margin-bottom:20px;
`

const Wrapper = styled.div`
width:100vw;
background-color: #5C5346;
margin-top:8%;
margin-bottom:-8%;
padding:2%;
`

const Cont = styled.div`
width: 100%;
height: 100%;
padding-top:2%;
padding-bottom:2%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#f0ef80;
`

const Top = styled.div`
display:flex;
width:100%;
margin-left:15%;
justify-content:center;
`

const Row = styled.div`
flex: 0.2;
display:flex;
flex-direction:column;
`

const Header = styled.div`
font-size:20px;
font-weight:bold;
font-family:'Roboto';
color:#F3EFF5;
`

const Sub = styled.div`
font-size:14px;
font-family:'Roboto';
padding-top:3%;
color:#f0ef80;
width:80%
`

const Bottom = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
`

export default function Footer(){

    return (
        <Wrapper>
        <Cont>
            <Top>
                <Row>                
                <Header>Explore</Header>
                <Sub>Expo Line</Sub>
                <Sub>Millenium Line</Sub>
                <Sub>Evergreen Extension</Sub>
                <Sub>Canada Line</Sub>
                </Row>

                <Row>                
                <Header>Timetable</Header>
                <Sub>Hours</Sub>
                <Sub>Schedules</Sub>
                <Sub>Delays</Sub>
                </Row>

                <Row>                
                <Header>Resources</Header>
                <Sub>Contact Us</Sub>
                <Sub>About Us</Sub>
                </Row>

                <Row>                
                <Header>Contact Us</Header>
                <Sub>Call us at 604.953.3333</Sub>
                <Sub>400-287 Nelson's Ct., New Westminster, BC V3L0E7</Sub>
                </Row>

                <Row style={{flexDirection:'column'}}>
                <Image2 src="/instagram.svg"
                width={40}
                height={40}/>
                <Image2 src="/facebook.svg"
                width={40}
                height={40}/>
                <Image2 src="/twitter.png"
                width={35}
                height={35}/>
                </Row>
            </Top>

            <Bottom>     
                <Sub style= {{textAlign:'center', opacity:'75%', fontSize:'12px', marginTop:'20%', marginBottom:'-20%', width:'100%'}}>
                    Expo Line for Dummies.
                    <br/>
                    All Rights Reserved.
                </Sub>                   
            </Bottom>
            
        </Cont>
        </Wrapper>
    )
}