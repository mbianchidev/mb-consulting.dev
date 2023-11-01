/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9eFEoSh8kym
 */

export default function Component() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <main className="col-span-8">
        <article className="border-b border-gray-200 pb-4 mb-4">
          <h2 className="text-2xl font-bold">Article Title</h2>
          <p className="text-gray-500">Posted on October 31, 2023</p>
          <p className="text-gray-700">This is a brief paragraph from the article...</p>
          <a className="text-blue-500 hover:underline" href="#">
            Read more
          </a>
        </article>
        <article className="border-b border-gray-200 pb-4 mb-4">
          <h2 className="text-2xl font-bold">Article Title</h2>
          <p className="text-gray-500">Posted on October 30, 2023</p>
          <p className="text-gray-700">This is a brief paragraph from the article...</p>
          <a className="text-blue-500 hover:underline" href="#">
            Read more
          </a>
        </article>
      </main>
      <aside className="col-span-4 space-y-4">
        <input
          aria-label="Search articles"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Search articles..."
          type="search"
        />
        <section>
          <h3 className="font-bold text-xl">Categories</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a className="text-blue-500 hover:underline" href="#">
                Category 1
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:underline" href="#">
                Category 2
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:underline" href="#">
                Category 3
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="font-bold text-xl">Popular Articles</h3>
          <ul className="space-y-2">
            <li>
              <a className="text-blue-500 hover:underline" href="#">
                Popular Article 1
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:underline" href="#">
                Popular Article 2
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:underline" href="#">
                Popular Article 3
              </a>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  )
}
