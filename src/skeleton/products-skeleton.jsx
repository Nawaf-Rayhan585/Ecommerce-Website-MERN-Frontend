import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Lottie from 'lottie-react'
import ImagePlaceHolder from '../assets/images/image.json'



const ProductsSkeleton = () => {
  return (
    <div className='container'>
      <div className="row">
      {
            Array.from({length:8}).map(() => {
              return (
                <div className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                <div className="card shadow-sm h-100 rounded-3 bg-white">
                  <Lottie className='w-100' animationData={ImagePlaceHolder} loop={true}></Lottie>
                  <div className="card-body">
                    <Skeleton count={3} />
                  </div>
                </div>
              </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default ProductsSkeleton
 