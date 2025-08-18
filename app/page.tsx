import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Supreet Aradhya Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a student at the University of Missouri - Columbia. I am pursuing a bachelors degree in Information Technology and a minor in Computational Neuroscience.
            I have a passion for technology, as I often find myself pursing personal projects based on what I learn on my own or in class, and sometimes what I learn in work.
            The experience of creating what's on my mind and the breakthroughs on solving problems keep me coming back to pursing projects.
            Below, I outline some of my projects which show the progression of my skills and development over time.
        `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
