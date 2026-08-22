import { motion } from 'motion/react';
import { Mail, MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';

const WHATSAPP_NUMBER = 'YOUR_WHATSAPP_NUMBER';

export const Contact = () => {
  const whatsappMessage = encodeURIComponent(
    "Hi Shubham! I'm interested in your video editing services."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

        {/* Background glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="relative z-10 p-8 md:p-16 lg:p-20">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles
                size={15}
                className="text-accent"
              />

              <span className="text-accent font-mono text-xs uppercase tracking-[0.3em]">
                Let's Work Together
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85]">
              HAVE A
              <br />
              <span className="text-white/25">
                PROJECT?
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-white/45 text-base md:text-lg leading-relaxed">
              Have a video that needs to stand out?
              Let's turn your idea into something
              people actually want to watch.
            </p>
          </motion.div>

          {/* Contact buttons */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Email */}
            <motion.a
              href="mailto:shubhamfilms07@gmail.com"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 hover:border-accent/40 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex items-center justify-between">

                <div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>

                  <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">
                    Email Me
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold">
                    shubhamfilms07@gmail.com
                  </h3>
                </div>

                <ArrowUpRight
                  size={22}
                  className="text-white/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />

              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 hover:border-green-400/40 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex items-center justify-between">

                <div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircle size={20} />
                  </div>

                  <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">
                    Chat With Me
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold">
                    WhatsApp
                  </h3>

                  <p className="mt-2 text-sm text-white/35">
                    Let's discuss your project
                  </p>
                </div>

                <ArrowUpRight
                  size={22}
                  className="text-white/30 group-hover:text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />

              </div>
            </motion.a>

          </div>

          {/* Bottom availability */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex items-center gap-3"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
            </span>

            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
              Available for freelance projects
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
