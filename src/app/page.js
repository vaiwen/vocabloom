"use client"

import Header from "./ui/components/Header";
import Hero from "./ui/components/Hero";
import SectionOne from "./ui/components/SectionOne";
import SectionTwo from "./ui/components/SectionTwo";
import About from "./ui/components/About";
import Features from "./ui/components/Features";
import Solutions from "./ui/components/Solutions";
import Footer from "./ui/components/Footer";
import Modal from "./ui/components/Modal";

import { useState, useEffect } from "react";

import { FaRegArrowAltCircleUp } from "react-icons/fa";


export default function Home() {

  useEffect(() => {
    document.body.style.overflow = 'scroll'
  })

  const [verify, setVerify] = useState(false)
  const [modal, setModal] = useState(false)

  return (
    <>
      <Header modal={modal} setModal={setModal} setVerify={setVerify} />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <About />
      <Features />
      <Solutions />
      <hr />
      <Footer />
      {modal && <Modal modal={modal} setModal={setModal} verify={verify} />}
      {!modal && <a href='#' className='p-3 rounded-full bg-blue-600 fixed bottom-0 right-0 animate-bounce'><FaRegArrowAltCircleUp size={30} className='fill-white' /></a>}
    </>
  )
}
