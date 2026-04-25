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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
        <Header />

        {/* Hero Section */}
        <div className="pt-24 pb-12 bg-gradient-to-r from-primary/10 via-blue-50 to-primary/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {document?.title || 'Terms of Service'}
              </h1>
              {document?.subtitle && (
                <p className="text-gray-600 text-lg">{document.subtitle}</p>
              )}
              {!document?.subtitle && (
                <p className="text-gray-600 text-lg">
                  Please read these terms carefully before using our services
                </p>
              )}
              <div className="mt-4 inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <span className="text-sm text-gray-500">Last Updated:</span>
                <span className="text-sm font-semibold text-gray-700 ml-2">{effectiveDate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Table of Contents - Sidebar */}
              {document?.sections && document.sections.length > 0 && (
                <div className="lg:col-span-1">
                  <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Contents</h3>
                    <nav className="space-y-1">
                      {document.sections.map((section, index) => (
                        <a
                          key={section.id}
                          href={`#section-${index}`}
                          className="block text-sm text-gray-600 hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-lg transition-all duration-200"
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
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">
                  {/* Introduction */}
                  {document?.introduction && (
                    <div className="bg-gradient-to-r from-blue-50 to-primary/5 rounded-xl p-6 mb-8 border border-blue-100">
                      <div
                        className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ __html: document.introduction }}
                      />
                    </div>
                  )}

                  {/* Sections */}
                  {document?.sections && document.sections.length > 0 ? (
                    document.sections.map((section, index) => {
                      const IconComponent = sectionIcons[index % sectionIcons.length];
                      // Special styling for disclaimer/warning sections
                      const isWarningSection = section.title.toLowerCase().includes('disclaimer') ||
                                               section.title.toLowerCase().includes('termination') ||
                                               section.title.toLowerCase().includes('warranty');

                      return (
                        <section key={section.id} id={`section-${index}`} className="mb-10 scroll-mt-24">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              isWarningSection ? 'bg-amber-100' : 'bg-primary/10'
                            }`}>
                              <IconComponent className={`w-5 h-5 ${
                                isWarningSection ? 'text-amber-600' : 'text-primary'
                              }`} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                          </div>
                          <div className={`pl-13 border-l-2 ml-3 pl-6 ${
                            isWarningSection ? 'border-amber-200' : 'border-gray-100'
                          }`}>
                            <div
                              className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
                              dangerouslySetInnerHTML={{ __html: section.content }}
                            />
                          </div>
                        </section>
                      );
                    })
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500">Terms of service content is being updated. Please check back later.</p>
                    </div>
                  )}

                  {/* Contact Section */}
                  <div className="mt-12 bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl p-6 border border-primary/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Contact Us</h3>
                        <p className="text-gray-600">
                          Have questions about these terms? Reach out to us at{' '}
                          <a href="mailto:info@paxillin.com" className="text-primary font-medium hover:underline">
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
