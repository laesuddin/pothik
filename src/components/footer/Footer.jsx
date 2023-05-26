import React from 'react'
import './footer.css'
import fa from '../../assets/facebook.svg'
import tw from '../../assets/twitter.svg'
import ins from '../../assets/instagram.svg'


const Footer = () => {
  return (
    <footer className="bg-[#414b4f]">
    <div className="text-slate-300 text-sm flex gap-8 py-12 pl-16">

      <div className="w-1/4">
        <h3 className=" text-slate-100 text-xl font-semibold mb-4 uppercase">About Us</h3>
        <p >This is Photoshop's version of Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit.</p>
      </div>


      <div className="text-[#ADB0B1] w-1/4">
        <h3 className="text-slate-100 text-xl font-semibold mb-4 uppercase">Quick Links</h3>
        <ul className="">
          <li className="border-b border-[#ADB0B1] font-medium my-2 pb-1"><i class="fa-solid fa-greater-than fa-2xs"></i>&nbsp; Book a tour</li>
          <li className="border-b border-[#ADB0B1] font-medium my-2 pb-1"><i class="fa-solid fa-greater-than fa-2xs"></i>&nbsp; Your tours</li>
          <li className="border-b border-[#ADB0B1] font-medium my-2 pb-1"><i class="fa-solid fa-greater-than fa-2xs"></i>&nbsp; Upcoming Events</li>
        </ul>
      </div>


      <div className="text-[#ADB0B1] w-1/4">
        <h3 className="text-slate-100 text-xl font-semibold mb-4 uppercase">Contact Us</h3>
        <ul>
          <li className="font-medium my-2 text-[#ADB0B1]"><i class="fa-sharp fa-solid fa-location-dot"></i> &nbsp;Notun Bazar, Vatara, Dhaka-1212</li>
          <li className="font-medium my-2 text-[#ADB0B1]"><i class="fa-solid fa-phone"></i> &nbsp;+880 xxxx xxx</li>
          <li className="font-medium my-2 text-[#ADB0B1]"><i class="fa-solid fa-mobile"></i> &nbsp;+880 xxxx xxx</li>
          <li className="font-medium my-2 text-[#ADB0B1]"><i class="fa-solid fa-envelope"></i> &nbsp;info@pothikbd.com</li>
        </ul>
      </div>


      <div className="w-1/4">
        <h3 className="text-slate-100 text-xl font-semibold mb-4 uppercase">Social Network</h3>
        <ul className="flex gap-y-6">
            <img src={fa} className='fa'/>
            <img src={tw} className='fa fa-mar'/>
            <img src={ins} className='fa fa-mar'/>
        </ul>
      </div>
    </div>

    <div className="bg-[#5E676B] flex justify-center items-center py-4 uppercase pr-16">
      <p className="text-[#DBDBDB] text-xs">Copyright 2022 by </p>
      <h2 className="text-md font-bold text-[#D7FFC9] text-sm">&nbsp;
      Pothik <i className="fa-solid fa-bus-simple bus_icon"></i>
    </h2>
    </div>
  </footer>
  )
}

export default Footer