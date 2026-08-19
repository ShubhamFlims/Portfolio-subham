import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Play, ArrowDownRight, Sparkles } from 'lucide-react';
import { VideoModal } from './VideoModal';

interface Project {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  description?: string;
}

const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Epic Action Reel',
    category: 'Social Media Ads',
    videoUrl: 'https://drive.google.com/file/d/1ekJekADEuSiEsB0aru64khRZOiqKS8QE/view?usp=drive_link',
    description: 'High-energy action-packed social media advertisement'
  },
  {
    id: '2',
    title: 'Cinematic Journey',
    category: 'Cinematic Edits',
    videoUrl: 'https://drive.google.com/file/d/1JU6EYEYw7-GveMqOhG40z7_OZF4s_yJA/view?usp=drive_link',
    description: 'Breathtaking cinematic storytelling'
  },
  {
    id: '3',
    title: 'Quick Cuts',
    category: 'Reels Editing',
    videoUrl: 'https://drive.google.com/file/d/1VG9_wLYJH2TrIoc39yTxsjY5dLVQTvVz/view?usp=drive_link',
    description: 'Fast-paced reel for social platforms'
  },
  {
    id: '4',
    title: 'YouTube Edit',
    category: 'YouTube Content',
    videoUrl: 'https://drive.google.com/file/d/1XrQhT6i6U6YEeIiIZZ1t143B-c6H1Xvz/view?usp=drive_link',
    description: 'Engaging YouTube vlog edit with dynamic cuts and effects'
  },
  {
    id: '5',
    title: 'Engaging Reels',
    category: 'Social Media Reels',
    videoUrl: 'https://drive.google.com/file/d/1sAOn1iGVSI6HOxqFmEN5aV6GaIgZ6ym8/view?usp=drive_link',
    description: 'Sleek promotional video for brand awareness'
  },
  {
    id: '6',
    title: 'Promo Reels',
    category: 'Reels Editing',
    videoUrl: 'https://drive.google.com/drive/folders/1hrLWP4yPxFnKRAg74FXPRD_OHF_P42WU?usp=drive_link',
    description: 'Vibrant travel vlog edit with stunning visuals'
  },
  {
    id: '7',
    title: 'Tips Reels',
    category: 'Insta Reels',
    videoUrl: 'https://drive.google.com/drive/folders/1hrLWP4yPxFnKRAg74FXPRD_OHF_P42WU?usp=drive_link',
    description: 'Short-form content with cinematic color grading'
  },
  {
    id: '8',
    title: 'YouTube Video',
    category: 'YouTube Content',
    videoUrl: 'https://drive.google.com/file/d/11xuselbuHTU7YkSOxIEPer8kSfYaMCNl/view?usp=sharing',
    description: 'Engaging YouTube vlog edit with dynamic cuts and effects'
  },
  {
    id: '9',
    title: 'Informative Reels',
    category: 'Reels Editing',
    videoUrl: 'https://drive.google.com/file/d/1A3I35hyEz4bgy7revA3Mvc5QngMvxSjn/view?usp=sharing',
    description: 'Breathtaking cinematic storytelling'
  }
];

const AnimatedTextBackground = ({
  title,
  category
}: {
  title: string;
  category: string;
}) => {
  const phrases = [
    title,
    category,
    'VIDEO',
    'EDIT',
    'CREATE',
    'DESIGN',
    'MOTION',
    'CINEMA'
  ];

  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">

      {/* Moving typography */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-4 md:grid-cols-5 gap-5 p-6 h-full rotate-[-4deg] scale-110">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.05, 0.2, 0.05],
                y: [0, 25, 0]
              }}
              transition={{
                duration: 5 + (i % 4),
                repeat: Infinity,
                delay: (i % 5) * 0.4,
                ease: 'easeInOut'
              }}
              className="text-[10px] md:text-xs font-mono text-white/40 select-none whitespace-nowrap"
            >
              {phrases[i % phrases.length]}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90" />

      {/* Accent glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.18, 0.08]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute w-72 h-72 rounded-full bg-accent blur-[100px]"
      />

      {/* Center content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity
          }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Sparkles size={14} className="text-accent" />

          <span className="text-[10px] font-mono text-accent uppercase tracking-[0.35em]">
            Featured Work
          </span>

          <Sparkles size={14} className="text-accent" />
        </motion.div>

        <h4 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none">
          {title}
        </h4>

        <span className="mt-3 text-[11px] font-mono text-white/50 uppercase tracking-[0.3em] inline-block">
          {category}
        </span>
      </motion.div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/20 via-transparent to-transparent" />
    </div>
  );
};

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Social Media Ads',
    'Reels Editing',
    'Cinematic Edits',
    'YouTube Content'
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? SAMPLE_PROJECTS
      : SAMPLE_PROJECTS.filter(
          project => project.category === activeCategory
        );

  return (
    <section
      id="portfolio"
      className="py-32 px-6 max-w-7xl mx-auto"
    >

      {/* ================= HEADER ================= */}

      <div className="mb-16">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">

          <div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-10 h-px bg-accent" />

              <span className="text-accent font-mono text-sm tracking-widest uppercase">
                Selected Works
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              MY
              <span className="text-white/30"> PORTFOLIO</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-white/50 max-w-xl text-base md:text-lg"
            >
              A collection of video edits, cinematic stories and
              social content crafted to grab attention and keep
              audiences watching.
            </motion.p>

          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-12">

            <div>
              <div className="text-3xl md:text-4xl font-bold">
                09
              </div>

              <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">
                Projects
              </div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-bold">
                04
              </div>

              <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">
                Formats
              </div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400">
                ●
              </div>

              <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">
                Available
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ================= CATEGORY FILTER ================= */}

      <div className="flex gap-3 overflow-x-auto pb-5 mb-14 scrollbar-hide">

        {categories.map(category => (

          <motion.button
            key={category}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveCategory(category)}
            className={`flex-shrink-0 px-6 py-3 rounded-full border text-xs md:text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.12)]'
                : 'border-white/10 hover:border-accent/50 text-white/50 hover:text-white'
            }`}
          >
            {category}
          </motion.button>

        ))}

      </div>

      {/* ================= PROJECT GRID ================= */}

      {filteredProjects.length === 0 ? (

        <div className="text-center py-20 glass rounded-3xl">
          <p className="text-white/40 font-mono">
            No projects found. Check back soon!
          </p>
        </div>

      ) : (

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >

          {filteredProjects.map((project, index) => (

            <motion.div
              layout
              key={project.id}
              initial={{
                opacity: 0,
                y: 35
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.06
              }}
              whileHover={{
                y: -8,
                scale: 1.015
              }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass cursor-pointer border border-white/5 hover:border-accent/40 transition-all duration-500"
              onClick={() => setSelectedProject(project)}
            >

              <AnimatedTextBackground
                title={project.title}
                category={project.category}
              />

              {/* Featured badge */}
              {index === 0 && activeCategory === 'All' && (

                <div className="absolute top-5 left-5 z-20 px-3 py-1.5 rounded-full bg-accent text-black text-[9px] font-bold uppercase tracking-widest">
                  Featured
                </div>

              )}

              {/* Top right arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center"
              >
                <ArrowDownRight size={18} />
              </motion.div>

              {/* Description reveal */}
              <div className="absolute left-5 right-5 bottom-24 z-20 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">

                <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-sm">
                  {project.description}
                </p>

              </div>

              {/* Bottom controls */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-20">

                <div className="flex items-center gap-3">

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-xl hover:bg-accent hover:text-white transition-colors"
                  >
                    <Play
                      size={19}
                      fill="currentColor"
                    />
                  </motion.button>

                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>

                </div>

                <div className="px-3 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">

                  <span className="text-[9px] font-mono text-white/60 uppercase tracking-widest">
                    {project.category}
                  </span>

                </div>

              </div>

              {/* Hover shine */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            </motion.div>

          ))}

        </motion.div>

      )}

      {/* ================= BOTTOM CTA ================= */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
      >

        <div>

          <span className="text-accent font-mono text-[10px] uppercase tracking-[0.3em]">
            Have a project?
          </span>

          <h3 className="text-2xl md:text-4xl font-bold tracking-tight mt-3">
            Let's turn your footage into something people remember.
          </h3>

        </div>

        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.97
          }}
          className="flex-shrink-0 px-7 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-accent hover:text-white transition-colors flex items-center gap-3"
        >
          Start a Project
          <ArrowDownRight size={18} />
        </motion.a>

      </motion.div>

      {/* ================= VIDEO MODAL ================= */}

      <VideoModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        videoUrl={selectedProject?.videoUrl || ''}
        title={selectedProject?.title || ''}
      />

    </section>
  );
};
