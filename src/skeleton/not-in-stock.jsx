import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Lottie from 'lottie-react'
import ImagePlaceHolder from '../assets/images/image.json'

const NotInStock = () => {
  return (
    <div className='container section'>
      <div className="row">
          {
            Array.from({length:1}).map((i , key) => {
              return (
                <div className="col-6 p-2 col-md-12 col-lg-12 col-sm-12">
                <div className="card shadow-sm">
                  <div className="card p-5">
                    <div className="row">
                      <div className="col-12">
                        <p className='text-secondary headline-4' key={i} >({`${key}`})</p>
                        <h2 className='text-danger'>Sorry , Not In Stock.....</h2>
                      </div>
                      <div className="col-12">
                        <h3 className='text-success'>Please Wait ,Were getting products Ready!! 😓</h3>
                      </div>
                    </div>
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

export default NotInStock
