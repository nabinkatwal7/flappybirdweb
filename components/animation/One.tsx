"use client"
import React, { useEffect, useLayoutEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const One = () => {
    const lenis = new Lenis() //smooth scrolling lib init

    useLayoutEffect(() => {
        let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.animated-element',
            start: 'clamp(top 70%)',
            end: 'bottom 30%',
            scrub:true,
            markers: true,
            
        }
    })
        let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.animated-element-second',
            start: 'top 70%',
            end: 'bottom 30%',
            scrub:true,
            markers: true
        }
    })
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.animated-element-third',
            start: 'top 70%',
            end: 'bottom 30%',
            scrub:true,
            markers: true
        }
    })
        tl1.to('.animated-element', {
        x:800,
    }).to('.animated-element', {
        y:400,
    })
        tl2.to('.animated-element-second', {
        x:800,
        y:100
    })
    tl3.to('.animated-element-third', {
        x:1000,
    }).to('.animated-element-third', {
        y:-200,
    })
    },[])

    

    // for smooth scroll
    // lenis.on('scroll', (e:any) => {
    //     console.log(e)
    // })

    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  return (
    <div className='one' >
        <div className='spacer' ></div>
        <div className='spacer'>
            <div className='animated-element text-white' >
                <img src='https://yt3.googleusercontent.com/TDwtV-eV1UitynrmZjOnnlFCsNeoNYG3z15fDsr4P8xJkSUqWhFYC6a77namw4P0TiYS2No7=s900-c-k-c0x00ffffff-no-rj' />
            </div>
            <div className='animated-element-second text-white' >
                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/190px-FC_Barcelona_%28crest%29.svg.png' />
            </div>
            <div className='animated-element-third text-white' >
                <img className='object-fill w-[300px] h-[304px]' src='https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/640px-Chelsea_FC.svg.png' />
            </div>
        </div>
        <div className='spacer' ></div>
    </div>
  )
}
