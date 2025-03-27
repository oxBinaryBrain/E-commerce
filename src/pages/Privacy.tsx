
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Aesthete</title>
        <meta name="description" content="Our privacy policy explains how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">Privacy Policy</h1>
                <p className="text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
                  At Aesthete, we're committed to protecting your privacy and ensuring the security of your personal information. 
                  This policy explains our practices regarding the collection, use, and disclosure of your data.
                </p>
                <p className="text-sm text-muted-foreground mt-4 animate-fade-in [animation-delay:300ms]">
                  Last Updated: May 15, 2023
                </p>
              </div>
            </div>
          </section>
          
          {/* Privacy Policy Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="space-y-12 animate-slide-up">
                {/* Information We Collect */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">1. Information We Collect</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <h3 className="text-lg font-medium text-foreground">Personal Information</h3>
                    <p>
                      When you create an account, place an order, sign up for our newsletter, or interact with our website, 
                      we may collect the following personal information:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Contact information (name, email address, phone number, shipping and billing addresses)</li>
                      <li>Account information (username, password)</li>
                      <li>Payment information (credit card details, though we do not store complete payment information)</li>
                      <li>Order history and preferences</li>
                      <li>Communications with our customer service team</li>
                    </ul>
                    
                    <h3 className="text-lg font-medium text-foreground mt-6">Automatically Collected Information</h3>
                    <p>
                      When you visit our website, we automatically collect certain information about your device and usage, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>IP address and location data</li>
                      <li>Device information (browser type, operating system)</li>
                      <li>Pages viewed, time spent on site, interactions with site features</li>
                      <li>Referral source</li>
                      <li>Cookies and similar tracking technologies (as described in our Cookie Policy)</li>
                    </ul>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* How We Use Your Information */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">2. How We Use Your Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Processing and fulfilling your orders</li>
                      <li>Managing your account and providing customer support</li>
                      <li>Personalizing your shopping experience</li>
                      <li>Communicating with you about orders, products, and promotional offers (if you've opted in)</li>
                      <li>Improving our website, products, and services</li>
                      <li>Analyzing usage patterns and trends</li>
                      <li>Preventing fraudulent transactions and maintaining security</li>
                      <li>Complying with legal obligations</li>
                    </ul>
                    
                    <p className="mt-4">
                      We process your personal data based on one or more of the following legal grounds:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Performance of a contract (when processing is necessary to fulfill an order)</li>
                      <li>Your consent (such as for marketing communications)</li>
                      <li>Legitimate interests (such as for security and fraud prevention)</li>
                      <li>Legal obligation (when required by law)</li>
                    </ul>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Sharing Your Information */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">3. Sharing Your Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We may share your personal information with:
                    </p>
                    <h3 className="text-lg font-medium text-foreground">Service Providers</h3>
                    <p>
                      We work with third-party service providers who perform functions on our behalf, such as:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Payment processors</li>
                      <li>Shipping and fulfillment companies</li>
                      <li>Customer service and support providers</li>
                      <li>Marketing and analytics partners</li>
                      <li>Cloud hosting and storage providers</li>
                    </ul>
                    <p>
                      These providers have access to personal information needed to perform their functions but are 
                      contractually obligated to maintain the confidentiality and security of your data.
                    </p>
                    
                    <h3 className="text-lg font-medium text-foreground mt-6">Legal Requirements</h3>
                    <p>
                      We may disclose your information if required to do so by law or if we believe in good faith that 
                      such action is necessary to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Comply with legal obligations</li>
                      <li>Protect and defend our rights or property</li>
                      <li>Prevent or investigate possible wrongdoing</li>
                      <li>Protect the personal safety of users or the public</li>
                    </ul>
                    
                    <h3 className="text-lg font-medium text-foreground mt-6">Business Transfers</h3>
                    <p>
                      If Aesthete is involved in a merger, acquisition, or sale of all or a portion of its assets, 
                      your personal information may be transferred as part of that transaction. We will notify you 
                      via email and/or a prominent notice on our website of any change in ownership or uses of your 
                      personal information.
                    </p>
                    
                    <p className="mt-4 italic">
                      We do not sell, rent, or lease your personal information to third parties for their marketing purposes.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Data Security */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">4. Data Security</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal information against 
                      unauthorized access, accidental loss, alteration, or destruction, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Encryption of sensitive data</li>
                      <li>Secure socket layer (SSL) technology for all transactions</li>
                      <li>Regular security assessments and monitoring</li>
                      <li>Access controls and authentication procedures</li>
                      <li>Employee training on data protection practices</li>
                    </ul>
                    <p className="mt-4">
                      While we strive to protect your personal information, no method of transmission over the Internet 
                      or electronic storage is 100% secure. We cannot guarantee absolute security but commit to promptly 
                      notify you in the event of a breach affecting your personal data.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Your Choices and Rights */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">5. Your Choices and Rights</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Depending on your location, you may have various rights regarding your personal information, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Access:</strong> Request information about the personal data we hold about you.</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal data in certain circumstances.</li>
                      <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances.</li>
                      <li><strong>Data portability:</strong> Request transfer of your data to you or a third party.</li>
                      <li><strong>Objection:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
                      <li><strong>Withdraw consent:</strong> Withdraw previously given consent for data processing.</li>
                    </ul>
                    
                    <p className="mt-4">
                      To exercise any of these rights, please contact us at privacy@aesthete.com. We will respond to your 
                      request within 30 days. For your protection, we may need to verify your identity before implementing 
                      your request.
                    </p>
                    
                    <h3 className="text-lg font-medium text-foreground mt-6">Marketing Communications</h3>
                    <p>
                      You can opt out of receiving marketing communications from us at any time by:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Clicking the "unsubscribe" link in any marketing email</li>
                      <li>Updating your communication preferences in your account settings</li>
                      <li>Contacting our customer service team</li>
                    </ul>
                    <p>
                      Please note that even if you opt out of marketing communications, we will still send you 
                      transactional messages related to your account and orders.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Cookies */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">6. Cookies and Tracking Technologies</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We use cookies and similar tracking technologies to collect information about your browsing activities 
                      and to improve your experience on our website. Cookies are small text files that are stored on your 
                      device when you visit a website.
                    </p>
                    
                    <p>
                      We use the following types of cookies:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Essential cookies:</strong> Necessary for the website to function properly.</li>
                      <li><strong>Preference cookies:</strong> Enable the website to remember your preferences.</li>
                      <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website.</li>
                      <li><strong>Marketing cookies:</strong> Used to track visitors across websites to display relevant advertisements.</li>
                    </ul>
                    
                    <p className="mt-4">
                      You can manage your cookie preferences through your browser settings. Please note that disabling 
                      certain cookies may impact your experience on our website.
                    </p>
                    
                    <p>
                      For more detailed information, please refer to our separate Cookie Policy.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* International Data Transfers */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">7. International Data Transfers</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Aesthete is based in the United States, and we process and store information on servers located in the 
                      United States and potentially other countries. As such, we may transfer your personal information to 
                      countries outside your country of residence, which may have different data protection rules.
                    </p>
                    
                    <p>
                      When we transfer personal data from the European Economic Area (EEA), United Kingdom, or Switzerland 
                      to countries that have not received an adequacy decision, we implement appropriate safeguards such as:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Standard Contractual Clauses approved by the European Commission</li>
                      <li>Binding Corporate Rules</li>
                      <li>Approved certification mechanisms or codes of conduct</li>
                    </ul>
                    
                    <p className="mt-4">
                      By using our services, you consent to the transfer of your information to countries outside your 
                      country of residence, including the United States, which may have different data protection rules.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Children's Privacy */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">8. Children's Privacy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our website and services are not directed to individuals under the age of 16. We do not knowingly 
                      collect personal information from children. If you are a parent or guardian and believe your child 
                      has provided us with personal information, please contact us. If we become aware that we have collected 
                      personal information from a child without verification of parental consent, we will take steps to 
                      remove that information from our servers.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Changes to This Policy */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">9. Changes to This Policy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes in our practices or for other 
                      operational, legal, or regulatory reasons. The updated policy will be posted on this page with a 
                      revised "Last Updated" date. For significant changes, we will notify you through a prominent notice 
                      on our website or by email.
                    </p>
                    <p>
                      We encourage you to review this policy periodically to stay informed about how we protect your information.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Contact Us */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">10. Contact Us</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                      please contact us at:
                    </p>
                    <div className="bg-secondary p-6 rounded-lg border border-border mt-4">
                      <p className="font-medium text-foreground">Aesthete Privacy Team</p>
                      <p>123 Design District</p>
                      <p>San Francisco, CA 94103</p>
                      <p>United States</p>
                      <p className="mt-2">Email: privacy@aesthete.com</p>
                      <p>Phone: +1 (800) 555-1234</p>
                    </div>
                    <p className="mt-4">
                      We are committed to working with you to resolve any concerns about your privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
