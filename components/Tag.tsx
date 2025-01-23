import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string;
  className?: string;

}

const Tag = ({ text, className = '' }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
    >
      {text}
    </Link>
  )
}



export default Tag
