import { motion } from 'motion/react';
import { MapPin, Calendar, GraduationCap, Briefcase, Code, Coffee, Camera, Gamepad2, Music } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FloatingTechStack } from './FloatingTechStack';

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



const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Leading development of AI-powered web applications, mentoring junior developers, and architecting scalable solutions.',
    skills: ['React', 'Python', 'AWS', 'PostgreSQL']
  },
  {
    title: 'Data Scientist',
    company: 'DataFlow Solutions',
    period: '2020 - 2022',
    description: 'Built machine learning models for predictive analytics, created data visualization dashboards, and automated data pipelines.',
    skills: ['Python', 'TensorFlow', 'Pandas', 'SQL']
  },
  {
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    description: 'Developed responsive web applications, implemented modern UI/UX designs, and optimized performance.',
    skills: ['JavaScript', 'React', 'CSS', 'Node.js']
  }
];

export function AboutPage() {
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
          <motion.div
            className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1700619663094-be321751b545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwc2V0dXB8ZW58MXx8fHwxNzU4MDIzMzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              John Doe
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full Stack Developer & Data Scientist passionate about creating innovative solutions that bridge technology and human needs.
            </p>
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Available for hire</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Story Section */}
        <motion.section variants={itemVariants}>
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📖</span>
                </div>
                <span>My Story</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                My journey in technology began during my computer science studies, where I discovered the power of combining analytical thinking with creative problem-solving. What started as curiosity about how things work evolved into a passion for building solutions that make a real difference.
              </p>
              <p>
                Over the years, I've had the privilege of working on diverse projects - from AI-powered web applications that serve millions of users to data science models that drive business decisions. Each project taught me something new and reinforced my belief that technology should be accessible, inclusive, and impactful.
              </p>
              <p>
                Today, I'm excited about the intersection of AI, web development, and user experience. I believe we're at a pivotal moment where thoughtful technology can solve complex problems while remaining human-centered.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.section variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-blue-200 pl-4 space-y-3">
                  <div>
                    <h3 className="font-semibold">M.S. Computer Science</h3>
                    <p className="text-muted-foreground">Stanford University • 2018-2020</p>
                    <p className="text-sm">Specialization in AI/ML and Human-Computer Interaction</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">B.S. Mathematics</h3>
                    <p className="text-muted-foreground">UC Berkeley • 2014-2018</p>
                    <p className="text-sm">Minor in Computer Science, Summa Cum Laude</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-green-500" />
                  <span>Experience</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-green-200 pl-4 space-y-2"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company} • {exp.period}</p>
                    <p className="text-sm">{exp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.section>
        </div>

        {/* Tech Stack */}
        <motion.section variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-purple-500" />
                <span>Tech Stack</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FloatingTechStack />
            </CardContent>
          </Card>
        </motion.section>

        {/* Interests & Hobbies */}
        <motion.section variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Coffee className="w-5 h-5 text-orange-500" />
                <span>Interests & Hobbies</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Camera, label: 'Photography', color: 'text-pink-500' },
                  { icon: Gamepad2, label: 'Gaming', color: 'text-blue-500' },
                  { icon: Music, label: 'Music Production', color: 'text-purple-500' },
                  { icon: Coffee, label: 'Coffee Brewing', color: 'text-orange-500' }
                ].map((hobby) => (
                  <motion.div
                    key={hobby.label}
                    className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <hobby.icon className={`w-8 h-8 ${hobby.color} mb-2`} />
                    <span className="text-sm font-medium">{hobby.label}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Blog Section */}
        <motion.section variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">✍️</span>
                </div>
                <span>Recent Blog Posts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Building AI-Powered Web Applications: Lessons Learned",
                  date: "December 2024",
                  excerpt: "A deep dive into integrating machine learning models with modern web frameworks..."
                },
                {
                  title: "The Future of Human-Computer Interaction",
                  date: "November 2024",
                  excerpt: "Exploring how emerging technologies are reshaping the way we interact with computers..."
                },
                {
                  title: "Data Visualization Best Practices",
                  date: "October 2024",
                  excerpt: "Creating compelling and accessible data stories that drive decision-making..."
                }
              ].map((post, index) => (
                <motion.div
                  key={index}
                  className="p-4 border border-border rounded-lg hover:bg-accent transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="font-semibold mb-1">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{post.date}</p>
                  <p className="text-sm">{post.excerpt}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </motion.div>
  );
}