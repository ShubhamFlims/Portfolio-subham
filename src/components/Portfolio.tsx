import { motion } from 'motion/react';
import { useState } from 'react';
import {
  ExternalLink,
  Play,
  ArrowDownRight,
  Sparkles,
} from 'lucide-react';
import { VideoModal } from './VideoModal';

interface Project {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  description: string;
  theme: string;
}

const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'IMPACT AD FILM',
    category: 'Social Media Ads',
    videoUrl:
      'https://drive.google.com/file/d/1R2dS-5Lr9Um-WEaJrkp1uMf95Est6Coc/view?usp=sharing',
    description:
      'High-energy commercial edit designed to grab attention instantly.',
    theme: 'from-violet-600/30 via-purple-900/10 to-black',
  },
  {
    id: '2',
    title: 'CINEMATIC STORY',
    category: 'Cinematic Edits',
    videoUrl:
      'https://drive.google.com/file/d/1jaXOn9iCC2tHbXnlmMXYjJyeAgPppEfF/view?usp=sharing',
    description:
      'A cinematic visual story built with rhythm, atmosphere and emotion.',
    theme: 'from-blue-600/30 via-indigo-900/10 to-black',
  },
  {
    id: '3',
    title: 'RAPID CUTS',
    category: 'Reels Editing',
    videoUrl:
      'https://drive.google.com/file/d/1DvZB_XUif-FZctq7y4_2I6gMO9DNqs_v/view?usp=sharing',
    description:
      'Fast-paced short-form edit with sharp cuts and energetic transitions.',
    theme: 'from-cyan-500/30 via-blue-900/10 to-black',
  },
  {
    id: '4',
    title: 'YOUTUBE STORY',
    category: 'YouTube Content',
    videoUrl:
      'https://drive.google.com/file/d/1mjUKVdunLpZMMs82vJJ0tFMxQD5jAFQ1/view?usp=drive_link',
    description:
      'Dynamic YouTube editing with engaging pacing and storytelling.',
    theme: 'from-red-500/30 via-orange-900/10 to-black',
  },
  {
    id: '5',
    title: 'SOCIAL PULSE',
    category: 'Social Media Reels',
    videoUrl:
      'https://drive.google.com/file/d/1FU78HV_z9aEz3dWsyXSZrprM9P5ges--/view?usp=sharing',
    description:
      'Modern social media content designed for strong visual impact.',
    theme: 'from-pink-500/30 via-fuchsia-900/10 to-black',
  },
  {
    id: '6',
    title: 'BRAND MOTION',
    category: 'Reels Editing',
    videoUrl:
      'https://drive.google.com/file/d/1QhS_o8zBAOKx9pANxXt7ZBRVsAczDyY5/view?usp=sharing',
    description:
      'Promotional reel combining motion, transitions and visual energy.',
    theme: 'from-orange-500/30 via-yellow-900/10 to-black',
  },
  {
    id: '7',
    title: 'KNOWLEDGE REEL',
    category: 'Insta Reels',
    videoUrl:
      'https://drive.google.com/file/d/1RjkOen7aGPpgvv5BMnyxOQulqyjsYnje/view?usp=drive_link',
    description:
      'Clean informative short-form edit built for Instagram audiences.',
    theme: 'from-emerald-500/30 via-green-900/10 to-black',
  },
  {
    id: '8',
    title: 'CREATOR STORIES',
    category: 'YouTube Content',
    videoUrl:
      'https://drive.google.com/file/d/1pcxSEfjmhsuAAV22oi6TpoAGPha_284m/view?usp=drive_link',
    description:
      'Creator-focused YouTube edit with cinematic pacing and dynamic cuts.',
    theme: 'from-sky-500/30 via-blue-900/10 to-black',
  },
  {
    id: '9',
    title: 'INFO IN MOTION',
    category: 'Reels Editing',
    videoUrl:
      'https://drive.google.com/file/d/1GZoWeNSNN_jSS-MrVZ9nwkECOP32mM66/view?usp=drive_link',
    description:
      'Informative content transformed into an engaging visual experience.',
    theme: 'from-fuchsia-500/30 via-purple-900/10 to-black',
  },
];

const AnimatedBackground = ({
  project,
}: {
  project: Project;
}) => {
  const words = [
    project.title,
    'EDIT',
    'MOTION',
    'VISUAL',
    'CREATE',
    'STORY',
    'FRAME',
    'CUT',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">

      {/* Individual colour theme */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.theme}`}
      />

      {/* Moving typography */}
      <div className="absolute inset-0 opacity-[0.16] rotate-[-8deg] scale-125">
        <div className="grid grid-cols-4 md:grid-cols-5 gap-8 p-8">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, 20, 0],
                opacity: [0.15, 0.45, 0.15],
              }}
              transition={{
                duration: 4 + (i % 4),
                repeat: Infinity,
                delay: (i % 6) * 0.3,
                ease: 'easeInOut',
              }}
              className="text-[9px] md:text-[11px] font-mono text-white whitespace-nowrap"
            >
              {words[i % words.length]}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cinematic light */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-72 h-72 rounded-full bg-accent blur-[110px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90" />

      {/* Number */}
      <div className="absolute top-5 right-6 text-5xl font-black text-white/[0.06]">
        {project.id.padStart(2, '0')}
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-5">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles
              size={12}
              className="text-accent"
            />

            <span className="text-[9px] font-mono text-accent uppercase tracking-[0.4em]">
              Shubham Films
            </span>

            <Sparkles
              size={12}
              className="text-accent"
            />
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-black tracking-[-0.05em] leading-[0.9] text-white">
            {project.title}
          </h3>

          <p className="mt-4 text-[10px] font-mono uppercase tracking-[0.3em] text-white/45">
            {project.category}
          </p>
        </motion.div>
      </div>

      {/* Bottom colour glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-accent/20 via-transparent to-transparent" />

      {/* Shine */}
      <motion.div
        animate={{ x: ['-120%', '120%'] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 4,
          ease: 'easeInOut',
        }}
        className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[-20deg]"
      />
    </div>
  );
};

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] =
    useState('All');

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const categories = [
    'All',
    'Social Media Ads',
    'Reels Editing',
    'Cinematic Edits',
    'YouTube Content',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? SAMPLE_PROJECTS
      : SAMPLE_PROJECTS.filter(
          (project) =>
            project.category === activeCategory
        );

  return (
    <section
      id="portfolio"
      className="py-32 px-6 max-w-7xl mx-auto"
    >

      {/* HEADER */}
      <div className="mb-16">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">

          <div>

            <motion.div
              initial={{ opacity: 0, x: -25 }}
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              MY{' '}
              <span className="text-white/25">
                PORTFOLIO
              </span>
            </motion.h2>

            <p className="mt-6 text-white/45 max-w-xl text-base md:text-lg">
              Video edits crafted for brands, creators and
              social media — built to capture attention and
              keep people watching.
            </p>

          </div>

          {/* STATS */}
          <div className="flex gap-8 md:gap-12">

            <div>
              <div className="text-3xl md:text-4xl font-bold">
                09
              </div>
              <div className="text-[10px] font-mono text-white/35 uppercase tracking-widest mt-1">
                Projects
              </div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-bold">
                04
              </div>
              <div className="text-[10px] font-mono text-white/35 uppercase tracking-widest mt-1">
                Formats
              </div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400">
                ●
              </div>
              <div className="text-[10px] font-mono text-white/35 uppercase tracking-widest mt-1">
                Available
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex gap-3 overflow-x-auto pb-5 mb-14 scrollbar-hide">

        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() =>
              setActiveCategory(category)
            }
            className={`flex-shrink-0 px-6 py-3 rounded-full border text-xs md:text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.12)]'
                : 'border-white/10 hover:border-accent/50 text-white/45 hover:text-white'
            }`}
          >
            {category}
          </motion.button>
        ))}

      </div>

      {/* PROJECTS */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
      >

        {filteredProjects.map(
          (project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -9,
                scale: 1.015,
              }}
              onClick={() =>
                setSelectedProject(project)
              }
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass cursor-pointer border border-white/5 hover:border-accent/40 transition-all duration-500"
            >

              <AnimatedBackground
                project={project}
              />

              {/* Project number */}
              <div className="absolute top-5 left-5 z-20">
                <span className="text-[9px] font-mono text-white/40 tracking-[0.3em]">
                  {project.id.padStart(2, '0')} / 09
                </span>
              </div>

              {/* Arrow */}
              <div className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-300">
                <ArrowDownRight size={18} />
              </div>

              {/* Description */}
              <div className="absolute left-5 right-5 bottom-24 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">

                <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                  {project.description}
                </p>

              </div>

              {/* Controls */}
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
                    onClick={(event) =>
                      event.stopPropagation()
                    }
                    className="w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>

                </div>

                <div className="px-3 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 max-w-[145px]">

                  <span className="text-[8px] font-mono text-white/55 uppercase tracking-widest">
                    {project.category}
                  </span>

                </div>

              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none border border-transparent group-hover:border-white/10 transition-all duration-500" />

            </motion.div>
          )
        )}

      </motion.div>

      {/* FOOTER NOTE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 flex items-center justify-center gap-3 text-white/25"
      >
        <span className="w-12 h-px bg-white/10" />
        <span className="text-[9px] font-mono uppercase tracking-[0.35em]">
          More edits coming soon
        </span>
        <span className="w-12 h-px bg-white/10" />
      </motion.div>

      {/* VIDEO MODAL */}
      <VideoModal
        isOpen={!!selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
        videoUrl={
          selectedProject?.videoUrl || ''
        }
        title={
          selectedProject?.title || ''
        }
      />

    </section>
  );
};
