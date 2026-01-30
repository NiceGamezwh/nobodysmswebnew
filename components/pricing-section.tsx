"use client"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const pricingPlans = [
  {
    name: "普通会员",
    price: "9折",
    per: "充值优惠",
    description: "nobodysmsnft 普通持有者 (75%)",
    features: [
      "充值享9折优惠",
      "NFT持有者专属",
      "225个名额",
      "QQ群优先支持",
    ],
    popular: false,
    originalPrice: "¥0.36",
    discountPrice: "¥0.324",
  },
  {
    name: "高级会员",
    price: "8折",
    per: "充值优惠",
    description: "nobodysmsnft 高级持有者 (20%)",
    features: [
      "充值享8折优惠",
      "NFT持有者专属",
      "60个名额",
      "优先客服响应",
      "专属会员群",
    ],
    popular: true,
    originalPrice: "¥0.36",
    discountPrice: "¥0.288",
  },
  {
    name: "顶级会员",
    price: "5折",
    per: "充值优惠",
    description: "nobodysmsnft 顶级持有者 (5%)",
    features: [
      "充值享5折优惠",
      "NFT持有者专属",
      "仅15个名额",
      "一对一客服",
      "专属定制服务",
      "优先新功能体验",
    ],
    popular: false,
    originalPrice: "¥0.36",
    discountPrice: "¥0.18",
  },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

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
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">03 / NFT会员</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">NFT MEMBERSHIP</h2>
        <p className="mt-4 max-w-lg font-mono text-sm text-muted-foreground leading-relaxed">
          持有 nobodysmsnft 享受专属充值优惠。基础价格 ¥0.36/条，会员专享折扣。
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href="https://nobodysmsnft.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-xs text-primary hover:text-primary/80 transition-colors border-b border-primary/50"
          >
            NFT官网 →
          </a>
          <a
            href="https://opensea.io/collection/nobodysms"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-xs text-primary hover:text-primary/80 transition-colors border-b border-primary/50"
          >
            OpenSea →
          </a>
        </div>
        <p className="mt-4 font-mono text-[10px] text-muted-foreground">
          合约地址: <span className="text-foreground/60 break-all">0xd75F784743A2281e129f8b837EF9192eB1eEd5Cd</span>
        </p>
      </div>

      {/* Pricing cards */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>

      {/* Payment methods */}
      <div className="mt-16 pt-8 border-t border-border/30">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
          支付方式
        </p>
        <div className="flex flex-wrap gap-4">
          {["支付宝", "微信支付", "银行卡"].map((method) => (
            <span
              key={method}
              className="px-4 py-2 border border-border/50 font-mono text-xs text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors duration-200"
            >
              {method}
            </span>
          ))}
        </div>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          普通用户价格: <span className="text-primary">¥0.36/条</span>
        </p>
      </div>
    </section>
  )
}

function PricingCard({
  plan,
}: {
  plan: {
    name: string
    price: string
    per: string
    description: string
    features: string[]
    popular: boolean
    originalPrice: string
    discountPrice: string
  }
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className={cn(
        "relative border-2 p-8 transition-all duration-500",
        plan.popular
          ? "border-primary bg-primary/5"
          : "border-border/40 hover:border-primary/60",
        isHovered && !plan.popular && "border-primary/60",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-widest">
          Most Popular
        </div>
      )}

      {/* Plan name */}
      <h3 className="font-[var(--font-bebas)] text-3xl tracking-tight mb-2">{plan.name}</h3>
      <p className="font-mono text-xs text-muted-foreground mb-6">{plan.description}</p>

      {/* Price */}
      <div className="mb-8">
        <span className={cn(
          "font-[var(--font-bebas)] text-5xl md:text-6xl tracking-tight",
          plan.popular ? "text-primary" : "text-foreground"
        )}>
          {plan.price}
        </span>
        <span className="font-mono text-xs text-muted-foreground ml-2">{plan.per}</span>
        <div className="mt-2 font-mono text-xs">
          <span className="text-muted-foreground line-through">{plan.originalPrice}</span>
          <span className="text-primary ml-2">{plan.discountPrice}/条</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="w-2 h-2 bg-primary" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
            <span className="font-mono text-xs text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <a
        href="https://nobodysmsnft.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-full py-3 font-mono text-xs uppercase tracking-widest transition-all duration-200 block text-center",
          plan.popular
            ? "pixel-button"
            : "border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary"
        )}
      >
        获取 NFT
      </a>

      {/* Corner decorations for popular */}
      {plan.popular && (
        <>
          <div className="absolute top-0 right-0 w-6 h-6">
            <div className="absolute top-0 right-0 w-full h-1 bg-primary" />
            <div className="absolute top-0 right-0 w-1 h-full bg-primary" />
          </div>
          <div className="absolute bottom-0 left-0 w-6 h-6">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
            <div className="absolute bottom-0 left-0 w-1 h-full bg-primary" />
          </div>
        </>
      )}
    </article>
  )
}
