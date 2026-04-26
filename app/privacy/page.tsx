import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Shield, Mail } from 'lucide-react';
import { getPrivacyPolicy } from '@/lib/api';
import { format } from 'date-fns';

export const revalidate = 3600; // Revalidate every hour

export default async function Privacy() {
  const document = await getPrivacyPolicy();

  // Format the effective date
  const effectiveDate = document?.effectiveDate
    ? format(new Date(document.effectiveDate), 'MMMM dd, yyyy')
    : 'November 20, 2025';

  return (
    <PageLayout>
      <div className="min-h-screen bg-white font-sans antialiased">
        <Header />

        <section className="border-b border-paxillin-mist/40 px-4 pb-12 pt-16">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="mb-6 border border-paxillin-mist/50 bg-white/90 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-paxillin-ink/55"
            >
              Legal
            </Badge>
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-paxillin-mist/50 bg-paxillin-parchment/50">
              <Shield className="h-7 w-7 text-paxillin-primary" />
            </div>
            <h1 className="mb-4 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-paxillin-secondary md:text-5xl md:leading-[1.08]">
              {document?.title || 'Privacy Policy'}
            </h1>
            {document?.subtitle && (
              <p className="text-lg text-paxillin-ink/65">{document.subtitle}</p>
            )}
            {!document?.subtitle && (
              <p className="text-lg text-paxillin-ink/65">
                Your privacy matters to us. Learn how we protect your data.
              </p>
            )}
            <div className="mt-6 inline-flex items-center rounded-full border border-paxillin-mist/50 bg-paxillin-parchment/30 px-4 py-2">
              <span className="text-sm text-paxillin-ink/55">Last updated:</span>
              <span className="ml-2 text-sm font-semibold text-paxillin-secondary">{effectiveDate}</span>
            </div>
          </div>
        </section>

        <div className="py-12">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {/* Table of Contents - Sidebar */}
              {document?.sections && document.sections.length > 0 && (
                <div className="lg:col-span-1">
                  <div className="sticky top-24 rounded-xl border border-paxillin-mist/50 bg-white p-4 shadow-sm">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-paxillin-secondary">Contents</h3>
                    <nav className="space-y-1">
                      {document.sections.map((section, index) => (
                        <a
                          key={section.id}
                          href={`#section-${index}`}
                          className="block rounded-lg px-3 py-2 text-sm text-paxillin-ink/70 transition-colors hover:bg-paxillin-parchment/50 hover:text-paxillin-primary"
                        >
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              )}

              {/* Main Content */}
              <div className={document?.sections && document.sections.length > 0 ? "lg:col-span-3" : "lg:col-span-4"}>
                <div className="rounded-xl border border-paxillin-mist/50 bg-white p-6 shadow-sm md:p-10">
                  {/* Introduction */}
                  {document?.introduction && (
                    <div className="mb-8 rounded-xl border border-paxillin-mist/50 bg-paxillin-parchment/30 p-6">
                      <div
                        className="prose prose-sm max-w-none leading-relaxed text-paxillin-ink/80"
                        dangerouslySetInnerHTML={{ __html: document.introduction }}
                      />
                    </div>
                  )}

                  {/* Sections */}
                  {document?.sections && document.sections.length > 0 ? (
                    document.sections.map((section, index) => (
                      <section key={section.id} id={`section-${index}`} className="mb-10 scroll-mt-24">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-paxillin-parchment/60">
                            <Shield className="h-5 w-5 text-paxillin-primary" />
                          </div>
                          <h2 className="font-heading text-xl font-semibold text-paxillin-secondary">{section.title}</h2>
                        </div>
                        <div className="ml-3 border-l-2 border-paxillin-mist/60 pl-6">
                          <div
                            className="prose prose-sm max-w-none leading-relaxed text-paxillin-ink/80"
                            dangerouslySetInnerHTML={{ __html: section.content }}
                          />
                        </div>
                      </section>
                    ))
                  ) : (
                    <div className="py-12 text-center">
                      <p className="text-paxillin-ink/55">Privacy policy content is being updated. Please check back later.</p>
                    </div>
                  )}

                  {/* Contact Section */}
                  <div className="mt-12 rounded-xl border border-paxillin-mist/50 bg-paxillin-parchment/30 p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paxillin-mist/50 bg-white">
                        <Mail className="h-6 w-6 text-paxillin-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-heading font-semibold text-paxillin-secondary">Questions or concerns?</h3>
                        <p className="text-paxillin-ink/70">
                          Have questions about this privacy policy? Reach out to us at{' '}
                          <a href="mailto:info@paxillin.com" className="font-medium text-paxillin-primary hover:underline">
                            info@paxillin.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageLayout>
  );
}
