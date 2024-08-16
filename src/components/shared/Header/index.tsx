'use client'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Sidebar } from 'primereact/sidebar'
import { Routes } from './Routes'
import Image from 'next/image'
import './style.model.css'

export const Header = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <header className="absolute top-0 z-20 hidden max-h-8 min-h-8 w-full items-center justify-between gap-3 bg-primary/30 px-2 sm:flex">
        <Image
          src={'/assets/icons/Logo-jurassic.svg'}
          width={250}
          height={150}
          alt="Logo de jurassic"
          quality={100}
        />
        <ul className="flex gap-2 ">
          <Routes setVisibleLeft={setVisible} />
        </ul>
        <Image
          src={'/assets/icons/logo-Daniel.svg'}
          width={150}
          height={100}
          alt="Logo de danielcreactor"
          quality={100}
        />
      </header>
      <header className="absolute top-0 z-20 flex max-h-8 min-h-8 w-full items-center justify-between bg-primary/30 px-2 sm:hidden">
        <GiHamburgerMenu
          className="h-6 w-6 cursor-pointer fill-current stroke-1 dark:fill-slate-100"
          onClick={() => setVisible(true)}
        />
        <Image
          src={'/assets/icons/Logo-jurassic.svg'}
          width={200}
          height={150}
          alt="Logo de jurassic"
          quality={100}
        />
        <div></div>
      </header>

      <Sidebar
        className="grid min-h-full w-64 flex-col bg-primary px-2 sm:hidden"
        visible={visible}
        position="left"
        onHide={() => setVisible(false)}
      >
        <Image
          className="mx-auto self-center py-1"
          src={'/assets/icons/Logo-jurassic.svg'}
          width={300}
          height={100}
          alt="Logo de jurassic"
          quality={100}
        />
        <div className="mb-2 h-[2px] bg-slate-400"></div>
        <ul className="grid gap-1 ">
          <Routes setVisibleLeft={setVisible} />
        </ul>
      </Sidebar>
    </>
  )
}
