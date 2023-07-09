import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/Images/cta-logo-one.svg" />
                    <SingUp>GET ALL THERE</SingUp>
                    <Description>
                        Pandora: Beneath the Paradise,  Hong Taera gets trapped in a fate like that of Pandora in Greek mythology.
                        With a perfect husband and a lovely daughter, Taera leads a life envied by all.
                        However, her repressed memories resurface. She sets out to take revenge and protect her beloved family.
                    </Description>
                    <CTALogoTwo src="/Images/cta-logo-two.png" />
                </CTA>
                <BgImage />
                
            </Content>
        </Container>
    );
}
const Container = styled.section`
overflow: hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;

`;
const Content = styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;
`;
const BgImage = styled.div`
height:100%;
background-position:top;
background-image: url("/Images/login-background.jpg");
background-size:cover;
background-repeat:no-repeat;
position:absolute;
top:0;
right:0;
left:0;
z-index:-1;

`;
const CTA = styled.div`
margin-bottom:2vw;
max-width:650px;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content:center;
margin-top:0;
align-item:center;
text-align:center;
margin-right:auto;
margin-left:auto;
transition-timing-function:ease-out;
transition:opacity 0.2&;
width:100%;
`;
const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
`;
const SingUp = styled.a`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacingn:1.5px;
font-size:18px;
padding:16.5px 0;
border: 1px solid transparent;
boder-radius:4px;
&:hover{
    background-color:#0483ee;
    
}
`;
const Description = styled.p`
color:hsla(0,0%,95,3%,1);
font-size:11;
line-height:1.5;
letter-spacing:1.5px;

`;
const CTALogoTwo = styled.img`
max-width:600px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom:
width:100%;
`
export default Login;