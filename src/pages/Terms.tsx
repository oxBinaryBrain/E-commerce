
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Aesthete</title>
        <meta name="description" content="Our terms and conditions outline the rules, guidelines, and legal agreements between you and Aesthete." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">Terms & Conditions</h1>
                <p className="text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
                  Please read these terms and conditions carefully before using our website or placing an order.
                  By accessing or using our services, you agree to be bound by these terms.
                </p>
                <p className="text-sm text-muted-foreground mt-4 animate-fade-in [animation-delay:300ms]">
                  Last Updated: May 15, 2023
                </p>
              </div>
            </div>
          </section>
          
          {/* Terms & Conditions Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="space-y-12 animate-slide-up">
                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">1. Introduction</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Welcome to Aesthete ("we," "our," or "us"). By accessing or using our website at www.aesthete.com 
                      (the "Site"), placing an order, or using any of our services, you agree to be bound by these Terms 
                      and Conditions ("Terms"), our Privacy Policy, and any other policies referenced herein.
                    </p>
                    <p>
                      If you do not agree to these Terms, please do not use our Site or services. We reserve the right to 
                      modify these Terms at any time. Your continued use of the Site following the posting of changes 
                      constitutes your acceptance of such changes.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Account Registration */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">2. Account Registration</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      To access certain features of the Site or to place orders, you may need to register for an account. 
                      When you register, you agree to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Provide accurate, current, and complete information</li>
                      <li>Maintain and promptly update your account information</li>
                      <li>Keep your password confidential and secure</li>
                      <li>Be responsible for all activities that occur under your account</li>
                      <li>Notify us immediately of any unauthorized use of your account</li>
                    </ul>
                    <p className="mt-4">
                      We reserve the right to terminate accounts, refuse service, or cancel orders at our discretion, 
                      including if we believe that user conduct violates applicable law or is harmful to our interests.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Product Information */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">3. Product Information & Ordering</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We strive to display our products and their features as accurately as possible. However:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>The colors you see will depend on your monitor and may not be accurate</li>
                      <li>All dimensions and weights are approximate</li>
                      <li>All features, content, and specifications are subject to change</li>
                      <li>We do not warrant that product descriptions or other content are accurate, complete, or error-free</li>
                    </ul>
                    
                    <h3 className="text-lg font-medium text-foreground mt-6">Availability & Pricing</h3>
                    <p>
                      All products are subject to availability. We reserve the right to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Limit quantities of any product</li>
                      <li>Discontinue any product at any time</li>
                      <li>Change pricing or promotions</li>
                      <li>Correct pricing errors that may inadvertently occur</li>
                    </ul>
                    <p className="mt-2">
                      Prices and availability are subject to change without notice. The price charged for an item will be the 
                      price in effect at the time the order is placed.
                    </p>
                    
                    <h3 className="text-lg font-medium text-foreground mt-6">Order Acceptance</h3>
                    <p>
                      Your receipt of an order confirmation does not constitute our acceptance of your order. We reserve the 
                      right to accept or decline your order for any reason until the order has been shipped. If we cancel an 
                      order after you have already been charged, we will issue a refund.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Payment Terms */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">4. Payment Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We accept various payment methods as indicated on the Site. By providing payment information, you represent 
                      and warrant that you have the legal right to use the payment method.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>All prices are displayed in US Dollars unless otherwise specified</li>
                      <li>Payment for orders is required at the time of purchase</li>
                      <li>Taxes will be calculated based on your shipping address and the tax rates in effect at the time of shipment</li>
                      <li>International customers are responsible for all duties, customs fees, and taxes</li>
                    </ul>
                    <p className="mt-4">
                      You agree that we may charge your payment method for any orders placed through your account. We use 
                      third-party payment processors and do not store complete payment information on our servers.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Shipping & Delivery */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">5. Shipping & Delivery</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We ship to the addresses provided by customers at the time of purchase. Please ensure your shipping information is accurate.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Shipping times are estimates and not guaranteed</li>
                      <li>We are not responsible for delays outside our control</li>
                      <li>Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier</li>
                      <li>You are responsible for inspecting packages upon receipt for any damage</li>
                    </ul>
                    <p className="mt-4">
                      For more detailed information about our shipping policies, delivery timeframes, and shipping rates, 
                      please visit our <Link to="/shipping" className="text-primary hover:underline">Shipping & Returns</Link> page.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Returns & Refunds */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">6. Returns & Refunds</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We want you to be completely satisfied with your purchase. Our return policy allows for returns within 
                      30 days of delivery for most items, subject to the following conditions:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Items must be unused, undamaged, and in their original packaging</li>
                      <li>Certain products may be non-returnable as indicated in their description</li>
                      <li>Custom or personalized orders are generally non-returnable</li>
                      <li>Return shipping costs are the responsibility of the customer unless the return is due to our error</li>
                    </ul>
                    <p className="mt-4">
                      For complete details on our return process and refund policies, please visit our 
                      <Link to="/shipping" className="text-primary hover:underline"> Shipping & Returns</Link> page.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Intellectual Property */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">7. Intellectual Property</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      All content on the Site, including text, graphics, logos, images, product designs, and software, is the 
                      property of Aesthete or its content suppliers and is protected by international copyright, trademark, 
                      and other intellectual property laws.
                    </p>
                    <h3 className="text-lg font-medium text-foreground mt-4">Limited License</h3>
                    <p>
                      We grant you a limited, non-exclusive, non-transferable license to access and use the Site for personal, 
                      non-commercial purposes. This license does not include:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Reselling or commercial use of the Site or its contents</li>
                      <li>Collection and use of product listings, descriptions, or prices</li>
                      <li>Derivative use of the Site or its contents</li>
                      <li>Downloading or copying account information for the benefit of another merchant</li>
                      <li>Using data mining, robots, or similar data gathering tools</li>
                    </ul>
                    <p className="mt-4">
                      Any unauthorized use terminates the permission or license granted by us.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* User-Generated Content */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">8. User-Generated Content</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      If you submit reviews, comments, or other content to our Site, you grant us a non-exclusive, royalty-free, 
                      perpetual, irrevocable right to use, reproduce, modify, adapt, publish, translate, create derivative works 
                      from, distribute, and display such content throughout the world in any media.
                    </p>
                    <p>
                      You represent and warrant that:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>You own or control all rights to the content you post</li>
                      <li>The content is accurate and not misleading</li>
                      <li>The content does not violate these Terms and will not cause injury to any person or entity</li>
                    </ul>
                    <p className="mt-4">
                      We have the right but not the obligation to monitor and edit or remove any content. We take no responsibility 
                      and assume no liability for any content posted by you or any third party.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Limitation of Liability */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">9. Limitation of Liability</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, AESTHETE, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, 
                      AGENTS, AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR 
                      PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE 
                      LOSSES, RESULTING FROM:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Your access to or use of or inability to access or use the Site</li>
                      <li>Any conduct or content of any third party on the Site</li>
                      <li>Any content obtained from the Site</li>
                      <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                    </ul>
                    <p className="mt-4">
                      IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU TO AESTHETE 
                      DURING THE TWELVE (12) MONTH PERIOD PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY.
                    </p>
                    <p className="mt-4">
                      SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN WARRANTIES OR LIABILITY FOR 
                      INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Indemnification */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">10. Indemnification</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      You agree to indemnify, defend, and hold harmless Aesthete, its affiliates, officers, directors, 
                      employees, agents, and suppliers from and against any and all claims, liabilities, damages, losses, 
                      costs, expenses, or fees (including reasonable attorneys' fees) that arise from or relate to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Your use or misuse of the Site</li>
                      <li>Your violation of these Terms</li>
                      <li>Your violation of any rights of another person or entity</li>
                      <li>Your user-generated content</li>
                    </ul>
                    <p className="mt-4">
                      We reserve the right, at your expense, to assume the exclusive defense and control of any matter for 
                      which you are required to indemnify us, and you agree to cooperate with our defense of these claims.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Governing Law */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">11. Governing Law</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      These Terms and your use of the Site shall be governed by and construed in accordance with the laws 
                      of the State of California, without giving effect to any choice or conflict of law provisions.
                    </p>
                    <p>
                      Any legal action or proceeding relating to your access to or use of the Site or these Terms shall be 
                      instituted in the state or federal courts located in San Francisco County, California. You agree to 
                      submit to the jurisdiction of, and agree that venue is proper in, these courts.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Miscellaneous */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">12. Miscellaneous</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <h3 className="text-lg font-medium text-foreground">Entire Agreement</h3>
                    <p>
                      These Terms, together with our Privacy Policy and any other legal notices or policies published on the 
                      Site, constitute the entire agreement between you and Aesthete concerning the Site and supersede all 
                      prior or contemporaneous communications.
                    </p>
                    
                    <h3 className="text-lg font-medium text-foreground mt-4">Severability</h3>
                    <p>
                      If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited 
                      or eliminated to the minimum extent necessary so that the remaining provisions will remain in full force and effect.
                    </p>
                    
                    <h3 className="text-lg font-medium text-foreground mt-4">No Waiver</h3>
                    <p>
                      Our failure to enforce any right or provision of these Terms will not be considered a waiver of such 
                      right or provision. The waiver of any such right or provision will be effective only if in writing and 
                      signed by a duly authorized representative of Aesthete.
                    </p>
                    
                    <h3 className="text-lg font-medium text-foreground mt-4">Assignment</h3>
                    <p>
                      You may not assign or transfer these Terms or your rights under these Terms without our prior written 
                      consent. We may assign our rights and obligations under these Terms without your consent.
                    </p>
                  </div>
                  <Separator className="mt-8" />
                </div>
                
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">13. Contact Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      If you have any questions about these Terms, please contact us at:
                    </p>
                    <div className="bg-secondary p-6 rounded-lg border border-border mt-4">
                      <p className="font-medium text-foreground">Aesthete Legal Department</p>
                      <p>123 Design District</p>
                      <p>San Francisco, CA 94103</p>
                      <p>United States</p>
                      <p className="mt-2">Email: legal@aesthete.com</p>
                      <p>Phone: +1 (800) 555-1234</p>
                    </div>
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

export default Terms;
