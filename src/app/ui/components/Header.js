import React, { useEffect, useState } from 'react'

const Header = ({ modal, setModal, setVerify }) => {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      scrollPosition > 0 ? setScrolled(true) : setScrolled(false)
    }
    window.addEventListener('scroll', handleScroll);
  })

  const handleModal = (verify) => {
    setVerify(verify)
    setModal(!modal)
  }

  return (
    <header className={`${scrolled ? 'bg-[#ffffff90] backdrop-blur-[4px] z-50' : ''} py-[24px] px-[48px] sm:grid-cols-2 grid lg:grid-cols-3 items-center sticky top-0`}>
       <h1 className='mr-auto text-[36px] text-blue-600 font-semibold hover:cursor-pointer'>Vocabloom</h1>
      <nav className='sm:hidden lg:inline'>
        <ul className='flex justify-center text-blue-600 text-lg'>
          <li className='pt-[12px] px-3 pb-[6px] font-semibold transition-all duration-300 hover:cursor-pointer hover:shadow-[0_2px] hover:shadow-blue-600'><a href='#about'>About</a></li>
          <li className='ml-4 mr-4 pt-[12px] px-3 pb-[6px] font-semibold transition-all duration-300 hover:cursor-pointer hover:shadow-[0_2px] hover:shadow-blue-600'><a href='#features'>Features</a></li>
          <li className='pt-[12px] px-3 pb-[6px] font-semibold transition-all duration-300 hover:cursor-pointer hover:shadow-[0_2px] hover:shadow-blue-600'><a href='#solutions'>Solutions</a></li>
        </ul>
      </nav>
      <div className='justify-self-end lg:block md:flex '>
        <button onClick={() => handleModal(false)} className='py-[12px] px-[36px] text-blue-600 font-semibold sm:text-sm md:text-base border-2 border-transparent rounded-3xl transition-all duration-300 mr-3 hover:border-2 hover:border-blue-600'>Login &rarr;</button>
        <button onClick={() => handleModal(true)} className='py-[12px] px-[36px] bg-blue-600 font-semibold text-white sm:text-sm md:text-base border rounded-3xl transition-all duration-300 hover:bg-blue-700'>Sıgn Up</button>
      </div>
    </header>
  )
}

export default Header