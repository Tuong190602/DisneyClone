import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../FireBase";
const Detail = (props) => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});
    useEffect(() => {
        db.collection('DisneyClone')
            .doc(id)
            .get().then((doc) => {
            if (doc.exists) {
                setDetailData(doc.data());
            } else {
                console.log("Don't exists data in firebase")
            }
        }).catch((error) => {
            console.log("Failse from Detail: ", error)
        });
    },[id]);
   
    return (
        <Container>
            <Background>
                <img src={ detailData.backgroundImg} alt={detailData.title} />
            </Background>
            <ImageTitle>
            <img src={ detailData.titleImg} alt={detailData.title} />
            </ImageTitle>
            <ContentMeta>
                <Controls> 
                    <Player>
                        <img src="/Images/play-icon-black.png"></img>
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/Images/play-icon-white.png"></img>
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span/>
                        <span/>
                        <span/>
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src="/Images/group-icon.png"/>
                        </div>
                    </GroupWatch>
                </Controls>
                <Subtitle>{detailData.subTitle}</Subtitle>
                <Subtitle>{detailData.description}</Subtitle>

            </ContentMeta>
      </Container>  
    );
}
const Container = styled.div`
position: relative;
min-height: calc(100vh-250px);
overflow-x:hidden ;
display: block;
top: 72px;
padding: 0 calc(3.5vw+5px);
`;
const Background = styled.div`
left: 0;
opacity: 0.8;
position: fixed;
right: 0;
top: 0;
z-index: -1;
img{
    width: 100vw;   
    height: 100vh;
    @media (max-width:768px) {
        width: initial;
    }
}
`;
const ImageTitle = styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 0px auto;
height: 30vw;
min-height: 170px;
padding-bottom: 24px;
width: 100%;
img{

    max-width: 600px;
    min-width: 200px;

    width: 35vw;
}


`;
const ContentMeta = styled.div`
margin-left: 100px;
max-width: 874px;

`;
const Controls = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
min-height: 56px;
`;
const Player = styled.button`
font-size: 15px;
margin: 0px 22px 0px 0px;
padding: 0px 24px;
height: 56px;
border-radius: 4px;
align-items: center;
justify-content: center;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
background: rgb(249,249,249);
border: none;
color: rgb(0,0,0);
img{
    width: 32px;
}&:hover{
    background: rgb(198,198,198);
}
@media (max-width:768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img{
        width: 25px; 
    }
}
cursor: pointer;
`;
const Trailer = styled(Player)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: rgb(249,249,249);
`;
const AddList = styled.div`
margin-right: 16px;
height: 44px;
width: 44px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.6);
border-radius: 50%;
border: 2px solid white ;
cursor: pointer;
span{
    background-color: rgb(249,249,249);
    display: inline-block;
    &:first-child{
         height: 2px;
         transform: translate(1px,0px) rotate(0deg);
         width: 16px;
    }
    &:nth-child(2){
        height: 16px;
        transform: translateX(-8px)rotate(0deg);
        width: 2px;
    }
}
`;
const GroupWatch = styled.div`
height: 44px;
width: 44px;
border-radius: 50%;
cursor: pointer;
border: 2px solid white;
display:flex;
justify-content: center;
align-items: center;
background: white;
div{
    height: 40px;
    width: 40px;
    background:rgb(0,0,0);
    border-radius: 50%;
    img{
        width: 100%;
    }
}
`;
const Subtitle = styled.div`

color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
@media (max-width:768px) {
    font-size: 12px;
}
`;
const Desciption = styled.div`

line-height: 1.4;
font-size: 20px;
padding: 16px 0px;
color: rgb(249,249,249);
@media (max-width:768px) {
    font-size: 14px;
}
`;
export default Detail;