import React from 'react'
import Carousal from './Components/CarousalItems/Carousal'
import Category from './Components/Category'
import Hotdeals from './Components/Hotdeals/Hotdeals'
import Featured from './Components/FeaturedProducts/Featured'
import Special from './Components/Special Offer/Special'
import Brands from './Components/FeaturedBrands/Brands'

const page = () => {
  return (
    <div className='mt-20 lg:mx-40 md:mx-20 sm:mx-0'>
      <Carousal />
      <Category />
      <Hotdeals />
      <Featured />
      <Special />
      <Brands />
    </div>
  )
}

export default page