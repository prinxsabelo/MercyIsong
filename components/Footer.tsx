import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-xl p-6 items-center sm:px-28 text-white w-full flex space-x-16'>
            <div>
                <div>
                    Contact: +2348027267000
                </div>
                <div>
                    mercyisong@yahoo.co.uk
                </div>  
            </div>
            <div>
                © {new Date().getFullYear()} Mercy Isong Outreach Foundation
            </div>
    </div>  
  )
}

export default Footer