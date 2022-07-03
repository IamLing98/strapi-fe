import baseApiUrl from "@/utils/constants";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Link from "next/link";

function SimpleSlider({ data = [] }) {
  console.log("Data: ", data);
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings} className="carausel-3-columns slick-initialized slick-slider">
      {data?.map((item, index) => {
        return (
          <div
            className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 slick-slide slick-cloned "
            data-slick-index={index}
            aria-hidden="true"
            tabIndex={index}
            style={{ width: "350px", margin: "0px 50px" }}
          >
            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
              <Link
                className="color-white"
                href={{
                  pathname: `/topic/${item?.id}`,
                }}
                tabIndex={-1}
              >
                <img src={`${baseApiUrl}${item?.thumbnail?.url}`} alt="" />
              </Link>
            </div>
            <div className="post-content media-body">
              <h5>
                <Link
                  href={{
                    pathname: `/topic/${item?.id}`,
                  }}
                  tabIndex={-1}
                >
                  {item?.topicName}
                </Link>
              </h5>
              <p className="text-muted font-small">{item?.description}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default function BlogCategory() {
  const { indexReducer } = useSelector((store) => store);
  return (
    <>
      <div class="widget-header-2 position-relative mb-30 mt-20">
        <h5 class="mt-5 mb-30">Chủ đề nổi bật</h5>
      </div>
      <SimpleSlider data={indexReducer?.popularTopics} />
    </>
  );
}
