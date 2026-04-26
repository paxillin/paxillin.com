"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Trash2, Menu, Settings, AlertTriangle, Mail, Info } from 'lucide-react';

const DeleteAccount = () => {
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
              Account
            </Badge>
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-red-200 bg-red-50">
              <Trash2 className="h-7 w-7 text-red-600" />
            </div>
            <h1 className="mb-4 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-paxillin-secondary md:text-5xl md:leading-[1.08]">
              Delete your account
            </h1>
            <p className="text-lg text-paxillin-ink/65">
              Follow these steps to permanently delete your Paxillin account.
            </p>
          </div>
        </section>

        <div className="py-12">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="rounded-xl border border-paxillin-mist/50 bg-white p-6 shadow-sm md:p-10">

              {/* Important Notice */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-2">Important Notice</h3>
                    <p className="text-red-800 leading-relaxed">
                      Deleting your account is <strong>permanent and irreversible</strong>. All your data, connections, posts, and profile information will be permanently removed from our servers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Steps Section */}
              <div className="mb-8">
                <h2 className="mb-6 font-heading text-2xl font-semibold text-paxillin-secondary">How to delete your account</h2>
                <p className="mb-6 text-paxillin-ink/70">Follow these simple steps:</p>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-paxillin-parchment/60">
                        <span className="text-lg font-bold text-paxillin-primary">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="rounded-lg border border-paxillin-mist/50 bg-paxillin-parchment/25 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Menu className="w-5 h-5 text-paxillin-ink/80" />
                          <h3 className="font-semibold text-paxillin-secondary">Open Menu</h3>
                        </div>
                        <p className="text-paxillin-ink/80">
                          Click on the <strong>menu button</strong> (usually found in the top-left or top-right corner of the app)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-paxillin-parchment/60">
                        <span className="text-lg font-bold text-paxillin-primary">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="rounded-lg border border-paxillin-mist/50 bg-paxillin-parchment/25 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Settings className="w-5 h-5 text-paxillin-ink/80" />
                          <h3 className="font-semibold text-paxillin-secondary">Go to Settings</h3>
                        </div>
                        <p className="text-paxillin-ink/80">
                          From the menu, click on the <strong>Settings</strong> option
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-paxillin-parchment/60">
                        <span className="text-lg font-bold text-paxillin-primary">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="rounded-lg border border-paxillin-mist/50 bg-paxillin-parchment/25 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Trash2 className="w-5 h-5 text-red-600" />
                          <h3 className="font-semibold text-paxillin-secondary">Find Delete Account</h3>
                        </div>
                        <p className="text-paxillin-ink/80">
                          Scroll down to the bottom of the Settings page and click on <strong>Delete Account</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-paxillin-parchment/60">
                        <span className="text-lg font-bold text-paxillin-primary">4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="rounded-lg border border-paxillin-mist/50 bg-paxillin-parchment/25 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                          <h3 className="font-semibold text-paxillin-secondary">Confirm Deletion</h3>
                        </div>
                        <p className="text-paxillin-ink/80">
                          Read the warning message carefully and confirm that you want to permanently delete your account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Gets Deleted */}
              <div className="mb-8">
                <h2 className="mb-4 font-heading text-2xl font-semibold text-paxillin-secondary">What gets deleted?</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
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
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-paxillin-ink/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Data Retention */}
              <div className="mb-8">
                <h2 className="mb-4 font-heading text-2xl font-semibold text-paxillin-secondary">Data retention</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-paxillin-ink/80 leading-relaxed mb-3">
                        After you delete your account:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-paxillin-ink/80">Your account will be <strong>immediately deactivated</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-paxillin-ink/80">Your data will be <strong>permanently deleted from our servers within 30 days</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-paxillin-ink/80">Some data may be retained for legal or regulatory compliance as outlined in our Privacy Policy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="mt-12 rounded-xl border border-paxillin-mist/50 bg-paxillin-parchment/30 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paxillin-mist/50 bg-white">
                    <Mail className="h-6 w-6 text-paxillin-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-heading font-semibold text-paxillin-secondary">Need help?</h3>
                    <p className="text-paxillin-ink/70">
                      If you&apos;re having trouble deleting your account or have questions, contact us at{' '}
                      <a href="mailto:support@paxillin.com" className="font-medium text-paxillin-primary hover:underline">
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
