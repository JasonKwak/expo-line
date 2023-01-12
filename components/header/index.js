import styled from 'styled-components';

export const Wrapper = styled.div`
width: 110vw;
`

const Cont = styled.div`
transform:rotate(-4deg);
margin-bottom:10%;
`

const TextCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:#5C5346;
flex-direction:column;
text-align:center;
padding: 1rem;
`

const Title = styled.div`
color: white;
font-size: 64px;
font-family:'Roboto';
font-weight:700;
font-style:italic;

`

const Accent = styled.div`
color:#efef80;
font-size: 64px;
font-family:'dummies';
`

export default function Header(){

    return ( 
        <Wrapper>
            <Cont>
                <TextCont>
                    <Title> Expo Line </Title>
                    <Accent style={{fontSize:'24px'}}>For </Accent>
                    <Accent>Dummies</Accent>
                </TextCont>
            </Cont>
        </Wrapper>
    )
}