import Lottie from "lottie-react";
import React from "react";
import Skeleton from "react-loading-skeleton";
import ImagePlaceHolder from '../assets/images/image.json'

const DetailsSkeleton = () => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-7 align-content-center p-1">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Skeleton count={8} />
              </div>
              <div className="col-2 bg-light-subtle rounded w-10 p-0 m-4">
                <Lottie className="w-100" animationData={ImagePlaceHolder} loop={true} />
              </div>
              <div className="col-2 bg-light-subtle rounded w-10 p-0 m-4">
                <Lottie className="w-100" animationData={ImagePlaceHolder} loop={true} />
              </div>
              <div className="col-2 bg-light-subtle rounded w-10 p-0 m-4">
                <Lottie className="w-100" animationData={ImagePlaceHolder} loop={true} />
              </div>
              <div className="col-2 bg-light-subtle rounded w-10 p-0 m-4">
                <Lottie className="w-100" animationData={ImagePlaceHolder} loop={true} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 p-1">
          <Skeleton count={15} />
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
