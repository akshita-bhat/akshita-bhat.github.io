import { motion } from 'motion/react';
import { useState } from 'react';
import { Code, Database, Cloud, Brain, Palette, Terminal } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const techItems = [
  // LLMs & NLP (Purple/Violet)
  { name: 'GPT-4', icon: '🧠', category: 'LLMs & NLP', color: 'from-purple-400 to-purple-600', description: 'Advanced language model by OpenAI', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 20 + Math.random() * 10 },
  { name: 'GPT-3.5', icon: '💭', category: 'LLMs & NLP', color: 'from-purple-500 to-violet-600', description: 'Powerful language model for text generation', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 18 + Math.random() * 10 },
  { name: 'Transformers', icon: '🔄', category: 'LLMs & NLP', color: 'from-violet-400 to-purple-600', description: 'Hugging Face transformers library', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 22 + Math.random() * 10 },
  { name: 'BERT', icon: '📝', category: 'LLMs & NLP', color: 'from-purple-400 to-violet-500', description: 'Bidirectional encoder representations', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 25 + Math.random() * 10 },
  { name: 'SpaCy', icon: '🔤', category: 'LLMs & NLP', color: 'from-violet-500 to-purple-600', description: 'Industrial-strength NLP library', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 19 + Math.random() * 10 },
  { name: 'NLTK', icon: '📚', category: 'LLMs & NLP', color: 'from-purple-500 to-violet-500', description: 'Natural Language Toolkit', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 23 + Math.random() * 10 },
  { name: 'Whisper', icon: '🎤', category: 'LLMs & NLP', color: 'from-violet-400 to-purple-500', description: 'Speech recognition by OpenAI', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 21 + Math.random() * 10 },
  { name: 'RAG', icon: '🔍', category: 'LLMs & NLP', color: 'from-purple-600 to-violet-600', description: 'Retrieval-augmented generation systems', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 24 + Math.random() * 10 },

  // Programming & ML/AI Frameworks (Blue)
  { name: 'Python', icon: '🐍', category: 'Programming & AI', color: 'from-blue-400 to-blue-600', description: 'Versatile programming language', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 20 + Math.random() * 10 },
  { name: 'PyTorch', icon: '🔥', category: 'Programming & AI', color: 'from-blue-500 to-indigo-600', description: 'Deep learning framework', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 22 + Math.random() * 10 },
  { name: 'TensorFlow', icon: '🎯', category: 'Programming & AI', color: 'from-blue-400 to-cyan-600', description: 'Machine learning platform', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 25 + Math.random() * 10 },
  { name: 'Scikit-learn', icon: '📊', category: 'Programming & AI', color: 'from-indigo-400 to-blue-600', description: 'Machine learning library', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 18 + Math.random() * 10 },
  { name: 'LangChain', icon: '⛓️', category: 'Programming & AI', color: 'from-blue-500 to-indigo-500', description: 'Framework for LLM applications', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 23 + Math.random() * 10 },
  { name: 'Jupyter', icon: '📓', category: 'Programming & AI', color: 'from-blue-600 to-indigo-600', description: 'Interactive computing environment', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 21 + Math.random() * 10 },

  // Multimodal & Computer Vision (Green)
  { name: 'OpenCV', icon: '👁️', category: 'Computer Vision', color: 'from-green-400 to-green-600', description: 'Computer vision library', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 20 + Math.random() * 10 },
  { name: 'Scikit-Image', icon: '🖼️', category: 'Computer Vision', color: 'from-green-500 to-emerald-600', description: 'Image processing in Python', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 22 + Math.random() * 10 },
  { name: 'CLIP', icon: '🔗', category: 'Computer Vision', color: 'from-emerald-400 to-green-600', description: 'Image-text understanding model', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 24 + Math.random() * 10 },
  { name: 'YOLO', icon: '🎯', category: 'Computer Vision', color: 'from-green-400 to-emerald-500', description: 'Object detection algorithm', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 19 + Math.random() * 10 },
  { name: 'Audio ML', icon: '🔊', category: 'Computer Vision', color: 'from-green-500 to-emerald-500', description: 'Audio classification models', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 23 + Math.random() * 10 },

  // Data & Cloud (Orange/Yellow)
  { name: 'MySQL', icon: '🗃️', category: 'Data & Cloud', color: 'from-orange-400 to-yellow-500', description: 'Relational database management', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 20 + Math.random() * 10 },
  { name: 'PostgreSQL', icon: '🐘', category: 'Data & Cloud', color: 'from-yellow-400 to-orange-500', description: 'Advanced relational database', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 22 + Math.random() * 10 },
  { name: 'Airflow', icon: '🌪️', category: 'Data & Cloud', color: 'from-orange-500 to-yellow-600', description: 'Workflow orchestration platform', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 25 + Math.random() * 10 },
  { name: 'AWS EC2', icon: '☁️', category: 'Data & Cloud', color: 'from-orange-400 to-amber-500', description: 'Elastic compute cloud', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 18 + Math.random() * 10 },
  { name: 'S3', icon: '🪣', category: 'Data & Cloud', color: 'from-yellow-500 to-orange-600', description: 'Object storage service', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 21 + Math.random() * 10 },
  { name: 'Redshift', icon: '📊', category: 'Data & Cloud', color: 'from-orange-500 to-yellow-500', description: 'Data warehouse service', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 24 + Math.random() * 10 },
  { name: 'Lambda', icon: 'λ', category: 'Data & Cloud', color: 'from-amber-400 to-orange-500', description: 'Serverless compute service', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 19 + Math.random() * 10 },
  { name: 'SageMaker', icon: '🤖', category: 'Data & Cloud', color: 'from-orange-400 to-yellow-600', description: 'Machine learning platform', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 23 + Math.random() * 10 },
  { name: 'Git', icon: '📚', category: 'Data & Cloud', color: 'from-orange-500 to-amber-600', description: 'Version control system', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 20 + Math.random() * 10 },

  // BI & Visualization (Pink/Red)
  { name: 'Power BI', icon: '📈', category: 'BI & Visualization', color: 'from-pink-400 to-rose-600', description: 'Business intelligence platform', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 22 + Math.random() * 10 },
  { name: 'Tableau', icon: '📊', category: 'BI & Visualization', color: 'from-rose-400 to-pink-600', description: 'Data visualization software', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 20 + Math.random() * 10 },
  { name: 'Hex', icon: '⬡', category: 'BI & Visualization', color: 'from-pink-500 to-rose-500', description: 'Collaborative data platform', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 24 + Math.random() * 10 },
  { name: 'Looker', icon: '👀', category: 'BI & Visualization', color: 'from-rose-500 to-pink-600', description: 'Business intelligence platform', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 21 + Math.random() * 10 },
  { name: 'Mixpanel', icon: '📱', category: 'BI & Visualization', color: 'from-pink-400 to-rose-500', description: 'Product analytics platform', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 23 + Math.random() * 10 },
  { name: 'D3.js', icon: '📉', category: 'BI & Visualization', color: 'from-rose-400 to-pink-500', description: 'Data visualization library', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 19 + Math.random() * 10 },

  // AI Agents & Tooling (Cyan/Teal)
  { name: 'Flowise', icon: '🌊', category: 'AI Agents', color: 'from-cyan-400 to-teal-600', description: 'No-code AI workflows', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 20 + Math.random() * 10 },
  { name: 'Ollama', icon: '🦙', category: 'AI Agents', color: 'from-teal-400 to-cyan-600', description: 'Local LLM deployment', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 22 + Math.random() * 10 },
  { name: 'AutoGen', icon: '🔄', category: 'AI Agents', color: 'from-cyan-500 to-teal-500', description: 'Multi-agent conversation framework', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 25 + Math.random() * 10 },
  { name: 'AgentLabs', icon: '🧪', category: 'AI Agents', color: 'from-teal-500 to-cyan-600', description: 'Agent development platform', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 18 + Math.random() * 10 },
  { name: 'Auto-GPT', icon: '🤖', category: 'AI Agents', color: 'from-cyan-400 to-teal-500', description: 'Autonomous AI agent', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 21 + Math.random() * 10 },
  { name: 'ReAct', icon: '⚡', category: 'AI Agents', color: 'from-teal-400 to-cyan-500', description: 'Reasoning and acting framework', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 24 + Math.random() * 10 },
  { name: 'LangGraph', icon: '🕸️', category: 'AI Agents', color: 'from-cyan-500 to-teal-600', description: 'Graph-based agent workflows', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 19 + Math.random() * 10 },

  // Additional popular technologies
  { name: 'React', icon: '⚛️', category: 'Programming & AI', color: 'from-blue-500 to-cyan-500', description: 'Frontend JavaScript library', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 20 + Math.random() * 10 },
  { name: 'Node.js', icon: '🟢', category: 'Programming & AI', color: 'from-blue-400 to-indigo-500', description: 'JavaScript runtime environment', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 22 + Math.random() * 10 },
  { name: 'Docker', icon: '🐳', category: 'Data & Cloud', color: 'from-orange-400 to-amber-600', description: 'Containerization platform', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 21 + Math.random() * 10 },
  { name: 'Kubernetes', icon: '☸️', category: 'Data & Cloud', color: 'from-yellow-400 to-orange-600', description: 'Container orchestration', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 23 + Math.random() * 10 },
  { name: 'FastAPI', icon: '⚡', category: 'Programming & AI', color: 'from-indigo-400 to-blue-600', description: 'Modern Python web framework', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 20 + Math.random() * 10 },
  { name: 'MongoDB', icon: '🍃', category: 'Data & Cloud', color: 'from-amber-400 to-orange-600', description: 'NoSQL document database', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 24 + Math.random() * 10 },
  { name: 'Redis', icon: '🔴', category: 'Data & Cloud', color: 'from-orange-500 to-yellow-600', description: 'In-memory data structure store', x: Math.random() * 90 + 5, y: Math.random() * 80 + 10, duration: 19 + Math.random() * 10 }
];

export function FloatingTechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  return (
    <div className="relative">
      <div className="relative h-64 overflow-hidden rounded-xl bg-gradient-to-br from-background via-blue-50/20 to-purple-50/20 dark:from-background dark:via-blue-950/20 dark:to-purple-950/20">
        {techItems.map((tech) => (
          <motion.div
            key={tech.name}
            className="absolute cursor-pointer"
            style={{
              left: `${tech.x}%`,
              top: `${tech.y}%`,
            }}
            animate={{
              x: [0, 10, -8, 5, 0],
              y: [0, -5, 8, -3, 0],
            }}
            transition={{
              duration: tech.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.2,
              zIndex: 10,
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredTech(tech.name)}
            onHoverEnd={() => setHoveredTech(null)}
            onClick={() => setSelectedTech(selectedTech === tech.name ? null : tech.name)}
          >
            <motion.div
              className={`relative w-12 h-12 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center shadow-md border border-white/20 backdrop-blur-sm`}
              whileHover={{
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
            >
              <span className="text-lg">{tech.icon}</span>
              
              {/* Pulsing ring effect on hover */}
              {hoveredTech === tech.name && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/40"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
              
              {/* Category indicator dot */}
              <motion.div
                className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-xs font-bold shadow-sm border border-gray-200 dark:border-gray-700"
                initial={{ scale: 0 }}
                animate={{ scale: hoveredTech === tech.name ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`} />
              </motion.div>
            </motion.div>
            
            {/* Tech name label */}
            <motion.div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: hoveredTech === tech.name ? 1 : 0,
                y: hoveredTech === tech.name ? 0 : -10
              }}
              transition={{ duration: 0.2 }}
            >
              <Badge variant="secondary" className="text-xs font-medium whitespace-nowrap">
                {tech.name}
              </Badge>
            </motion.div>
          </motion.div>
        ))}
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Tech details card */}
      {selectedTech && (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <Card className="border-primary/20">
            <CardContent className="p-6">
              {(() => {
                const tech = techItems.find(t => t.name === selectedTech);
                return tech ? (
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center text-2xl`}>
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg">{tech.name}</h3>
                        <Badge variant="outline">{tech.category}</Badge>
                      </div>
                      <p className="text-muted-foreground">{tech.description}</p>
                    </div>
                    <motion.button
                      onClick={() => setSelectedTech(null)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ✕
                    </motion.button>
                  </div>
                ) : null;
              })()}
            </CardContent>
          </Card>
        </motion.div>
      )}
      
      {/* Legend */}
      <motion.div
        className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" />
          <span className="text-sm text-muted-foreground">LLMs & NLP</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
          <span className="text-sm text-muted-foreground">Programming & AI</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full" />
          <span className="text-sm text-muted-foreground">Computer Vision</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full" />
          <span className="text-sm text-muted-foreground">Data & Cloud</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-600 rounded-full" />
          <span className="text-sm text-muted-foreground">BI & Visualization</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full" />
          <span className="text-sm text-muted-foreground">AI Agents</span>
        </div>
      </motion.div>
      
      {/* Instructions */}
      <motion.div
        className="mt-4 text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Hover over or click the floating tech icons to explore my skills
      </motion.div>
    </div>
  );
}