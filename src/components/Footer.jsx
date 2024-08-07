import React from 'react'
import Icons from '../common/Icons'

const Footer = () => {
    return (
  <>
          <div className="container pt-14">
            <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-4/12 lg:w-3/12 px-3">
                    <a href="#">
                        <Icons icon="FooterLogo" />
                    </a>
                    <a href="#" className='flex items-center gap-2 mt-5 capitalize font-Plus text-base leading-6'>
                        <Icons icon="Mail" />
                        help@Dealzip.com
                    </a>
                    <a href="#" className='flex items-center gap-2 mt-4 capitalize font-Plus text-base leading-6'>
                        <Icons icon="Telephone" />
                        +1 234 456 678 89
                    </a>
                    <div className="flex items-center gap-2 mt-6">
                        <a href="">
                            <Icons icon="Facebook" />
                        </a>
                        <a href="">
                            <Icons icon="Instagram" />
                        </a>
                        <a href="">
                            <Icons icon="Twitter" />
                        </a>
                        <a href="">
                            <Icons icon="LinkedIn" />
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-8/12 lg:w-5/12 mt-6 md:mt-0 flex max-sm:justify-between sm:gap-[100px] md:gap-[50px] xl:justify-between px-3">
                    <ul className='flex flex-col gap-3'>
                        <li className='mb-2 font-semibold text-ebony_clay text-xl leading-8 font-Plus capitalize'>links</li>
                        <li><a href="" className='text-base leading-6 capitalize font-Plus text-ebony_clay font-normal'>home</a></li>
                        <li><a href="" className='text-base leading-6 capitalize font-Plus text-ebony_clay font-normal'>about us</a></li>
                        <li><a href="" className='text-base leading-6 capitalize font-Plus text-ebony_clay font-normal'>Services</a></li>
                        <li><a href="" className='text-base leading-6 capitalize font-Plus text-ebony_clay font-normal'>Showcase</a></li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='mb-2 font-semibold text-ebony_clay text-xl leading-8 font-Plus capitalize'>legal</li>
                        <li><a href="" className='text-base leading-6 capitalize font-Plus text-ebony_clay font-normal'>terms of use</a></li>
                        <li><a href="" className='text-base leading-6 capitalize font-Plus text-ebony_clay font-normal'>privacy policy</a></li>
                        <li><a href="" className='text-base leading-6 capitalize font-Plus text-ebony_clay font-normal'>cookie policy</a></li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='mb-2 font-semibold text-ebony_clay text-xl leading-8 font-Plus capitalize'>product</li>
                        <li><a href="" className='text-base leading-6 capitalize font-Plus text-ebony_clay font-normal'>take tour</a></li>
                        <li><a href="" className='text-base leading-6 capitalize font-Plus text-ebony_clay font-normal'>live chat</a></li>
                        <li><a href="" className='text-base leading-6 capitalize font-Plus text-ebony_clay font-normal'>reveiws</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-6/12 lg:w-4/12 mt-6 lg:mt-0 flex lg:justify-end px-3">
                    <div className="flex flex-col">
                        <p className='font-semibold text-ebony_clay text-xl leading-8 font-Plus capitalize'>Newsletter</p>
                        <p className='text-base leading-6 capitalize font-Plus text-ebony_clay font-normal pt-5 pb-3'>Stay up to date</p>
                        <form action="" className='shadow-mail_box border border-fade_black flex items-center min-h-[74px] max-w-[340px] rounded-[62px] pe-[10px]'>
                            <input type="email" placeholder='Your email' className=' bg-transparent ps-6 outline-none border-none w-full' />
                            <button className=' max-w-[160px] w-full text-white text-base font-semibold font-Plus bg-red py-4 rounded-[62px]'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-custom-radial from-dove_gray via-dove_gray to-white mt-11 w-full h-[1px]">
       </div>
        <p className='leading-6 text-base font-Plus text-ebony_clay py-4 px-6 text-center'>Copyright 2024 ceramicsolutions.com all rights reserved</p>
  </>
    )
}

export default Footer