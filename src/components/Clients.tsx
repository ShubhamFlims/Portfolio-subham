import { motion } from "motion/react";

const clients = [
  { name: "Client 1", logo: "/clients/client-1.png" },
  { name: "Client 2", logo: "/clients/client-2.png" },
  { name: "Client 3", logo: "/clients/client-3.png" },
  { name: "Client 4", logo: "/clients/client-4.png" },
  { name: "Client 5", logo: "/clients/client-5.png" },
  { name: "Client 6", logo: "/clients/client-6.png" },
  { name: "Client 7", logo: "/clients/client-7.png" },
  { name: "Client 8", logo: "/clients/client-8.png" },
  { name: "Client 9", logo: "/clients/client-9.png" },
  { name: "Client 10", logo: "/clients/client-10.png" },
  { name: "Client 11", logo: "/clients/client-11.png" },
  { name: "Client 12", logo: "/clients/client-12.png" },
  { name: "Client 13", logo: "/clients/client-13.png" },
  { name: "Client 14", logo: "/clients/client-14.png" },
  { name: "Client 15", logo: "/clients/client-15.png" },
  { name: "Client 16", logo: "/clients/client-16.png" },
];

export function Clients() {
  const logos = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden py-20 border-y border-white/5">
      <div className="mx-auto mb-10 max-w-7xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-purple-400">
          Clients I’ve Worked With
        </p>

        <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
          Trusted by creators & brands.
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent" />

        <motion.div
          className="flex w-max items-center gap-16 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {logos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group flex h-24 w-44 shrink-0 items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-[150px] object-contain opacity-55 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
