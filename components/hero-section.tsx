"use client"

import { useEffect, useRef } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12">
      <AnimatedNoise opacity={0.03} />

      {/* Left vertical labels */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary -rotate-90 origin-left block whitespace-nowrap">
          VERIFY
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-6">
          <div className="relative w-20 h-20 md:w-28 md:h-28">
            <Image
              src="/images/logo.jpg"
              alt="nobodysms logo"
              fill
              className="object-contain"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        </div>

        <SplitFlapAudioProvider>
          <div className="relative">
            <SplitFlapText text="NOBODYSMS" speed={80} />
            <div className="mt-4">
              <SplitFlapMuteToggle />
            </div>
          </div>
        </SplitFlapAudioProvider>

        <h2 className="font-[var(--font-bebas)] text-primary/80 text-[clamp(1rem,3vw,2rem)] mt-4 tracking-wide">
          匿名短信验证平台
        </h2>

        <p className="mt-12 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
          即时接收短信验证码，虚拟号码覆盖全平台。无需个人信息，仅需 ¥0.36/条。
          NFT持有者享专属折扣，最高5折优惠。
        </p>

        <div className="mt-16 flex items-center gap-8 flex-wrap">
          <a
            href="https://nobodysms.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest"
          >
            <ScrambleTextOnHover text="立即登录" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="https://www.yuque.com/nobodysms/xlypsu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200 border-b border-muted-foreground/30 hover:border-primary pb-1"
          >
            使用教程
          </a>
          <a
            href="https://nobodysmsnft.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200 border-b border-muted-foreground/30 hover:border-primary pb-1"
          >
            NFT官网
          </a>
          <a
            href="https://opensea.io/collection/nobodysms"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200 border-b border-muted-foreground/30 hover:border-primary pb-1"
          >
            OpenSea
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 flex gap-12 flex-wrap">
          <div>
            <span className="font-[var(--font-bebas)] text-4xl md:text-5xl text-primary">¥0.36</span>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">每条短信</p>
          </div>
          <div>
            <span className="font-[var(--font-bebas)] text-4xl md:text-5xl text-primary">300</span>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">NFT总量</p>
          </div>
          <div>
            <span className="font-[var(--font-bebas)] text-4xl md:text-5xl text-primary">50%</span>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">最高折扣</p>
          </div>
        </div>
      </div>

      {/* Floating pixel art decoration */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <div className="border-2 border-primary/60 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-primary bg-background/80">
          v2.0 / Live Now
        </div>
      </div>

      {/* Animated GIF decoration - hidden on mobile */}
      <div className="hidden lg:block absolute bottom-20 right-40 w-64 h-40 opacity-80">
        <Image
          src="/images/e7-b4-a0-e6-9d-90.gif"
          alt="Pixel art band"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </section>
  )
}
