import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewer from "./Viewer";
import Recommends from "./Recommends";
import NewsDisney from "./NewsDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import db from '../../src/FireBase';
import { setMovie } from "../Features/Movie/movieSlice";
import { selectUserName } from "../Features/User/userSlice";


const Home = (props) => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  let recommend = [];
  let newDisney = [];
  let originals = [];
  let trending = [];
  useEffect(() => {

    db.collection('DisneyClone').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            recommend = [...recommend, { id: doc.id, ...doc.data() }]
            console.log('recommed: ', recommend);
            break;
          case 'new':
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }]
            break;
          case 'original':
            originals = [...originals, { id: doc.id, ...doc.data() }]
            break;
          case 'trending':
            trending = [...trending, { id: doc.id, ...doc.data() }]
            break;
        }
      });
      dispatch(
        setMovie({
          recommend: recommend,
          newDisney: newDisney,
          originals: originals,
          trending: trending,
        })
      );
    });

  }, [username]);

  return <Container>
    <ImgSlider />
    <Viewer />
    <Recommends />
    <NewsDisney />
    <Originals />
    <Trending />
  </Container>;
}
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/Images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;