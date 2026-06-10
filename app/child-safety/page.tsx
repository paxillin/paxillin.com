"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";
import { Shield, Mail, Baby, AlertTriangle, UserX, Flag, Lock, FileText, Users, Eye, Scale, Phone } from 'lucide-react';

const ChildSafety = () => {
  const sections = [
    { id: 'commitment', title: '1. Our Commitment to Child Safety', icon: Shield },
    { id: 'age-restrictions', title: '2. Age Restrictions', icon: UserX },
    { id: 'csae-prevention', title: '3. CSAE Prevention Standards', icon: AlertTriangle },
    { id: 'content-moderation', title: '4. Content Moderation', icon: Eye },
    { id: 'reporting', title: '5. Reporting Mechanisms', icon: Flag },
    { id: 'data-protection', title: '6. Data Protection for Minors', icon: Lock },
    { id: 'parental-info', title: '7. Information for Parents', icon: Users },
    { id: 'compliance', title: '8. Regulatory Compliance', icon: Scale },
    { id: 'contact', title: '9. Child Safety Contact', icon: Phone },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <div className="bg-pax-cloud border-b border-pax-line">
          <div className="container mx-auto px-4 py-16 md:py-20 max-w-4xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-pax-sky rounded-xl mb-6">
                <Baby className="w-7 h-7 text-pax-cyan" />
              </div>
              <h1 className="pax-section-title mb-4">Child Safety Policy</h1>
              <p className="pax-section-sub">
                Our commitment to protecting children and preventing exploitation on our platform.
              </p>
              <div className="mt-5 inline-flex items-center px-4 py-2 bg-white rounded-full border border-pax-line">
                <span className="text-sm text-pax-slate">Last Updated:</span>
                <span className="text-sm font-semibold text-pax-navy ml-2">December 2, 2025</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Table of Contents - Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 pax-card p-4">
                  <h3 className="font-semibold text-pax-navy mb-4 text-sm uppercase tracking-wide">Contents</h3>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-pax-slate hover:text-pax-cyan hover:bg-pax-ice px-3 py-2 rounded-lg transition-all duration-200"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="pax-card p-4 sm:p-6 md:p-10 text-left">
                  {/* Introduction */}
                  <div className="bg-pax-cloud rounded-xl p-4 sm:p-6 mb-8 border border-pax-line">
                    <p className="text-pax-ink leading-relaxed">
                      <strong className="text-pax-navy">Paxillin Interface Private Limited</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to maintaining a safe environment and protecting children from exploitation, abuse, and harmful content. This Child Safety Policy outlines our standards, procedures, and commitment to preventing Child Sexual Abuse and Exploitation (CSAE) and ensuring our platform remains safe for all users.
                    </p>
                  </div>

                  <div className="bg-pax-mist border border-pax-line rounded-xl p-4 sm:p-6 mb-8">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-pax-navy mt-0.5 flex-shrink-0" />
                      <p className="text-pax-ink leading-relaxed">
                        <strong className="text-pax-navy">Zero Tolerance Policy:</strong> Paxillin maintains an absolute zero-tolerance stance toward any content or behavior that exploits, endangers, or sexualizes children. Any violation will result in immediate account termination and reporting to relevant law enforcement authorities.
                      </p>
                    </div>
                  </div>

                  {/* Section 1 */}
                  <section id="commitment" className="mb-10 scroll-mt-24">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pax-sky rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-pax-cyan" />
                      </div>
                      <h2 className="text-base sm:text-xl font-bold text-pax-navy tracking-tight">1. Our Commitment to Child Safety</h2>
                    </div>
                    <div className="border-l-0 sm:border-l-2 border-pax-line ml-0 sm:ml-4 pl-0 sm:pl-5">
                      <p className="text-pax-ink leading-relaxed mb-4">
                        At Paxillin, child safety is a fundamental priority. We are dedicated to:
                      </p>
                      <ul className="space-y-3">
                        {[
                          'Preventing the creation, distribution, and consumption of child sexual abuse material (CSAM) on our platform.',
                          'Implementing robust systems to detect and remove exploitative content immediately.',
                          'Cooperating fully with law enforcement agencies in investigations related to child exploitation.',
                          'Providing clear reporting mechanisms for users to flag concerning content or behavior.',
                          'Continuously improving our safety measures through regular policy reviews and technology updates.',
                          'Training our team members on child safety protocols and best practices.',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-pax-cyan rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-pax-ink">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  {/* Section 2 */}
                  <section id="age-restrictions" className="mb-10 scroll-mt-24">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pax-sky rounded-xl flex items-center justify-center flex-shrink-0">
                        <UserX className="w-5 h-5 text-pax-cyan" />
                      </div>
                      <h2 className="text-base sm:text-xl font-bold text-pax-navy tracking-tight">2. Age Restrictions</h2>
                    </div>
                    <div className="border-l-0 sm:border-l-2 border-pax-line ml-0 sm:ml-4 pl-0 sm:pl-5">
                      <div className="bg-pax-ice border border-pax-line rounded-xl p-4 mb-4">
                        <p className="text-pax-navy leading-relaxed font-semibold">
                          Paxillin is strictly intended for healthcare professionals aged 18 years and above.
                        </p>
                      </div>
                      <p className="text-pax-ink leading-relaxed mb-4">
                        Our age verification and restriction measures include:
                      </p>
                      <ul className="space-y-2">
                        {[
                          'Mandatory age verification during the registration process.',
                          'Professional credential verification that inherently confirms adult status.',
                          'Immediate account termination if a user is discovered to be under 18 years of age.',
                          'Regular audits of user accounts to ensure compliance with age requirements.',
                          'Clear terms of service stating the minimum age requirement.',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-pax-cyan rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-pax-ink">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-pax-ink leading-relaxed mt-4">
                        If we discover that personal information has been collected from anyone under 18, we will delete that information immediately and take appropriate action.
                      </p>
                    </div>
                  </section>

                  {/* Section 3 */}
                  <section id="csae-prevention" className="mb-10 scroll-mt-24">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pax-sky rounded-xl flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-5 h-5 text-pax-cyan" />
                      </div>
                      <h2 className="text-base sm:text-xl font-bold text-pax-navy tracking-tight">3. Child Sexual Abuse and Exploitation (CSAE) Prevention Standards</h2>
                    </div>
                    <div className="border-l-0 sm:border-l-2 border-pax-line ml-0 sm:ml-4 pl-0 sm:pl-5 space-y-6">
                      <div>
                        <p className="text-pax-navy font-semibold mb-3">Prohibited Content and Behavior:</p>
                        <p className="text-pax-ink leading-relaxed mb-3">
                          The following content and behaviors are strictly prohibited and will result in immediate action:
                        </p>
                        <ul className="space-y-2">
                          {[
                            'Child Sexual Abuse Material (CSAM) including any imagery, video, or text depicting minors in sexual situations.',
                            'Grooming behaviors or any attempts to establish inappropriate relationships with minors.',
                            'Solicitation or trafficking of minors for any purpose.',
                            'Content that sexualizes or objectifies minors in any way.',
                            'Sharing or requesting personal information of minors for exploitative purposes.',
                            'Any content promoting, glorifying, or normalizing child abuse or exploitation.',
                            'Artificially generated (AI/deepfake) sexual content involving minors.',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-pax-navy rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-pax-ink">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-pax-navy font-semibold mb-3">Our Prevention Measures:</p>
                        <ul className="space-y-2">
                          {[
                            'Implementation of automated detection systems to identify and remove CSAM and related content.',
                            'Use of PhotoDNA and similar hash-matching technologies to detect known CSAM.',
                            'Human review teams trained in identifying exploitative content and behavior patterns.',
                            'Proactive monitoring of platform activity for suspicious patterns.',
                            'Regular updates to detection systems based on emerging threats and techniques.',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-pax-green rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-pax-ink">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 4 */}
                  <section id="content-moderation" className="mb-10 scroll-mt-24">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pax-sky rounded-xl flex items-center justify-center flex-shrink-0">
                        <Eye className="w-5 h-5 text-pax-cyan" />
                      </div>
                      <h2 className="text-base sm:text-xl font-bold text-pax-navy tracking-tight">4. Content Moderation</h2>
                    </div>
                    <div className="border-l-0 sm:border-l-2 border-pax-line ml-0 sm:ml-4 pl-0 sm:pl-5">
                      <p className="text-pax-ink leading-relaxed mb-4">
                        Our content moderation approach includes multiple layers of protection:
                      </p>
                      <ul className="space-y-3">
                        {[
                          { label: 'Automated Scanning', desc: 'All uploaded content is automatically scanned using industry-standard detection technologies.' },
                          { label: 'Human Review', desc: 'Flagged content is reviewed by trained moderators within 24 hours of detection.' },
                          { label: 'User Reports', desc: 'All user reports are investigated promptly, with priority given to child safety concerns.' },
                          { label: 'Proactive Monitoring', desc: 'We actively monitor for patterns and behaviors associated with child exploitation.' },
                          { label: 'Swift Removal', desc: 'Violating content is removed immediately upon detection, and accounts are terminated.' },
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-pax-cyan rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-pax-ink">
                              <strong className="text-pax-navy">{item.label}:</strong> {item.desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  {/* Section 5 */}
                  <section id="reporting" className="mb-10 scroll-mt-24">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pax-sky rounded-xl flex items-center justify-center flex-shrink-0">
                        <Flag className="w-5 h-5 text-pax-cyan" />
                      </div>
                      <h2 className="text-base sm:text-xl font-bold text-pax-navy tracking-tight">5. Reporting Mechanisms</h2>
                    </div>
                    <div className="border-l-0 sm:border-l-2 border-pax-line ml-0 sm:ml-4 pl-0 sm:pl-5">
                      <p className="text-pax-ink leading-relaxed mb-4">
                        We provide multiple channels for reporting child safety concerns:
                      </p>
                      <div className="space-y-4">
                        <div className="bg-pax-cloud border border-pax-line rounded-xl p-4">
                          <p className="text-pax-navy font-semibold mb-2">In-App Reporting:</p>
                          <p className="text-pax-ink">Use the &quot;Report&quot; feature available on all content and user profiles to flag concerning material or behavior.</p>
                        </div>
                        <div className="bg-pax-cloud border border-pax-line rounded-xl p-4">
                          <p className="text-pax-navy font-semibold mb-2">Email Reporting:</p>
                          <p className="text-pax-ink">
                            Send reports directly to our Child Safety Team at{' '}
                            <a href="mailto:safety@paxillin.com" className="text-pax-cyan font-medium hover:underline">
                              safety@paxillin.com
                            </a>
                          </p>
                        </div>
                        <div className="bg-pax-cloud border border-pax-line rounded-xl p-4">
                          <p className="text-pax-navy font-semibold mb-2">External Reporting:</p>
                          <p className="text-pax-ink">
                            You may also report to the National Center for Missing &amp; Exploited Children (NCMEC) CyberTipline or your local law enforcement authorities.
                          </p>
                        </div>
                      </div>
                      <p className="text-pax-ink leading-relaxed mt-4">
                        <strong className="text-pax-navy">Response Commitment:</strong> All child safety reports are treated as high priority and are reviewed within 24 hours. We cooperate fully with law enforcement investigations and report confirmed CSAM to NCMEC and relevant authorities.
                      </p>
                    </div>
                  </section>

                  {/* Section 6 */}
                  <section id="data-protection" className="mb-10 scroll-mt-24">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pax-sky rounded-xl flex items-center justify-center flex-shrink-0">
                        <Lock className="w-5 h-5 text-pax-cyan" />
                      </div>
                      <h2 className="text-base sm:text-xl font-bold text-pax-navy tracking-tight">6. Data Protection for Minors</h2>
                    </div>
                    <div className="border-l-0 sm:border-l-2 border-pax-line ml-0 sm:ml-4 pl-0 sm:pl-5">
                      <p className="text-pax-ink leading-relaxed mb-4">
                        While our platform is not intended for minors, we maintain strict data protection measures:
                      </p>
                      <ul className="space-y-2">
                        {[
                          'We do not knowingly collect personal information from anyone under 18 years of age.',
                          'If we become aware that we have collected personal data from a minor, we immediately delete such information.',
                          'We do not share, sell, or use any data from minors for any purpose.',
                          'Our advertising and analytics systems are configured to exclude targeting of minors.',
                          "We comply with COPPA (Children's Online Privacy Protection Act) and similar international regulations.",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-pax-green rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-pax-ink">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  {/* Section 7 */}
                  <section id="parental-info" className="mb-10 scroll-mt-24">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pax-sky rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-pax-cyan" />
                      </div>
                      <h2 className="text-base sm:text-xl font-bold text-pax-navy tracking-tight">7. Information for Parents and Guardians</h2>
                    </div>
                    <div className="border-l-0 sm:border-l-2 border-pax-line ml-0 sm:ml-4 pl-0 sm:pl-5">
                      <p className="text-pax-ink leading-relaxed mb-4">
                        We encourage parents and guardians to be involved in their children&apos;s online activities:
                      </p>
                      <ul className="space-y-2">
                        {[
                          'Paxillin is a professional healthcare networking platform and is not designed for users under 18.',
                          'If you believe your child has created an account on our platform, please contact us immediately.',
                          'We will promptly investigate and delete any account belonging to a minor.',
                          "We recommend using parental control software to monitor and restrict your child's online activities.",
                          'Educate children about online safety and the importance of not sharing personal information.',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-pax-cyan rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-pax-ink">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  {/* Section 8 */}
                  <section id="compliance" className="mb-10 scroll-mt-24">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pax-sky rounded-xl flex items-center justify-center flex-shrink-0">
                        <Scale className="w-5 h-5 text-pax-cyan" />
                      </div>
                      <h2 className="text-base sm:text-xl font-bold text-pax-navy tracking-tight">8. Regulatory Compliance</h2>
                    </div>
                    <div className="border-l-0 sm:border-l-2 border-pax-line ml-0 sm:ml-4 pl-0 sm:pl-5">
                      <p className="text-pax-ink leading-relaxed mb-4">
                        We comply with all applicable child safety laws and regulations, including:
                      </p>
                      <ul className="space-y-2 mb-4">
                        {[
                          { label: 'Google Play Child Safety Standards', desc: "Full compliance with Google's CSAE prevention requirements." },
                          { label: 'Apple App Store Guidelines', desc: "Adherence to Apple's child safety and content moderation standards." },
                          { label: 'COPPA', desc: "Children's Online Privacy Protection Act compliance." },
                          { label: 'DPDPA 2023', desc: "India's Digital Personal Data Protection Act requirements." },
                          { label: 'IT Act 2000', desc: "Compliance with India's Information Technology Act provisions on child protection." },
                          { label: 'POCSO Act', desc: 'Protection of Children from Sexual Offences Act compliance.' },
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-pax-cyan rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-pax-ink">
                              <strong className="text-pax-navy">{item.label}:</strong> {item.desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-pax-ink leading-relaxed">
                        We regularly review and update our policies to ensure ongoing compliance with evolving regulations and industry best practices.
                      </p>
                    </div>
                  </section>

                  {/* Section 9 */}
                  <section id="contact" className="mb-10 scroll-mt-24">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pax-sky rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-pax-cyan" />
                      </div>
                      <h2 className="text-base sm:text-xl font-bold text-pax-navy tracking-tight">9. Child Safety Point of Contact</h2>
                    </div>
                    <div className="border-l-0 sm:border-l-2 border-pax-line ml-0 sm:ml-4 pl-0 sm:pl-5">
                      <p className="text-pax-ink leading-relaxed mb-4">
                        For any child safety concerns or inquiries, please contact our dedicated Child Safety Team:
                      </p>
                      <div className="bg-pax-cloud border border-pax-line rounded-xl p-4">
                        <p className="text-pax-ink leading-relaxed">
                          <strong className="text-pax-navy">Paxillin Interface Private Limited</strong>
                        </p>
                        <p className="text-pax-ink leading-relaxed">
                          Child Safety Team
                        </p>
                        <p className="text-pax-ink leading-relaxed">
                          Email:{' '}
                          <a href="mailto:safety@paxillin.com" className="text-pax-cyan font-medium hover:underline">
                            safety@paxillin.com
                          </a>
                        </p>
                        <p className="text-pax-ink leading-relaxed">
                          General Inquiries:{' '}
                          <a href="mailto:info@paxillin.com" className="text-pax-cyan font-medium hover:underline">
                            info@paxillin.com
                          </a>
                        </p>
                      </div>
                      <p className="text-pax-ink leading-relaxed mt-4">
                        <strong className="text-pax-navy">Response Time:</strong> All child safety reports are prioritized and will receive a response within 24 hours.
                      </p>
                    </div>
                  </section>

                  {/* Policy Updates */}
                  <section className="mb-10">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pax-sky rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-pax-cyan" />
                      </div>
                      <h2 className="text-base sm:text-xl font-bold text-pax-navy tracking-tight">Policy Updates</h2>
                    </div>
                    <div className="border-l-0 sm:border-l-2 border-pax-line ml-0 sm:ml-4 pl-0 sm:pl-5">
                      <p className="text-pax-ink leading-relaxed">
                        This Child Safety Policy may be updated periodically to reflect changes in regulations, technology, or our practices. We will notify users of significant changes through our platform or via email. Continued use of the Service after updates constitutes acceptance of the revised policy.
                      </p>
                    </div>
                  </section>

                  {/* Contact Section */}
                  <div className="mt-12 bg-pax-cloud rounded-2xl p-4 sm:p-6 border border-pax-line">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-pax-sky rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-pax-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pax-navy mb-1">Report a Child Safety Concern</h3>
                        <p className="text-pax-slate">
                          If you encounter any content or behavior that endangers children, please report immediately to{' '}
                          <a href="mailto:safety@paxillin.com" className="text-pax-cyan font-medium hover:underline">
                            safety@paxillin.com
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
};

export default ChildSafety;
