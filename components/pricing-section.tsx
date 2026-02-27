"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const membershipFeatures = [
  "充值享永久6折优惠",
  "一次购买，终身有效",
  "邀请返利: 下级消费5%返还",
  "邀请奖励: 双方各得¥3",
  "优先客服响应",
  "新功能优先体验",
  "专属定制服务",
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardRef.current) return

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

      gsap.fromTo(
        cardRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">03 / 永久会员</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">MEMBERSHIP</h2>
        <p className="mt-4 max-w-lg font-mono text-sm text-muted-foreground leading-relaxed">
          一次购买，永久享受充值6折优惠。基础价格 ¥0.36/条，会员仅需 ¥0.216/条。
        </p>
      </div>

      {/* Single membership card */}
      <div ref={cardRef} className="max-w-xl">
        <article className="relative border-2 border-primary bg-primary/5 p-8 md:p-12">
          {/* Badge */}
          <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-widest">
            Lifetime
          </div>

          {/* Plan name */}
          <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-2">永久会员</h3>
          <p className="font-mono text-xs text-muted-foreground mb-8">一次付费，终身有效，无需续费</p>

          {/* Price */}
          <div className="mb-10">
            <span className="font-[var(--font-bebas)] text-6xl md:text-8xl tracking-tight text-primary">
              ¥99
            </span>
            <span className="font-mono text-xs text-muted-foreground ml-3">一次性付费</span>
            <div className="mt-3 font-mono text-xs">
              <span className="text-muted-foreground line-through">¥0.36/条</span>
              <span className="text-primary ml-2">¥0.216/条 (6折)</span>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-10">
            {membershipFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary flex-shrink-0" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
                <span className="font-mono text-xs text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <a
            href="https://ur.alipay.com/_6zXEVOzmKeWhLv9Z8QRKRU"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button w-full py-3 font-mono text-xs uppercase tracking-widest block text-center"
          >
            立即开通
          </a>

          {/* Note */}
          <p className="mt-6 font-mono text-[10px] text-muted-foreground leading-relaxed">
            充值时请备注您的平台账号和联系QQ，以便我们为您开通会员权益。
          </p>

          {/* Invite rules */}
          <div className="mt-6 pt-6 border-t border-primary/20">
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">邀请机制</p>
            <ul className="space-y-2">
              <li className="font-mono text-[10px] text-muted-foreground leading-relaxed flex items-start gap-2">
                <span className="text-primary mt-0.5 flex-shrink-0">{'>'}</span>
                <span>邀请新用户完成首次充值后，您和被邀请用户账户各得 <span className="text-primary">¥3</span> 奖励</span>
              </li>
              <li className="font-mono text-[10px] text-muted-foreground leading-relaxed flex items-start gap-2">
                <span className="text-primary mt-0.5 flex-shrink-0">{'>'}</span>
                <span>下级用户每次消费金额的 <span className="text-primary">5%</span> 将自动返还至您的账户</span>
              </li>
              <li className="font-mono text-[10px] text-muted-foreground leading-relaxed flex items-start gap-2">
                <span className="text-primary mt-0.5 flex-shrink-0">{'!'}</span>
                <span>邀请奖励需经管理员审核后发放，严禁冒充新用户等违规行为，违规将不予通过</span>
              </li>
            </ul>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-6 h-6">
            <div className="absolute top-0 right-0 w-full h-1 bg-primary" />
            <div className="absolute top-0 right-0 w-1 h-full bg-primary" />
          </div>
          <div className="absolute bottom-0 left-0 w-6 h-6">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
            <div className="absolute bottom-0 left-0 w-1 h-full bg-primary" />
          </div>
        </article>
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
          普通用户价格: <span className="text-primary">¥0.36/条</span> | 会员价格: <span className="text-primary">¥0.216/条</span>
        </p>
      </div>
    </section>
  )
}
