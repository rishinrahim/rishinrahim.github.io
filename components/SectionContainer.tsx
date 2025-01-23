import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-xl px-3 sm:px-6 lg:max-w-4xl lg:px-0">{children}</section>
  )
}
