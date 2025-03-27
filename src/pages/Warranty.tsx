
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Warranty = () => {
  return (
    <>
      <Helmet>
        <title>Warranty | Aesthete</title>
        <meta name="description" content="Information about our product warranties, coverage details, and claims process." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">Warranty Policy</h1>
                <p className="text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
                  We stand behind the quality of our products. Each item is covered by our warranty 
                  against defects in materials and workmanship under normal use.
                </p>
              </div>
            </div>
          </section>
          
          {/* Warranty Information */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="space-y-12">
                {/* Warranty Coverage */}
                <div className="animate-slide-up">
                  <h2 className="text-2xl font-bold tracking-tight mb-6">Warranty Coverage</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      All Aesthete products are covered by a warranty against defects in materials and 
                      workmanship when used under normal conditions and for their intended purpose. 
                      Warranty periods vary by product category:
                    </p>
                    
                    <div className="relative overflow-x-auto rounded-lg border border-border">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-secondary text-foreground">
                          <tr>
                            <th scope="col" className="px-6 py-3 font-medium">Product Category</th>
                            <th scope="col" className="px-6 py-3 font-medium">Warranty Period</th>
                            <th scope="col" className="px-6 py-3 font-medium">Coverage Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border">
                            <td className="px-6 py-4">Furniture</td>
                            <td className="px-6 py-4">5 Years</td>
                            <td className="px-6 py-4">Structural integrity, joints, hardware</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="px-6 py-4">Lighting</td>
                            <td className="px-6 py-4">3 Years</td>
                            <td className="px-6 py-4">Electrical components, fixtures, finishes</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="px-6 py-4">Textiles</td>
                            <td className="px-6 py-4">1 Year</td>
                            <td className="px-6 py-4">Stitching, fabric defects, color fastness</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="px-6 py-4">Kitchenware</td>
                            <td className="px-6 py-4">2 Years</td>
                            <td className="px-6 py-4">Material defects, functional components</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Decorative Objects</td>
                            <td className="px-6 py-4">1 Year</td>
                            <td className="px-6 py-4">Material defects, structural integrity</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <p>
                      The warranty period begins on the date of purchase as shown on your receipt. 
                      Please retain your proof of purchase, as it will be required for warranty claims.
                    </p>
                  </div>
                </div>
                
                {/* What's Covered */}
                <div className="animate-slide-up [animation-delay:100ms]">
                  <h2 className="text-2xl font-bold tracking-tight mb-6">What's Covered</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our warranty covers defects in materials and workmanship that occur under normal use, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Structural defects that impact functionality or safety</li>
                      <li>Premature deterioration of materials beyond normal wear</li>
                      <li>Failure of mechanical or electronic components</li>
                      <li>Significant flaws in finishes that affect appearance</li>
                      <li>Manufacturing errors that impact the form or function of the product</li>
                    </ul>
                    <p className="mt-4">
                      For covered issues, we will repair or replace the defective product or component at our discretion. 
                      If the exact product is no longer available, we may replace it with a similar item of equal or greater value.
                    </p>
                  </div>
                </div>
                
                {/* What's Not Covered */}
                <div className="animate-slide-up [animation-delay:200ms]">
                  <h2 className="text-2xl font-bold tracking-tight mb-6">What's Not Covered</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The following are not covered under our warranty:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Normal wear and tear expected with use over time</li>
                      <li>Damage resulting from improper use, misuse, or abuse</li>
                      <li>Damage from accidents, drops, or impacts</li>
                      <li>Improper cleaning or maintenance contrary to provided care instructions</li>
                      <li>Environmental damage (exposure to extreme temperature, humidity, etc.)</li>
                      <li>Natural variations in color, grain, or texture of natural materials</li>
                      <li>Changes in appearance due to aging, sunlight exposure, or environmental factors</li>
                      <li>Damage from modifications or unauthorized repairs</li>
                      <li>Products used in commercial settings unless specifically designated for commercial use</li>
                      <li>Products sold "as is," clearance items, or floor samples</li>
                    </ul>
                  </div>
                </div>
                
                {/* Making a Claim */}
                <div className="animate-slide-up [animation-delay:300ms]">
                  <h2 className="text-2xl font-bold tracking-tight mb-6">Making a Warranty Claim</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      If you believe your product has a defect covered by our warranty, please follow these steps:
                    </p>
                    <ol className="list-decimal pl-5 space-y-4">
                      <li>
                        <strong>Contact Customer Service:</strong>
                        <p className="mt-1">
                          Reach out to our customer service team via email at warranty@aesthete.com or by phone at 
                          1-800-555-1234 with your order number, product details, and a description of the issue.
                        </p>
                      </li>
                      <li>
                        <strong>Documentation:</strong>
                        <p className="mt-1">
                          Provide clear photos or videos showing the defect, along with a copy of your proof of purchase.
                        </p>
                      </li>
                      <li>
                        <strong>Evaluation:</strong>
                        <p className="mt-1">
                          Our team will review your claim and may request additional information or arrange for an 
                          inspection of the product.
                        </p>
                      </li>
                      <li>
                        <strong>Resolution:</strong>
                        <p className="mt-1">
                          If your claim is approved, we will provide instructions for repair, replacement, or other 
                          resolution as appropriate for the specific issue.
                        </p>
                      </li>
                    </ol>
                    <p className="mt-4">
                      We strive to process warranty claims promptly, typically within 5-7 business days of receiving all necessary information.
                    </p>
                  </div>
                </div>
                
                {/* Additional Information */}
                <div className="animate-slide-up [animation-delay:400ms]">
                  <h2 className="text-2xl font-bold tracking-tight mb-6">Additional Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="rounded-lg border border-border p-6">
                      <h3 className="font-medium mb-3">Shipping for Warranty Claims</h3>
                      <p>
                        If a product requires return for evaluation or repair, we will provide shipping instructions. 
                        For approved warranty claims, return shipping costs will be covered by Aesthete. For items 
                        that are not covered under warranty, the customer is responsible for shipping costs.
                      </p>
                    </div>
                    
                    <div className="rounded-lg border border-border p-6">
                      <h3 className="font-medium mb-3">Repaired or Replaced Items</h3>
                      <p>
                        Any repaired or replaced product will be covered by the remainder of the original warranty 
                        period or 90 days from the date of repair or replacement, whichever is longer.
                      </p>
                    </div>
                    
                    <div className="rounded-lg border border-border p-6">
                      <h3 className="font-medium mb-3">Refund Policy</h3>
                      <p>
                        In some cases, if a product cannot be repaired or replaced, we may offer a refund or store 
                        credit. The refund amount may be prorated based on the age and condition of the product.
                      </p>
                    </div>
                    
                    <div className="rounded-lg border border-border p-6">
                      <h3 className="font-medium mb-3">Limitation of Liability</h3>
                      <p>
                        Our warranty is limited to the repair, replacement, or refund of the defective product. 
                        We are not responsible for any incidental or consequential damages resulting from the 
                        use of our products or a product defect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact CTA */}
              <div className="mt-16 text-center animate-fade-in">
                <h3 className="text-xl font-medium mb-4">Questions About Our Warranty?</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  For any questions about our warranty policy or to submit a warranty claim, 
                  please contact our customer service team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link to="/contact">Contact Warranty Support</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:warranty@aesthete.com">Email Warranty Department</a>
                  </Button>
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

export default Warranty;
