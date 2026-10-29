import calculate from "../assets/calculate.png";

import bmi from "../assets/bmi.png";

import bmr from "../assets/bmr.png";

import car from "../assets/car.png";

import Cardmenu from "../components/cardmenu";

import Footer from "../components/Footer";

import { Link } from "react-router"; // หากใช้ React Router v6 แนะนำเปลี่ยนเป็น "react-router-dom"

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* แสดงรูป */}
        <img src={calculate} alt="calculate" className="w-30 mt-20" />

        {/* แสดงชื่อเว็บ */}
        <p className="font-kanit text-3xl font-bold mt-5">
          เครื่องคำนวณออนไลน์
        </p>
        <p className="font-item text-xl text-gray-700">
          เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง
        </p>

        <div className="mt-20 flex gap-10">
          <Link to="/bmi">
            <Cardmenu
              imgShow={bmi}
              titleShow="Bmi(ดัชนีมวลกาย)"
              stitleShow="คำนวณน้ำหนักและส่วนสูงว่าเหมาะสม"
            />
          </Link>
          <Link to="/bmr">
            <Cardmenu
              imgShow={bmr}
              titleShow="Bmr (อัตราเผาพลาญร่างกาย)"
              stitleShow="คำนวณอัตราการเผาพลาญ"
            />
          </Link>
          <Link to="/car">
            <Cardmenu
              imgShow={car}
              titleShow="Car (เงินเดือนผ่อนรถ)"
              stitleShow="คำนวณเงินผ่อนรถยนต์"
            />
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
