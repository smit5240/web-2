import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";

export default function Testimonials() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="bg2">
        <div className="md:mx-[150px]  ">
          <div className="mt-[50px] mb-[30px] pt-[50px]  text-center">
            <h1 className="text-[#111] text-[32px] leading-[45px] font-[700]   mb-[10px]">
              Our Testimonials
            </h1>
            <p className="text-[#0f192d] text-[16px] leading-[28px]  lg:flex lg:m-auto  lg:w-[700px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
          <Carousel responsive={responsive}>
            <div>
              <div
                className="bg-[#fff] rounded-md boxslider mx-[10px]"
                style={{ background: "active" ? "#6cc000" : "initial" }}
              >
                <p className="p-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, quas reprehende distinctio animi commodi dolorem et
                  consequatur atque, autem earum soluta. Similique asperiores
                  quod accusamus dolore [...]
                </p>
              </div>
            </div>
            <div>
              <div
                className="bg-[#6cc000] rounded-md boxslider min-h-[185px] mx-[10px] h-full"
                style={{ background: "active" ? "#6cc000" : "initial" }}
              >
                <div className="p-[20px]">
                  <img
                    src="https://media.istockphoto.com/id/1178925205/photo/cheerful-teenage-girl-sitting-with-laptop-pointing-at-yellow-background.jpg?s=170667a&w=0&k=20&c=FnJt8Tsi-A5g87BXERYuBbZ3iMU5Wao6KImxtCktPRA="
                    alt=""
                    className="imgdar max-h-[145px] h-[100vh] w-full "
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#fff] rounded-md boxslider mx-[10px]">
                <p className="p-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, quas reprehende distinctio animi commodi dolorem et
                  consequatur atque, autem earum soluta. Similique asperiores
                  quod accusamus dolore [...]
                </p>
              </div>
            </div>
            <div>
              <div className=" rounded-md boxslider min-h-[185px] mx-[10px] h-full">
                <div className="p-[20px]">
                  <img
                    src="https://media.istockphoto.com/id/1178925205/photo/cheerful-teenage-girl-sitting-with-laptop-pointing-at-yellow-background.jpg?s=170667a&w=0&k=20&c=FnJt8Tsi-A5g87BXERYuBbZ3iMU5Wao6KImxtCktPRA="
                    alt=""
                    className="imgdar max-h-[145px] h-[100vh] w-full "
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#fff] rounded-md boxslider mx-[10px]">
                <p className="p-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, quas reprehende distinctio animi commodi dolorem et
                  consequatur atque, autem earum soluta. Similique asperiores
                  quod accusamus dolore [...]
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
