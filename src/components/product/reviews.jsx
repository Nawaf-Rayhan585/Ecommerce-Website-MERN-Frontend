import React from 'react'
import ProductStore from '../../store/ProductStore'
import StarRatings from 'react-star-ratings/build/star-ratings'
const ReviewList = () => {

    const {ReviewList} = ProductStore()

return (
    <div>
        <br />
        <hr />
        <br />

        <h3 className='text-center text-secondary'>Customer Reviews</h3>
        <ul className='list-group list-group-flush mt-4'>
            {
                ReviewList!==null?(ReviewList.map((item,i) => {
                    return (
                    <li key={i} className='list-group-item bg-dark mt-3 rounded shadow'>
                        <h6 className='text-light mt-3'><i class="bi bi-person-circle"></i> - {item['profile']['cus_name']}</h6>
                        <p className='text-white'>{item['des']}</p>
                        <StarRatings rating={parseFloat(item['rating'])} starRatedColor="gold" starDimension="15px" starSpacing="2px" />
                        <br />
                        <br />
                        <h6 className='text-light'> <i class="bi bi-hand-thumbs-up-fill"></i> 1 .. <i class="bi bi-hand-thumbs-down"></i> 0</h6>
                        <div className='mt-2'></div>
                    </li>)
                })):(<span>No Reviews To Display</span>)
            }
        </ul>
    </div>
)
}

export default ReviewList
