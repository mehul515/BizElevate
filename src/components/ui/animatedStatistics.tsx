"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedStatisticProps {
  end: number
  duration?: number
  suffix?: string
}

export function AnimatedStatistic({ end, duration = 2000, suffix = "" }: AnimatedStatisticProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = end / (duration / 16) // 60 FPS

      const timer = setInterval(() => {
        start += increment
        setCount(Math.min(Math.floor(start), end))

        if (start >= end) {
          clearInterval(timer)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

