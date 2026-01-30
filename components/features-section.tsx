"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: "01",
    title: "极速送达",
    description: "验证码秒级送达，实时消息转发，确保您不错过任何验证请求。",
    span: "col-span-2 row-span-2",
  },
  {
    icon: "02",
    title: "隐私保护",
    description: "无需个人信息，保护您的隐私安全。",
    span: "col-span-1 row-span-1",
  },
  {
    icon: "03",
    title: "海量号码",
    description: "丰富的虚拟号码资源，随时可用，满足您的各类验证需求。",
    span: "col-span-1 row-span-2",
  },
  {
    icon: "04",
    title: "全平台支持",
    description: "支持所有主流平台，覆盖社交、电商、游戏等各个领域。",
    span: "col-span-1 row-span-1",
  },
  {
    icon: "05",
    title: "NFT会员权益",
    description: "持有nobodysmsnft享受充值折扣，最高可享5折优惠。仅300个NFT名额。",
    span: "col-span-2 row-span-1",
  },
  {
    icon: "06",
    title: "超低价格",
    description: "仅需 ¥0.36/条，会员更享专属折扣。支持支付宝、微信支付。",
    span: "col-span-1 row-span-1",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = gridRef.current?.querySelectorAll("article")
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="features" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16 flex items-end justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">01 / 特色功能</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">WHY CHOOSE US</h2>
        </div>
        <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          为隐私而生，为可靠而设计。
        </p>
      </div>

      {/* Asymmetric grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]"
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} persistHover={index === 0} />
        ))}
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  index,
  persistHover = false,
}: {
  feature: {
    icon: string
    title: string
    description: string
    span: string
  }
  index: number
  persistHover?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const [isScrollActive, setIsScrollActive] = useState(false)

  useEffect(() => {
    if (!persistHover || !cardRef.current) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        onEnter: () => setIsScrollActive(true),
      })
    }, cardRef)

    return () => ctx.revert()
  }, [persistHover])

  const isActive = isHovered || isScrollActive

  return (
    <article
      ref={cardRef}
      className={cn(
        "group relative border-2 border-border/40 p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden",
        feature.span,
        isActive && "border-primary/60",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pixel grid background on hover */}
      <div
        className={cn(
          "absolute inset-0 pixel-grid transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
          {feature.icon}
        </span>
        <h3
          className={cn(
            "mt-3 font-[var(--font-bebas)] text-2xl md:text-4xl tracking-tight transition-colors duration-300",
            isActive ? "text-primary" : "text-foreground",
          )}
        >
          {feature.title}
        </h3>
      </div>

      {/* Description */}
      <div className="relative z-10">
        <p
          className={cn(
            "font-mono text-xs text-muted-foreground leading-relaxed transition-all duration-500 max-w-[280px]",
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
        >
          {feature.description}
        </p>
      </div>

      {/* Corner decoration */}
      <div
        className={cn(
          "absolute top-0 right-0 w-4 h-4 transition-all duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute top-0 right-0 w-full h-1 bg-primary" />
        <div className="absolute top-0 right-0 w-1 h-full bg-primary" />
      </div>
      <div
        className={cn(
          "absolute bottom-0 left-0 w-4 h-4 transition-all duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
        <div className="absolute bottom-0 left-0 w-1 h-full bg-primary" />
      </div>
    </article>
  )
}
