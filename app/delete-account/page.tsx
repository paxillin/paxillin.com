"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";
import { Trash2, Menu, Settings, AlertTriangle, Mail, Info } from 'lucide-react';

const DeleteAccount = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
        <Header />

        {/* Hero Section */}
        <div className="pt-24 pb-12 bg-gradient-to-r from-red-50 via-orange-50 to-red-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <Trash2 className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Delete Your Account</h1>
              <p className="text-gray-600 text-lg">
                Follow these steps to permanently delete your Paxillin account
              </p>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">

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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Delete Your Account</h2>
                <p className="text-gray-700 mb-6">Follow these simple steps to delete your Paxillin account:</p>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Menu className="w-5 h-5 text-gray-700" />
                          <h3 className="font-semibold text-gray-900">Open Menu</h3>
                        </div>
                        <p className="text-gray-700">
                          Click on the <strong>menu button</strong> (usually found in the top-left or top-right corner of the app)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Settings className="w-5 h-5 text-gray-700" />
                          <h3 className="font-semibold text-gray-900">Go to Settings</h3>
                        </div>
                        <p className="text-gray-700">
                          From the menu, click on the <strong>Settings</strong> option
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Trash2 className="w-5 h-5 text-red-600" />
                          <h3 className="font-semibold text-gray-900">Find Delete Account</h3>
                        </div>
                        <p className="text-gray-700">
                          Scroll down to the bottom of the Settings page and click on <strong>Delete Account</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                          <h3 className="font-semibold text-gray-900">Confirm Deletion</h3>
                        </div>
                        <p className="text-gray-700">
                          Read the warning message carefully and confirm that you want to permanently delete your account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Gets Deleted */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Gets Deleted?</h2>
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
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Data Retention */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        After you delete your account:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">Your account will be <strong>immediately deactivated</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">Your data will be <strong>permanently deleted from our servers within 30 days</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">Some data may be retained for legal or regulatory compliance as outlined in our Privacy Policy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="mt-12 bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl p-6 border border-primary/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Need Help?</h3>
                    <p className="text-gray-600">
                      If you&apos;re having trouble deleting your account or have questions, contact us at{' '}
                      <a href="mailto:support@paxillin.com" className="text-primary font-medium hover:underline">
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
