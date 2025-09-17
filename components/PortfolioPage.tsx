import { motion } from 'motion/react';
import { Brain, BarChart3, Palette, Calculator, ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const projects = {
  ai: [
    {
      title: "AI-Powered Content Generator",
      description: "A sophisticated content generation platform using GPT-4 and custom fine-tuned models for creating marketing copy, technical documentation, and creative writing.",
      image: "https://images.unsplash.com/photo-1505304451-3b3b85a91afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvZGluZyUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc1ODAyMTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Python", "OpenAI API", "FastAPI", "React", "PostgreSQL"],
      features: ["Natural language processing", "Custom model training", "Real-time collaboration", "Multi-format export"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    },
    {
      title: "Smart Recommendation Engine",
      description: "Machine learning system that provides personalized recommendations using collaborative filtering and deep learning techniques, serving 100K+ users daily.",
      image: "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTgwMDczMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["TensorFlow", "Python", "Redis", "Docker", "AWS"],
      features: ["Real-time recommendations", "A/B testing framework", "Scalable architecture", "Performance monitoring"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    },
    {
      title: "Conversational AI Assistant",
      description: "Voice and text-based AI assistant with natural language understanding, task automation, and integration with popular productivity tools.",
      image: "https://images.unsplash.com/photo-1505304451-3b3b85a91afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvZGluZyUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc1ODAyMTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Node.js", "Speech-to-Text API", "NLP", "WebSockets", "MongoDB"],
      features: ["Voice recognition", "Multi-platform support", "Task automation", "Context awareness"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    }
  ],
  datascience: [
    {
      title: "Financial Market Predictor",
      description: "Advanced time series forecasting model for cryptocurrency and stock market analysis using LSTM networks and technical indicators.",
      image: "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTgwMDczMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Python", "Keras", "Pandas", "Scikit-learn", "Plotly"],
      features: ["Time series analysis", "Real-time predictions", "Risk assessment", "Interactive dashboards"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    },
    {
      title: "Customer Behavior Analytics",
      description: "Comprehensive analytics platform for understanding customer journey, segmentation, and churn prediction using machine learning.",
      image: "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTgwMDczMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["R", "Shiny", "PostgreSQL", "Apache Spark", "Tableau"],
      features: ["Customer segmentation", "Churn prediction", "Lifetime value analysis", "A/B testing"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    },
    {
      title: "Climate Data Visualization",
      description: "Interactive platform for visualizing and analyzing global climate data, trends, and predictions with real-time updates.",
      image: "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTgwMDczMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["D3.js", "Python", "Flask", "OpenWeather API", "AWS"],
      features: ["Real-time data", "Interactive maps", "Trend analysis", "Predictive modeling"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    }
  ],
  webdesign: [
    {
      title: "E-commerce Platform",
      description: "Modern, responsive e-commerce platform with advanced search, recommendation system, and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1700619663094-be321751b545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwc2V0dXB8ZW58MXx8fHwxNzU4MDIzMzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
      features: ["Mobile-first design", "Payment integration", "Inventory management", "SEO optimization"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    },
    {
      title: "Creative Agency Website",
      description: "Award-winning website for a creative agency featuring stunning animations, portfolio showcase, and immersive user experience.",
      image: "https://images.unsplash.com/photo-1700619663094-be321751b545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwc2V0dXB8ZW58MXx8fHwxNzU4MDIzMzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React", "Three.js", "GSAP", "Sanity CMS", "Vercel"],
      features: ["3D animations", "Parallax scrolling", "CMS integration", "Performance optimization"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    },
    {
      title: "SaaS Dashboard",
      description: "Comprehensive dashboard for SaaS applications with real-time analytics, user management, and customizable widgets.",
      image: "https://images.unsplash.com/photo-1700619663094-be321751b545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwc2V0dXB8ZW58MXx8fHwxNzU4MDIzMzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Vue.js", "Chart.js", "Firebase", "Vuetify", "PWA"],
      features: ["Real-time updates", "Custom widgets", "Role-based access", "Export capabilities"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    }
  ],
  math: [
    {
      title: "Mathematical Visualization Tool",
      description: "Interactive tool for visualizing complex mathematical concepts including calculus, linear algebra, and differential equations.",
      image: "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTgwMDczMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["JavaScript", "P5.js", "LaTeX", "WebGL", "MathJax"],
      features: ["3D visualizations", "Interactive equations", "Educational content", "Export functionality"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    },
    {
      title: "Algorithm Complexity Analyzer",
      description: "Visual tool for analyzing and comparing algorithm complexity with interactive demonstrations and performance benchmarks.",
      image: "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTgwMDczMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React", "TypeScript", "Web Workers", "Canvas API", "Jest"],
      features: ["Visual comparisons", "Performance metrics", "Code examples", "Educational resources"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    },
    {
      title: "Fractal Generator",
      description: "High-performance fractal generation and exploration tool with zoom capabilities and customizable parameters.",
      image: "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTgwMDczMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["WebGL", "GLSL", "Rust", "WebAssembly", "Canvas API"],
      features: ["Real-time generation", "Deep zoom", "Color customization", "Image export"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    }
  ]
};

const categories = [
  { id: 'ai', label: 'AI Agents', icon: Brain, color: 'text-purple-500', bgColor: 'bg-purple-500' },
  { id: 'datascience', label: 'Data Science', icon: BarChart3, color: 'text-blue-500', bgColor: 'bg-blue-500' },
  { id: 'webdesign', label: 'Web Design', icon: Palette, color: 'text-green-500', bgColor: 'bg-green-500' },
  { id: 'math', label: 'Mathematics', icon: Calculator, color: 'text-orange-500', bgColor: 'bg-orange-500' }
];

export function PortfolioPage() {
  return (
    <motion.div
      className="min-h-screen pt-20 pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative projects spanning AI, data science, web development, and mathematical modeling.
          </p>
        </motion.section>

        {/* Portfolio Tabs */}
        <motion.section variants={itemVariants}>
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
                  <category.icon className={`w-4 h-4 ${category.color}`} />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <motion.div
                  className="flex items-center space-x-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.label}</h2>
                    <p className="text-muted-foreground">
                      {category.id === 'ai' && "Intelligent systems and machine learning applications"}
                      {category.id === 'datascience' && "Data-driven insights and predictive analytics"}
                      {category.id === 'webdesign' && "Modern, responsive web applications and interfaces"}
                      {category.id === 'math' && "Mathematical modeling and computational tools"}
                    </p>
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects[category.id as keyof typeof projects].map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="h-full group hover:shadow-lg transition-all duration-300 overflow-hidden">
                        <div className="relative overflow-hidden">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                              <Github className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <CardHeader>
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent className="space-y-4 flex-1">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm">Key Features:</h4>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center space-x-2">
                                  <ChevronRight className="w-3 h-3 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.section>

        {/* Call to Action */}
        <motion.section variants={itemVariants} className="text-center space-y-6">
          <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-none">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold">Let's Build Something Amazing Together</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Interested in collaborating or have a project in mind? I'd love to hear about your ideas and explore how we can bring them to life.
              </p>
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline">
                  View Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </motion.div>
  );
}