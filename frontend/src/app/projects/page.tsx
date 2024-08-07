import Link from 'next/link';

const projects = [
  {
    title: "AI-Powered Image Recognition",
    description: "Developed a deep learning model for real-time object detection and classification in security camera footage.",
    technologies: ["Python", "TensorFlow", "OpenCV", "YOLO"]
  },
  {
    title: "Predictive Maintenance Dashboard",
    description: "Created a web-based dashboard for predictive maintenance in manufacturing using machine learning algorithms to forecast equipment failures.",
    technologies: ["React", "Node.js", "Scikit-learn", "D3.js", "MongoDB"]
  },
  {
    title: "Natural Language Processing Chatbot",
    description: "Built an intelligent chatbot using NLP techniques for customer support automation, reducing response times by 50%.",
    technologies: ["Python", "NLTK", "Flask", "React", "Docker"]
  },
  {
    title: "Blockchain-based Supply Chain Tracking",
    description: "Implemented a blockchain solution for transparent and secure supply chain management in the pharmaceutical industry.",
    technologies: ["Ethereum", "Solidity", "Web3.js", "Node.js", "React"]
  },
  {
    title: "Automated Stock Trading Algorithm",
    description: "Developed a machine learning-based algorithm for automated stock trading, incorporating sentiment analysis of financial news.",
    technologies: ["Python", "Pandas", "Scikit-learn", "NLTK", "Alpha Vantage API"]
  },
  {
    title: "IoT-based Smart Home Energy Management",
    description: "Created an IoT system for optimizing home energy consumption using real-time data analysis and machine learning predictions.",
    technologies: ["Raspberry Pi", "Python", "MQTT", "TensorFlow Lite", "React Native"]
  },
  {
    title: "Augmented Reality Educational App",
    description: "Designed and developed an AR app for interactive learning experiences in STEM subjects for K-12 students.",
    technologies: ["Unity", "C#", "ARKit", "Vuforia", "Blender"]
  },
  {
    title: "Quantum Computing Simulator",
    description: "Built a quantum circuit simulator to aid in the development and testing of quantum algorithms.",
    technologies: ["Python", "NumPy", "Qiskit", "Matplotlib", "Jupyter Notebooks"]
  }
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4 text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
