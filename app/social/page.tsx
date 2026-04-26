"use client";

import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";

const fbIcon = "/icons/facebook.png";
const instagramIcon = "/icons/instagram.png";
const linkedinIcon = "/icons/linkedIn.png";

const Social = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white font-sans antialiased">
        <Header />

        <section className="px-4 pb-12 pt-16">
          <div className="container mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 border border-paxillin-mist/50 bg-white/90 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-paxillin-ink/55"
            >
              Social
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-paxillin-secondary md:mb-8 md:text-6xl md:leading-[1.08]">
              Connect with
              <span className="mt-1 block text-paxillin-secondary md:mt-2">Paxillin</span>
            </h1>
            <p className="mx-auto max-w-3xl text-base font-normal leading-relaxed text-paxillin-ink/65 md:text-lg">
              Follow updates and join the conversation across the channels where we
              share product news and healthcare networking perspectives.
            </p>
          </div>
        </section>

        <section className="border-t border-paxillin-mist/40 bg-paxillin-parchment/25 px-4 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-10 text-center font-heading text-2xl font-semibold text-paxillin-secondary sm:text-3xl">
              Official channels
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-20">
              {[
                { name: "Facebook", icon: fbIcon },
                { name: "Instagram", icon: instagramIcon },
                { name: "LinkedIn", icon: linkedinIcon },
              ].map((item) => (
                <div
                  key={item.name}
                  className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-paxillin-mist/50 bg-paxillin-secondary shadow-md transition-shadow group-hover:shadow-lg">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-paxillin-ink/70 transition-colors group-hover:text-paxillin-secondary sm:text-base">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
};

export default Social;
