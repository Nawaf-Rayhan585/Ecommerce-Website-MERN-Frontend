import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Lottie from 'lottie-react'
import ImagePlaceHolder from '../assets/images/image.json'


const BrandsSkeleton = () => {
  return (
    <div>
      <div className='section'>
        <div className="container">
          <div className="row">
            <h1 className='headline-4 text-center my-2 p-0'>Top Brands</h1>
            <span className='bodySmal mb-5 text-center'>Explore a World Of Choices Across our most Popular <br/> Shopping Brands</span>


          {
            Array.from({length:16}).map(() => {
              return (
                <div className="col-6 col-lg-8r text-center col-md-8r p-2">
                  <div className="card h-100 rounded-3 bg-secondary">
                    <div className="card-body">
                      <Lottie className='w-100' animationData={ImagePlaceHolder} loop={true}/>
                      <Skeleton count={1}></Skeleton>
                    </div>
                  </div>
                </div>
              )
            })
          }



        </div>
      </div>
    </div>
    </div>
  )
}

export default BrandsSkeleton
