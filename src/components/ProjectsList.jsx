import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import newrizon_1 from "../assets/projects_img/newrizon_1.jpg";
import mercurioweather_1 from "../assets/projects_img/mercurioweather_1.jpg";
import greenlife_2 from "../assets/projects_img/greenlife_2.jpg";
import brainchallenge_1 from "../assets/projects_img/brainchallenge_1.jpg";
import mememory_2 from "../assets/projects_img/mememory_2.png";

const ProjectsList = () => {

  const mode = useSelector((state) => state.mainReducer.isdarkMode);

  return (
    <Container style={{ background: mode ? "white" : "black" }}>
      <h1 className="text-center" style={{ color: mode ? "black" : "white" }}>MY PROJECTS</h1>
      <br></br>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7102280914713403392/" target="_blank">
          <Card className="text-white border border-0">
            <Card.Img src={newrizon_1} />
            <Card.ImgOverlay>
              <Card.Title>Newrizon - Mobile Product Website</Card.Title>
              <br></br>
              <Card.Text>
                Used Technologies: 
                <br></br>
                #HTML #CSS #JavaScript #React.js #Redux #bootstrap 
                #Java #SpringBoot #SQL #PostgreSQL
                </Card.Text>
            </Card.ImgOverlay>
          </Card>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7094723086230417408/" target="_blank">
          <Card className="text-success">
            <Card.Img src={mercurioweather_1} />
            <Card.ImgOverlay>
              <Card.Title>Mercurioweather - Weather web app</Card.Title>
              <br></br>
              <Card.Text>
                Used Technologies: 
                <br></br>
                #HTML #CSS #JavaScript #React.js #Redux #bootstrap 
                </Card.Text>
            </Card.ImgOverlay>
          </Card>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7110618274131812352/" target="_blank">
          <Card className="text-dark">
            <Card.Img src={greenlife_2} />
            <Card.ImgOverlay>
              <Card.Title>Greenlife - CRM</Card.Title>
              <br></br>
              <Card.Text>
                Used Technologies: 
                <br></br>
                #HTML #CSS #JavaScript #React.js #Redux #bootstrap 
                #Java #SpringBoot #SQL #PostgreSQL
                </Card.Text>
            </Card.ImgOverlay>
          </Card>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7104799499646119936/" target="_blank">
          <Card className="text-info">
            <Card.Img src={brainchallenge_1} />
            <Card.ImgOverlay>
              <Card.Title>BrainChallenge - Quiz Web App</Card.Title>
              <br></br>
              <Card.Text>
                Used Technologies: 
                <br></br>
                #HTML #CSS #JavaScript #React.js #bootstrap 
                </Card.Text>
            </Card.ImgOverlay>
          </Card>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7115263283036614656/" target="_blank">
          <Card className="text-danger">
            <Card.Img src={mememory_2} />
            <Card.ImgOverlay>
              <Card.Title>MEMEmory - Gaming Web App</Card.Title>
              <br></br>
              <Card.Text>
                Used Technologies: 
                <br></br>
                #HTML #CSS #JavaScript #React.js #bootstrap 
                </Card.Text>
            </Card.ImgOverlay>
          </Card>
          </a>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default ProjectsList;
