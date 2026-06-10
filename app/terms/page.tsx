import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";
import { Scale, Mail, FileText, Shield, Users, AlertCircle } from 'lucide-react';
import { getTermsOfService } from '@/lib/api';
import { format } from 'date-fns';

export const revalidate = 3600; // Revalidate every hour

// Icon mapping for section styling variety
const sectionIcons = [FileText, Users, Shield, Scale, FileText, Shield, Scale, Users, AlertCircle, Scale, Shield, AlertCircle, Scale, FileText, FileText];

export default async function Terms() {
  const document = await getTermsOfService();

  // Format the effective date
  const effectiveDate = document?.effectiveDate
    ? format(new Date(document.effectiveDate), 'MMMM dd, yyyy')
    : 'November 20, 2025';

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <div className="bg-pax-cloud border-b border-pax-line">
          <div className="container mx-auto px-4 py-16 md:py-20 max-w-4xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-pax-sky rounded-xl mb-6">
                <Scale className="w-7 h-7 text-pax-cyan" />
              </div>
              <h1 className="pax-section-title mb-4">
                {document?.title || 'Terms of Service'}
              </h1>
              {document?.subtitle && (
                <p className="pax-section-sub">{document.subtitle}</p>
              )}
              {!document?.subtitle && (
                <p className="pax-section-sub">
                  Please read these terms carefully before using our services
                </p>
              )}
              <div className="mt-5 inline-flex items-center px-4 py-2 bg-white rounded-full border border-pax-line">
                <span className="text-sm text-pax-slate">Last Updated:</span>
                <span className="text-sm font-semibold text-pax-navy ml-2">{effectiveDate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Table of Contents - Sidebar */}
              {document?.sections && document.sections.length > 0 && (
                <div className="lg:col-span-1">
                  <div className="sticky top-24 pax-card p-4">
                    <h3 className="font-semibold text-pax-navy mb-4 text-sm uppercase tracking-wide">Contents</h3>
                    <nav className="space-y-1">
                      {document.sections.map((section, index) => (
                        <a
                          key={section.id}
                          href={`#section-${index}`}
                          className="block text-sm text-pax-slate hover:text-pax-cyan hover:bg-pax-ice px-3 py-2 rounded-lg transition-all duration-200"
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
                <div className="pax-card p-6 md:p-10 text-left">
                  {/* Introduction */}
                  {document?.introduction && (
                    <div className="bg-pax-cloud rounded-xl p-6 mb-8 border border-pax-line">
                      <div
                        className="text-pax-ink leading-relaxed prose prose-sm max-w-none prose-a:text-pax-cyan prose-headings:text-pax-navy"
                        dangerouslySetInnerHTML={{ __html: document.introduction }}
                      />
                    </div>
                  )}

                  {/* Sections */}
                  {document?.sections && document.sections.length > 0 ? (
                    document.sections.map((section, index) => {
                      const IconComponent = sectionIcons[index % sectionIcons.length];

                      return (
                        <section key={section.id} id={`section-${index}`} className="mb-10 scroll-mt-24">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-pax-sky flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-pax-cyan" />
                            </div>
                            <h2 className="text-xl font-bold text-pax-navy tracking-tight">{section.title}</h2>
                          </div>
                          <div className="border-l-2 border-pax-line ml-3 pl-6">
                            <div
                              className="text-pax-ink leading-relaxed prose prose-sm max-w-none prose-a:text-pax-cyan prose-headings:text-pax-navy"
                              dangerouslySetInnerHTML={{ __html: section.content }}
                            />
                          </div>
                        </section>
                      );
                    })
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-pax-slate">Terms of service content is being updated. Please check back later.</p>
                    </div>
                  )}

                  {/* Contact Section */}
                  <div className="mt-12 bg-pax-cloud rounded-2xl p-6 border border-pax-line">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-pax-sky rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-pax-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pax-navy mb-1">Contact Us</h3>
                        <p className="text-pax-slate">
                          Have questions about these terms? Reach out to us at{' '}
                          <a href="mailto:info@paxillin.com" className="text-pax-cyan font-medium hover:underline">
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
