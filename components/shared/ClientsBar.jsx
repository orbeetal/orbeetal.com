import Image from "next/image";
import { clients } from "@/data/index.js";

export function ClientsBar() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-medium text-white/40 mb-8 uppercase tracking-widest">
          Trusted by Our Happy Clients
        </p>
        <div className="flex flex-wrap justify-between items-center gap-4">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-36 md:w-44 flex flex-col items-center py-2 rounded-xl border border-white/10 bg-white text-sm font-medium hover:border-primary/30 hover:text-white/80 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="p-2 object-contain"
                />
              </div>
              <h3 className="text-xs md:text-base font-display font-semibold text-black text-center">
                {client.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
