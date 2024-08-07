
const essays = [
    {
      title: "The Future of AI in Healthcare",
      summary: "An exploration of how artificial intelligence is revolutionizing the healthcare industry, from diagnosis to drug discovery.",
      date: "2024-03-15"
    },
    {
      title: "Building Scalable Data Pipelines",
      summary: "Best practices and strategies for designing and implementing scalable data pipelines to handle big data processing challenges.",
      date: "2024-02-28"
    },
    {
      title: "Ethics in Machine Learning",
      summary: "A discussion on the ethical considerations in developing and deploying machine learning models, focusing on fairness and transparency.",
      date: "2024-01-10"
    },
    {
      title: "The Rise of Edge Computing in IoT",
      summary: "Analyzing the growing importance of edge computing in Internet of Things (IoT) applications and its impact on real-time data processing.",
      date: "2023-12-05"
    },
    {
      title: "Quantum Computing: Promises and Challenges",
      summary: "An overview of the current state of quantum computing, its potential applications, and the challenges that need to be overcome.",
      date: "2023-11-20"
    },
    {
      title: "The Role of DevOps in Machine Learning Projects",
      summary: "Exploring how DevOps practices can be applied to machine learning projects to improve efficiency and reliability in model deployment.",
      date: "2023-10-15"
    },
    {
      title: "Explainable AI: Making Black Box Models Transparent",
      summary: "Discussing techniques and importance of making complex AI models interpretable and explainable for real-world applications.",
      date: "2023-09-01"
    },
    {
      title: "The Impact of 5G on Data Science and AI",
      summary: "Analyzing how the rollout of 5G networks will influence data collection, processing, and AI applications in various industries.",
      date: "2023-08-12"
    }
  ];
  
  export default function Essays() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">My Essays</h1>
        <div className="space-y-6">
          {essays.map((essay, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2">{essay.title}</h2>
              <p className="mb-2 text-gray-600">{essay.summary}</p>
              <p className="text-sm text-gray-500">Published on {essay.date}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }