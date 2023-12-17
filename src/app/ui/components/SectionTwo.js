import React from 'react'
import Image from 'next/image'
import companyOne from '../../../../public/companies/company-0.webp'
import companyTwo from '../../../../public/companies/company-1.webp'
import companyThree from '../../../../public/companies/company-2.webp'
import companyFour from '../../../../public/companies/company-3.webp'
import companyFive from '../../../../public/companies/company-4.webp'
import companySix from '../../../../public/companies/company-5.webp'

const SectionTwo = () => {
  return (
    <section className='py-24 sm:px-4'>
        <div className='xl:max-w-screen-xl lg:max-w-screen-lg m-auto px-6'>
            <p className='text-center'>Powering incredible app experiences at the world’s best companies</p>
            <div className='mt-20 sm:grid sm:grid-cols-3 sm:justify-items-center sm:gap-y-6 md:flex justify-between'>              
                    <Image alt='image' src={companyOne}/>                         
                    <Image alt='image' src={companyTwo}/>                
                    <Image alt='image' src={companyThree}/>             
                    <Image alt='image' src={companyFour}/>                           
                    <Image alt='image' src={companyFive}/>                              
                    <Image alt='image' src={companySix}/>
            </div>
        </div>
    </section>
  )
}

export default SectionTwo