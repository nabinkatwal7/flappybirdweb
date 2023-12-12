"use client"
import React from 'react'
import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DashboardWrapper = () => {

    useLayoutEffect(() => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.box',
                start: '200 60%',
                end: '800 40%',
                scrub: true,
                markers: true,
            }
        })
        tl.to('.box', {
            x: 400,
        })
    },[])

  return (
    <div className='dashboard h-[100vh] relative' >
        <div className='box absolute w-[600px] h-[600px] bg-purple-500 -left-[400px] ' ></div>
        
    </div>
  )
}

export default DashboardWrapper