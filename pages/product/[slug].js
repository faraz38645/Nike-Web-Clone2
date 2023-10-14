import React from 'react'
import Link from 'next/link'
import { IoHeartEmpty } from 'react-icons/io'
import { IoMdHeartEmpty } from 'react-icons/io'
import Wrapper from '@/components/wrapper/Wrapper'
import ProductDetailsCarousel from '@/components/productdetailscarousel/ProductDetailsCarousel'

const productDetails = () => {
  return (
    <div className='w-full md:py-20 '>
        <Wrapper childern={
            <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                    <ProductDetailsCarousel/>
                </div>
                
                {/* right column start */}
                <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Jordan Retro 6 G
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            Men &apos;s Running Shoes
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : $12 99.00
                            </p>
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer' >UK 6</div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer' >UK 7</div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer' >UK 8</div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer' >UK 9</div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer' >UK 10</div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed hover:border-black/[0.1] opacity-50' >UK 11</div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed hover:border-black/[0.1] opacity-50' >UK 12</div>
                            </div>
                            {/* SIZE END */}
                            

                             {/* ADD TO CART BUTTON START */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}

                    </div>
                    {/* right column end */}
            </div>
            
        }/>
    </div>
  )
}

export default productDetails