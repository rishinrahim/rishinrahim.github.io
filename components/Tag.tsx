import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  className?: string
}

const Tag = ({ text, className = '' }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700"
    >
      {text}
    </Link>
  )
}

export default Tag
