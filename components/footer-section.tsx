"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
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
      }

      if (gridRef.current) {
        const columns = gridRef.current.querySelectorAll(":scope > div")
        gsap.from(columns, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="footer"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-primary/20"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16 flex items-start gap-6">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="nobodysms logo"
            fill
            className="object-contain"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">04 / 联系我们</span>
          <h2 className="mt-2 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">GET IN TOUCH</h2>
        </div>
      </div>

      {/* Multi-column layout */}
      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
        {/* Products */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary mb-4">产品服务</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80 hover:text-primary transition-colors cursor-pointer">短信验证</li>
            <li className="font-mono text-xs text-foreground/80 hover:text-primary transition-colors cursor-pointer">虚拟号码</li>
            <li className="font-mono text-xs text-foreground/80 hover:text-primary transition-colors cursor-pointer">NFT会员</li>
          </ul>
        </div>

        {/* Pricing */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary mb-4">价格说明</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">普通用户 ¥0.36/条</li>
            <li className="font-mono text-xs text-foreground/80">普通会员 9折</li>
            <li className="font-mono text-xs text-foreground/80">高级会员 8折</li>
            <li className="font-mono text-xs text-foreground/80">顶级会员 5折</li>
          </ul>
        </div>

        {/* Platforms */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary mb-4">覆盖领域</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">社交平台</li>
            <li className="font-mono text-xs text-foreground/80">电商购物</li>
            <li className="font-mono text-xs text-foreground/80">游戏娱乐</li>
            <li className="font-mono text-xs text-foreground/80">更多领域</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary mb-4">快速链接</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://nobodysms.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                登录平台
              </a>
            </li>
            <li>
              <a
                href="https://www.yuque.com/nobodysms/xlypsu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                使用教程
              </a>
            </li>
            <li>
              <a
                href="https://nobodysmsnft.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                NFT官网
              </a>
            </li>
            <li>
              <a
                href="https://opensea.io/collection/nobodysms"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                OpenSea
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary mb-4">联系我们</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://qm.qq.com/q/oqPmRqD9eM"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                客服QQ
              </a>
            </li>
            <li>
              <a
                href="https://qm.qq.com/q/olY9eOkg26"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                官方QQ群
              </a>
            </li>
          </ul>
        </div>

        {/* Status */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary mb-4">系统状态</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 animate-pulse" />
              <span className="font-mono text-xs text-foreground/80">系统正常运行</span>
            </li>
            <li className="font-mono text-xs text-foreground/80">99.9% 在线率</li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        ref={footerRef}
        className="mt-24 pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          © 2026 nobodysms. All rights reserved.
        </p>
        <p className="font-mono text-[10px] text-primary/80">
          匿名接码，安全无忧。
        </p>
      </div>
    </section>
  )
}
