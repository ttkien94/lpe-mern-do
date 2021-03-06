import React, { useEffect, useState } from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// component
import Stepper from "./component/stepper";
import Card from "./component/card";
import CardPrice from "./component/cardPrice";
import Comment from "./component/comment";
import Loading from "./component/loading";

import "./styles/styles.scss";

const videoArray = [
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/htv7.png",
    newLink: "https://www.youtube.com/watch?v=k3wBrDLatPM",
    className: "item-logo-htv",
  },
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/vtv3.png",
    newLink: "https://www.youtube.com/watch?v=gZHehgPfmVI",
    className: "item-logo-vtv",
  },
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/htv7.png",
    newLink: "https://www.youtube.com/watch?v=kgOXAuWkryM",
    className: "item-logo-htv",
  },
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/phuNu.png",
    newLink:
      "https://www.phunuonline.com.vn/la-ha-giang-thanh-tim-chan-gia-tri-de-co-cuoc-doi-y-nghia-a58767.html",
    className: "item-logo-phunu",
  },
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/tienPhong.png",
    newLink:
      "https://tienphong.vn/ra-mat-chuong-trinh-dao-tao-lap-trinh-ngon-ngu-neuron-post697893.tpo",
    className: "item-logo-tienphong",
  },
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/doanhNhan.png",
    newLink:
      "https://doanhnhansaigon.vn/tro-chuyen-voi-doanh-nhan/ceo-leading-performance-la-ha-giang-thanh-moi-nguoi-la-mot-manh-ghep-hoan-hao-va-khac-biet-1087633.html",
    className: "item-logo-doanhnhan",
  },
  {
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/danTri.png",
    newLink:
      "https://dantri.com.vn/giao-duc-huong-nghiep/gap-go-chuyen-gia-dao-tao-cao-cap-lap-trinh-ngon-ngu-tu-duy-1377948663.htm?gidzl=TVO87H9ZkrXxu0qS5dspLdxZ31GFT-y3CU8AHLugwrPYvWyJ2NEv1M_eMaPITEK4FU03535VhOTo66AvNW",
    className: "item-logo-doanhnhan",
  },
];

const stepperDay1 = [
  {
    id: 1,
    title: "Become aware of the Storm you are in",
    content:
      "Tr??? n??n nh???n th???c v??? th??? ???????c g???i l?? ???C??n b??o??? ??? m?? ch??ng ta ??ang ph???i s???ng trong ????.",
  },
  {
    id: 2,
    title: "What will happen if you do not Take Action Now",
    content: "??i???u g?? s??? x???y ra n???u b???n kh??ng b???t ?????u h??nh ?????ng ngay b??y gi???.",
  },
  {
    id: 3,
    title: "How to Eject yourself from the Storm",
    content: "L??m th??? n??o ????? ????a b???n th??n tho??t ra kh???i C??n b??o.",
  },
  {
    id: 4,
    title: "What does it really mean to Run Faster",
    content: "?? ngh??a th???t s??? c???a ???Run Faster???",
  },
  {
    id: 5,
    title: "How to take Specific Actions to Become More",
    content:
      "L??m th??? n??o ????? th???c hi???n nh???ng h??nh ?????ng c??? th??? v?? g???t h??i ???????c nhi???u th??nh t???u h??n.",
  },
];

const stepperDay2 = [
  {
    id: 6,
    title: "How to Produce More & Faster",
    content: "L??m th??? n??o ????? t??ng n??ng su???t, s???n xu???t nhi???u & nhanh h??n n???a.",
  },
  {
    id: 7,
    title: "How to Engage the Unconscious Mind & Field Mind to Get More",
    content:
      "L??m th??? n??o ????? k???t n???i V?? Th???c & Tr?????ng N??ng L?????ng ????? ?????t ???????c nhi???u h??n.",
  },
  {
    id: 8,
    title: "How to Create Specific Mind Processes to Get Exactly What you Want",
    content:
      "L??m th??? n??o ????? t???o n??n nh???ng Quy Tr??nh T??m Tr?? c??? th??? ????? c?? ???????c ch??nh x??c nh???ng ??i???u b???n mu???n.",
  },
  {
    id: 9,
    title: "How to Stay Motivated & Keep Going till you are Successful",
    content:
      "L??m th??? n??o ????? lu??n duy tr?? ?????ng l???c & ti???p t???c ph??t tri???n cho ?????n khi b???n ?????t ???????c th??nh c??ng?",
  },
  {
    id: 10,
    title: "How to Create & Innovate ways to Keep Growing",
    content:
      "Ki???n t???o & ?????i m???i nhi???u c??ch th???c kh??c nhau ????? ti???p t???c ph??t tri???n",
  },
];

const comment = [
  {
    id: 1,
    name: "Ch??? Nguy???n Minh Nghi",
    desc: "Nh??n vi??n v??n ph??ng",
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/nunvvp.jpg",

    comment:
      "C??c l???p h???c Online c???a LPE r???t tuy???t v???i, t??i ???????c t????ng t??c ?????t c??u h???i ngay v???i Chuy??n gia, gi???i quy???t lu??n v???n ????? c???a m??nh, ch??? l???p Offline th?? kh??ng c?? c?? h???i ???????c h???i. T??i ???? thay ?????i b???n th??n ho??n to??n t??? nh???ng l???p c???a th???y Vas v?? c?? Thanh.",
  },
  {
    id: 2,
    name: "Anh Hu???nh Vi???t Minh",
    desc: "IT leader",
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/nam1.PNG",
    comment:
      "N???u kh??ng c?? th???y ch???c gi??? n??y t??i v???n ??ang l??m nh??n vi??n qu??n v?? ng???i tr??ch m??c, than th??? v??? cu???c ?????i. Th???y cho t??i th??? t??i kh??ng th??? t??m ra ???????c ???? ch??nh l?? m???c ti??u s???ng c???a m??nh & ?????ng l???c l???n lao ????? th???c hi???n n??.",
  },
  {
    id: 3,
    name: "Ch??? D????ng ??nh Lan Vy",
    desc: "HR manager",
    img: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/nuhr.jpg",

    comment:
      "T??i l??m l???i cu???c ?????i t??? l???p h???c Online c???a th???y, t??i ??? n?????c ngo??i n??n ch??? ???????c h???c Online nh??ng k???t qu??? v?????t ngo??i mong ?????i. T??i ???? kh??ng c??n kh??? ??au, ti??u c???c nh?? tr?????c v?? cu???c s???ng b??y gi??? v?? c??ng b??nh an, h???nh ph??c. V?? t??i ???? nh???n ra ???????c gi?? tr??? c???a m??nh.",
  },
];

const courseFee = [
  {
    id: 1,
    name: "V?? g???c",
    disabled: true,
    price: 3000000,
  },
  {
    id: 2,
    name: "V?? h??? tr??? m??a covid",
    disabled: true,
    price: 1500000,
  },
  {
    id: 3,
    name: "V?? cho Early Bird",
    disabled: false,
    outOfDate: "S??? l?????ng gi???i h???n ch??? 20 su???t",
    price: 1200000,
  },
];

const itemIcon = [
  {
    id: 1,
    desc: "Th???u hi???u ???????c c??n b??o c???a th???c t???i",
    src: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/storm.png",
  },
  {
    id: 2,
    desc: "V?????t qua kh???ng ho???ng trong ?????i d???ch",
    src: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/virus.png",
  },
  {
    id: 3,
    desc: "?????t ???????c c??c m???c ti??u ph??t tri???n b???n th??n",
    src: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/checklist.png",
  },
  {
    id: 4,
    desc: "?????t ???????c nhi???u th??nh t???u t??? n???n t???ng t??m tr?? m???nh m???",
    src: "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/trophy.png",
  },
];

SwiperCore.use([Autoplay, Pagination, Navigation]);

function RunFaster() {
  useSiteTitle("run_faster");

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const url_string = window.location.href;
  const url = new URL(url_string);
  const utm_source = url.searchParams.get("utm_source");

  useEffect(() => {
    const handleLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => {
      clearTimeout(handleLoading);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="run-faster">
          <div className="container-fluid" style={{ padding: 0 }}>
            <Swiper
              slidesPerView={1}
              className="swiper-container"
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
            >
              <SwiperSlide>
                <div>
                  <img
                    src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/cover1.png"
                    alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/cover1.png"
                    className="carousel-img"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img
                    src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/cloud1.jpg"
                    alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/cloud1.jpg"
                    className="carousel-img"
                  />
                  <div className="dark-layout"></div>
                  <div className="carousel-text">
                    <h1>
                      <span className="text-1">BREAK THE</span> STORM
                    </h1>
                    <p>V?????t qua b??o t???</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img
                    src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/sand.jpg"
                    alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/sand.jpg"
                    className="carousel-img"
                  />
                  <div className="carousel-text shadow-text">
                    <h1 className="text-1">RUN FASTER</h1>
                    <p>Ch???y nhanh h??n</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* logo */}
          <div className="title-logo">
            <p className="title">Truy???n th??ng n??i v??? ch??ng t??i</p>
          </div>

          <Swiper
            slidesPerView={1}
            className="swiper-container"
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {videoArray.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className="intro-clip_logo" key={index}>
                    <a
                      href={item.newLink}
                      alt={item.newLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.img}
                        alt={item.img}
                        className={`img-fluid ${item.className}`}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Carousel */}
          <div className="container video-container">
            <div className="row  fadeInUp">
              <div className="col-md-12 col-lg-6 text-content">
                <h2>???C??N B??O N??O R???I C??NG S??? QUA ??I????!</h2>
                <p>
                  Kh??ng ai c?? th??? d??? ??o??n ???????c khi n??o c??? th??? gi???i s??? quay tr???
                  l???i b??nh th?????ng nh?? tr?????c. V???y ??i???u ch??ng ta n??n l??m l??c n??y
                  l?? ch??? ?????i, c???u nguy???n, hay t??i ph???i l??m g?? ????y v?? n???u n?? di???n
                  bi???n t??? h??n th?? t??i s??? ti???p t???c th???t b???i? Vi???c ch??? ?????i c?? v???
                  nh?? kh?? tho???i m??i v?? an nh??n, nh??ng ch??? ?????i c?? ngh??a l?? ho??n
                  to??n th??? ?????ng tr?????c nh???ng t??c nh??n c?? th??? ???nh h?????ng ?????n cu???c
                  ?????i t????ng lai c???a m??nh.
                </p>
                <div className="row pl-3">
                  <a href="#hocPhi">
                    <button className="button-register">????ng k??</button>
                  </a>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 video-content">
                <img
                  src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/bgVideo.jpg"
                  alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/bgVideo.jpg"
                  className="img-fluid"
                />
                <div
                  className="button-play"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Stepper */}
          <div className="bg-item">
            <div className="container py-5">
              <div className="row stepper">
                <div className="col-12  bounceIn">
                  <h1 className="text-center text-heading">
                    ???? ?????n l??c ph???i ch???y
                  </h1>
                </div>

                <div className="col-md-6 text-center dp-big  bounceInLeft">
                  <Card name="info" />
                  <Card name="register" />
                </div>

                <div className="col-12 col-md-12 col-lg-6   bounceInRight">
                  <Swiper
                    slidesPerView={1}
                    className="swiper-container"
                    loop={true}
                  >
                    <SwiperSlide>
                      <div className="row center-content wrapper-step">
                        <div className="col-sm-12 text-center block-day">
                          <h1 className="day-css">Ng??y 1</h1>
                        </div>
                        {stepperDay1.map((item, index) => {
                          return (
                            <Stepper
                              numberStep={item.id}
                              key={index}
                              title={item.title}
                              content={item.content}
                            />
                          );
                        })}
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="row center-content wrapper-step">
                        <div className="col-sm-12 text-center block-day">
                          <h1 className="day-css">Ng??y 2</h1>
                        </div>
                        {stepperDay2.map((item, index) => {
                          return (
                            <Stepper
                              numberStep={item.id}
                              key={index}
                              title={item.title}
                              content={item.content}
                            />
                          );
                        })}
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="col-12 col-md-8 text-center dp-small">
                  <Card name="info" />
                  <Card name="register" />
                </div>
              </div>
            </div>
          </div>
          {/* 4 item */}
          <div className="container mb-5">
            <h1 className="text-center text-uppercase py-5 heading_fee  ">
              Kh??a h???c n??y gi??p b???n
            </h1>
            <div className="row">
              {itemIcon.map((item, index) => {
                return (
                  <div className="col-6 col-md-3 wrapperIcon " key={index}>
                    <img src={item.src} alt={item.src} className="img-fluid" />
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ng?????i d???n ?????u v?????t b??o */}
          <div className="bg-nguoiVuotBao">
            <div className="container py-5">
              <h1 className="heading_person ">Ng?????i d???n d???t v?????t b??o</h1>
              <div className="col-12">
                <img
                  src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/mrVas.png"
                  alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/mrVas.png"
                  className="img-vas_big"
                />
              </div>
              <div className="row container-vas">
                <div className="col-12 col-md-8">
                  <p>
                    Mr. Vas ???? c?? g???n 30 n??m d???n d???t qu??n ?????i t???i Singapore &
                    h??n 17 n??m nghi??n c???u, l??m vi???c v??? l??nh v???c NLP, c??ng c??c
                    ng??nh khoa h???c T??m Tr?? kh??c. ??ng ???? hu???n luy???n, ????o t???o,
                    mang ?????n s??? ph??t tri???n v?????t b???c cho h??ng tr??m ng??n ng?????i ???
                    kh???p Ch??u ??.
                  </p>
                  <p>
                    V???i t???m nh??n ???mang ?????n cu???c s???ng b??nh an & h???nh ph??c cho
                    nh??n lo???i???, Mr. Vas ???? & ??ang kh??ng ng???ng nghi??n c???u, ph??t
                    tri???n c??c ch????ng tr??nh d???y c???a m??nh. Khi Covid ho??nh h??nh,
                    Mr. Vas nh???n th???c ???????c r???ng t???t c??? ch??ng ta kh??ng th??? d???m
                    ch??n t???i ch??? & ch??? ?????i n?? tr??i qua. C???n ph???i l??m ??i???u g?? ????
                    ????? m???i ng?????i c?? th??? v???c d???y m???nh m??? h??n & ti???p t???c ???ch???y
                    nhanh h??n??? v??? ph??a tr?????c.
                  </p>
                  <p>
                    Mr. Vas s??? l?? Ng?????i ?????ng h??nh - d???n d???t ????? t???t c??? ch??ng ta
                    c??ng nhau v?????t qua c??n b??o mang t??n Covid-19. Nh??ng ch??? khi
                    b???n th???t s??? mong mu???n ???v?????t b??o??? & s???n s??ng ch???p nh???n th??ch
                    th???c.
                  </p>
                </div>
                <div className="col-md-4"></div>
                <img
                  src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/mrVas.png"
                  alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/run-faster/mrVas.png"
                  className="img-vas"
                />
              </div>
            </div>
          </div>

          {/* H???c ph?? */}
          <div className="price" id="hocPhi">
            <div className="bg-adding"></div>
            <div className="container">
              <h1 className="text-center text-uppercase text-heading">
                H???c ph??
              </h1>

              <div className="row">
                {courseFee.map((item, index) => {
                  return (
                    <div
                      className="wrapper-card col-12 col-md-12 col-lg-4"
                      key={index}
                    >
                      <CardPrice item={item} utm_source={utm_source} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* c???m nh???n */}
          <section className="review">
            <div className="container">
              <h1 className="text-center text-uppercase py-5 heading_fee">
                C???m nh???n c???a h???c vi??n
              </h1>
            </div>
            <div className="container">
              <div className="row carousel-review">
                {comment.map((item, index) => {
                  return <Comment data={item} key={index} />;
                })}
              </div>
            </div>
          </section>

          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            autoplay
            videoId="MvafPA1HJIw"
            onClose={() => {
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </>
  );
}

export default RunFaster;
