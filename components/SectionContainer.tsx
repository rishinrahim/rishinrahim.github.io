import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-xl px-3 sm:px-7 lg:max-w-5xl lg:px-0">{children}</section>
  )
}
