import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Your Name</h1>
        <h2 className="text-2xl mb-4">Software Developer | Data Scientist | Machine Learning Engineer</h2>
        <p className="text-xl mb-6">Turning data into actionable insights and building innovative solutions</p>
        <Link href="/projects" className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
          View My Projects
        </Link>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-4">
          I&apos;m a passionate Software Developer, Data Scientist, and Machine Learning Engineer with X years of experience in developing cutting-edge solutions. My expertise lies in leveraging data-driven approaches to solve complex problems and create impactful applications.
        </p>
        <p className="text-lg">
          With a strong foundation in computer science and statistics, I excel at bridging the gap between theoretical concepts and practical implementations. I&apos;m constantly learning and adapting to new technologies to stay at the forefront of the rapidly evolving tech landscape.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "TensorFlow", "PyTorch", "Scikit-learn", "SQL", "NoSQL", "Docker", "Kubernetes", "AWS", "GCP", "Git", "CI/CD"].map((skill, index) => (
            <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Image Recognition</h3>
            <p className="mb-2">Developed a deep learning model for real-time object detection and classification.</p>
            <div className="flex gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Python</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">TensorFlow</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">OpenCV</span>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Predictive Maintenance Dashboard</h3>
            <p className="mb-2">Created a web-based dashboard for predictive maintenance in manufacturing using machine learning algorithms.</p>
            <div className="flex gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">React</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Node.js</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Scikit-learn</span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Link href="/projects" className="text-blue-500 hover:underline">
            View all projects →
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-4">I&apos;m always open to new opportunities and collaborations. Feel free to reach out!</p>
        <a href="mailto:your.email@example.com" className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
          Get in Touch
        </a>
      </section>
    </div>
  );
}