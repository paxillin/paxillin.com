"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";
import { Trash2, Menu, Settings, AlertTriangle, Mail, Info } from 'lucide-react';

const DeleteAccount = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <div className="bg-pax-cloud border-b border-pax-line">
          <div className="container mx-auto px-4 py-16 md:py-20 max-w-4xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-pax-sky rounded-xl mb-6">
                <Trash2 className="w-7 h-7 text-pax-cyan" />
              </div>
              <h1 className="pax-section-title mb-4">Delete Your Account</h1>
              <p className="pax-section-sub">
                Follow these steps to permanently delete your Paxillin account
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="pax-card p-6 md:p-10 text-left">

              {/* Important Notice */}
              <div className="bg-pax-mist border border-pax-line rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-pax-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-pax-navy mb-2">Important Notice</h3>
                    <p className="text-pax-ink leading-relaxed">
                      Deleting your account is <strong className="text-pax-navy">permanent and irreversible</strong>. All your data, connections, posts, and profile information will be permanently removed from our servers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Steps Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-pax-navy tracking-tight mb-6">How to Delete Your Account</h2>
                <p className="text-pax-ink mb-6">Follow these simple steps to delete your Paxillin account:</p>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-pax-sky rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-pax-cyan">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-pax-cloud border border-pax-line rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Menu className="w-5 h-5 text-pax-cyan" />
                          <h3 className="font-semibold text-pax-ink">Open Menu</h3>
                        </div>
                        <p className="text-pax-slate">
                          Click on the <strong className="text-pax-ink">menu button</strong> (usually found in the top-left or top-right corner of the app)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-pax-sky rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-pax-cyan">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-pax-cloud border border-pax-line rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Settings className="w-5 h-5 text-pax-cyan" />
                          <h3 className="font-semibold text-pax-ink">Go to Settings</h3>
                        </div>
                        <p className="text-pax-slate">
                          From the menu, click on the <strong className="text-pax-ink">Settings</strong> option
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-pax-sky rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-pax-cyan">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-pax-cloud border border-pax-line rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Trash2 className="w-5 h-5 text-pax-cyan" />
                          <h3 className="font-semibold text-pax-ink">Find Delete Account</h3>
                        </div>
                        <p className="text-pax-slate">
                          Scroll down to the bottom of the Settings page and click on <strong className="text-pax-ink">Delete Account</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-pax-sky rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-pax-cyan">4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-pax-cloud border border-pax-line rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-5 h-5 text-pax-cyan" />
                          <h3 className="font-semibold text-pax-ink">Confirm Deletion</h3>
                        </div>
                        <p className="text-pax-slate">
                          Read the warning message carefully and confirm that you want to permanently delete your account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Gets Deleted */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-pax-navy tracking-tight mb-4">What Gets Deleted?</h2>
                <div className="bg-pax-ice border border-pax-line rounded-xl p-6">
                  <ul className="space-y-2">
                    {[
                      'Your profile information and credentials',
                      'All your posts, comments, and contributions',
                      'Your connections and network',
                      'Your messages and conversations',
                      'All saved content and preferences',
                      'Your account access and login information',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-pax-cyan rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-pax-ink">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Data Retention */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-pax-navy tracking-tight mb-4">Data Retention</h2>
                <div className="bg-pax-cloud border border-pax-line rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-pax-cyan mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-pax-ink leading-relaxed mb-3">
                        After you delete your account:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-pax-cyan rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-pax-ink">Your account will be <strong className="text-pax-navy">immediately deactivated</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-pax-cyan rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-pax-ink">Your data will be <strong className="text-pax-navy">permanently deleted from our servers within 30 days</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-pax-cyan rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-pax-ink">Some data may be retained for legal or regulatory compliance as outlined in our Privacy Policy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="mt-12 bg-pax-cloud rounded-2xl p-6 border border-pax-line">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pax-sky rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-pax-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pax-navy mb-1">Need Help?</h3>
                    <p className="text-pax-slate">
                      If you&apos;re having trouble deleting your account or have questions, contact us at{' '}
                      <a href="mailto:support@paxillin.com" className="text-pax-cyan font-medium hover:underline">
                        support@paxillin.com
                      </a>
                    </p>
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
};

export default DeleteAccount;
