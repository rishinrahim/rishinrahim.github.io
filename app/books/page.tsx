import booksData from '@/data/booksData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Books' })

export default function Books() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Books
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This list comprises the books I've read, each accompanied by a brief review. While I may
          not consider myself an avid reader, I am keenly interested in delving into books whenever
          I find some spare time. My goal is to expand the number of books I've read and enhance the
          comprehensiveness of this list.
        </p>
      </div>

      <div className="gap-2 pt-10 sm:grid sm:items-baseline xl:grid-cols-1">
        {booksData.map((book, index) => (
          <>
            {/* <div className="sm:flex-col text-sm  leading-6 text-gray-500 dark:text-gray-400">{book.ReadOn}</div> */}
            <div key={book.title} className="text-sm sm:flex-col">
              <strong>{book.title}</strong> by {book.author}({book.publishedYear})
              <span className="text-gray-600 dark:text-gray-300">:{book.review}</span>{' '}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
