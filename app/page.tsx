import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Supreet Aradhya Portfolio
      </h1>
      <p className="mb-4">
        I am a student at the University of Missouri – Columbia, pursuing a Bachelor’s degree in Information Technology with a minor in Computational Neuroscience.
          I have a strong passion for technology and enjoy working on personal projects inspired by what I learn in class, at work, or through independent study.
          Since I was a kid, I've been a bit of a tinker. I'd always take on projects to create something new, or fix something broken.
          The process of building new ideas and overcoming challenges continually motivates me to take on new projects. My interests are diverse.
          I am always open to a challenge and trying something new.
          <br />
          Feel free to explore my <a href="https://github.com/ItsNotRock3tSci3nc3" target="_blank" rel="noopener noreferrer"><span className="underline">GitHub</span></a> and view my <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"><span className="underline">resume</span></a> to learn more about my work.
          <br />
          Want to get in touch? You can reach me at <a href="mailto:aradhyasupreet@gmail.com"><span className="underline">aradhyasupreet@gmail.com</span></a>.
        </p>
      <div className="my-8">
        {/*<BlogPosts />*/}
      </div>
    </section>
  )
}
