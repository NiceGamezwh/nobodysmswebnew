"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      number: "01",
      titleParts: [
        { text: "选择", highlight: true },
        { text: "号码", highlight: false },
      ],
      description: "从海量虚拟号码池中选择，覆盖各类主流平台验证需求。",
      align: "left",
    },
    {
      number: "02",
      titleParts: [
        { text: "充值", highlight: false },
        { text: "支付", highlight: true },
      ],
      description: "支持支付宝、微信支付，仅需 ¥0.36/条。NFT会员享专属折扣。",
      align: "right",
    },
    {
      number: "03",
      titleParts: [
        { text: "接收", highlight: true },
        { text: "验证码", highlight: false },
      ],
      description: "使用号码进行验证，验证码实时送达到您的控制台。",
      align: "left",
    },
    {
      number: "04",
      titleParts: [
        { text: "保持", highlight: false },
        { text: "匿名", highlight: true },
      ],
      description: "您的身份始终受到保护，无痕迹、无日志、无担忧。",
      align: "right",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !stepsRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      const articles = stepsRef.current?.querySelectorAll("article")
      articles?.forEach((article, index) => {
        const isRight = steps[index].align === "right"
        gsap.from(article, {
          x: isRight ? 80 : -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: article,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">02 / 使用流程</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">HOW IT WORKS</h2>
      </div>

      {/* Staggered steps */}
      <div ref={stepsRef} className="space-y-24 md:space-y-32">
        {steps.map((step, index) => (
          <article
            key={index}
            className={`flex flex-col ${
              step.align === "right" ? "items-end text-right" : "items-start text-left"
            }`}
          >
            {/* Step number label */}
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
              Step {step.number}
            </span>

            <h3 className="font-[var(--font-bebas)] text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none">
              {step.titleParts.map((part, i) =>
                part.highlight ? (
                  <HighlightText key={i} parallaxSpeed={0.6}>
                    {part.text}
                  </HighlightText>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </h3>

            {/* Description */}
            <p className="mt-6 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>

            {/* Decorative pixel line */}
            <div className={`mt-8 h-1 bg-primary/60 w-16 md:w-32 ${step.align === "right" ? "mr-0" : "ml-0"}`} />
          </article>
        ))}
      </div>
    </section>
  )
}
