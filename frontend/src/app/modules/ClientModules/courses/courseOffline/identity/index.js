import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import "./styles/styles.scss";

import identity01 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity//tim-lai-nhan-dang-dich-thuc-lpe-banner.jpg";
import identity02 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-gia-tri.png";
import identity03 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-1.jpg";
import identity04 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-2.jpg";
import identity05 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-trai-nghiem.png";
import identity06 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-day-1.png";
import identity07 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-3.jpg";
import identity08 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-day-2.png";
import identity09 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-4.jpg";
import identity10 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-day-3.png";
import identity11 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-5.jpg";

import identitybackground01 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/9-bg-02.jpg";
import identitybackground02 from "../../assets/images/chuong-trinh-huan-luyen/offline/identity/9-bg-03.jpg";

function IDENTITY() {
  useSiteTitle("identity_program");

  return (
    <div className="identity container-fluid">
      <div className="row">
        <img src={identity01} alt={identity01} className="img-fluid w-100" />
      </div>

      <div
        className="row page1 pt-3"
        style={{
          background: `url(${identitybackground01})`,
        }}
      >
        <div className="col-6 offset-3">
          <img src={identity02} alt={identity02} />
        </div>
        <div className="col-md-8 offset-md-2">
          <div className="row flex-alignitem mt-4 text-justify">
            <div className="col-md-6 order-last">
              <ul>
                <li>
                  Nh???n Th???c v??? kh??i ni???m Nh??n D???ng v?? c??ch n?? t??c ?????ng ?????n C??
                  Th??? v?? T??m Tr?? ch??ng ta
                </li>
                <li>
                  Nh???n Th???c v??? S??? Ti???n H??a c???a con ng?????i t??? m???t s??? quan ??i???m/g??c
                  nh??n v?? c??ch ch??ng ta th???c s??? Ki???n T???o S??? Ph???n c???a m??nh t??? g??c
                  nh??n T??m Linh
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={identity03} alt={identity03} />
            </div>
          </div>
          <div className="row flex-alignitem mt-3 text-justify pb-3">
            <div className="col-md-6 ">
              <ul>
                <li>
                  Nh???n th???c v??? V???t L??/C?? H???c L?????ng T??? v?? c??ch s??? d???ng n?? ????? Ki???n
                  T???o Th??nh C??ng C???c ?????i
                </li>
                <li>
                  Hi???u v??? Nhi???u Quy Lu???t Thu H??t Ngu???n L???c Kh??c Nhau Trong Cu???c
                  ?????i v?? c??ch s??? d???ng c??c quy lu???t n??y ????? Th??nh C??ng C???c ?????i
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={identity04} alt={identity04} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="row page2 pt-4"
        style={{
          background: `url(${identitybackground02})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="col-6 offset-3">
          <img src={identity05} alt={identity05} />
        </div>
        <img
          src={identity06}
          alt={identity06}
          className="col-md-4 col-sm-5 mt-3"
        />
        <div className="col-md-8 offset-md-2 mt-3">
          <img src={identity07} alt={identity07} />
          <ul className="mt-3">
            <li>
              C??ch Ki???n T???o Nh??n D???ng v?? c???ng h?????ng v???i nh???ng ????ng g??p tr???ng ?????i
              trong cu???c ?????i n??y
            </li>
            <li>
              V???n H??nh c??c v???n ????? To??n Di???n b???ng Li???u Tr??nh Personal History
              Therapy (Ti???u S??? C?? Nh??n)
            </li>
          </ul>
        </div>

        <img src={identity08} alt="img" className="col-md-4 col-sm-5 mt-3" />

        <div className="col-md-8 offset-md-2 mt-3">
          <img src={identity09} alt={identity09} />
          <ul className="mt-3">
            <li>Ti???p c???n ?????i s???ng t??m linh tr??n ph????ng di???n khoa h???c</li>
            <li>
              Th???o Lu???n, ????c K???t v??? c??ch V???n H??nh Nh??n D???ng v?? T??m Linh tr??n
              h??nh tr??nh m?? ??? ???? b???n ?????t ???????c Th??nh C??ng theo nh?? B???ng K??? Ho???ch
              Th??nh C??ng c???a b???n
            </li>
            <li>Th???m Nhu???n V???t L?? L?????ng T??? v?? C??ch ??p d???ng v??o cu???c s???ng</li>
          </ul>
        </div>

        <img
          src={identity10}
          alt={identity10}
          className="col-md-4 col-sm-5 mt-3"
        />

        <div className="col-md-8 offset-md-2 mt-3">
          <img src={identity11} alt={identity11} />
          <ul className="mt-3">
            <li>
              Chu???n B??? Cu???i C??ng v??? Th??? Ch???t v?? Tinh Th??n cho h??nh tr??nh Chinh
              Ph???c Fansipan, Sapa, Vi???t Nam.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IDENTITY;
