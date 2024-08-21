'use client'

import { cn } from 'app/outComponents/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: any[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        )
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '180s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller max-w-[300px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[980px]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-2 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items?.map((item) => (
          <>
            <Link key={item.id} href={`/${item.Name}`}>
              <section className="max-w-[315px] rounded-2xl bg-gradient-to-br from-[#255f72] to-[#062631] p-1">
                <article className="relavite grid justify-items-center">
                  <Image
                    src={item.img.full}
                    width={300}
                    height={300}
                    alt={item.Name}
                    quality={100}
                    className="rounded-2xl shadow-md shadow-segundary"
                  />
                  <h3 className="absolute text-center top-[59%] font-title text-2xl font-semibold">
                    {item.Name}
                  </h3>
                </article>
                <p className="text-center font-text text-lg font-normal pt-3">
                  <MDXRemote source={item.description} />
                </p>
              </section>
            </Link>
          </>
        ))}
      </ul>
    </div>
  )
}
