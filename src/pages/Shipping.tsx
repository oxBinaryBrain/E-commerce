
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Shipping = () => {
  return (
    <>
      <Helmet>
        <title>Shipping & Returns | Aesthete</title>
        <meta name="description" content="Information about our shipping policies, delivery timeframes, and return process." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">Shipping & Returns</h1>
                <p className="text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
                  We want your Aesthete experience to be seamless from purchase to delivery. 
                  Below you'll find detailed information about our shipping processes and return policies.
                </p>
              </div>
            </div>
          </section>
          
          {/* Shipping Information */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Shipping Information</h2>
              
              <div className="space-y-12">
                {/* Processing Time */}
                <div className="animate-slide-up">
                  <h3 className="text-xl font-medium mb-4 border-b pb-2">Order Processing</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We process orders promptly to ensure you receive your items as quickly as possible:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>In-stock items typically process within 1-2 business days.</li>
                      <li>Made-to-order or customized items generally require 2-3 weeks for production before shipping.</li>
                      <li>You'll receive an email confirmation when your order is placed and another notification when it ships.</li>
                      <li>Orders placed after 2:00 PM PST will begin processing the following business day.</li>
                    </ul>
                  </div>
                </div>
                
                {/* Shipping Methods */}
                <div className="animate-slide-up [animation-delay:100ms]">
                  <h3 className="text-xl font-medium mb-4 border-b pb-2">Shipping Methods & Timeframes</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We offer several shipping options to meet your needs:
                    </p>
                    
                    <div className="relative overflow-x-auto rounded-lg border border-border">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-secondary text-foreground">
                          <tr>
                            <th scope="col" className="px-6 py-3 font-medium">Shipping Method</th>
                            <th scope="col" className="px-6 py-3 font-medium">Estimated Delivery</th>
                            <th scope="col" className="px-6 py-3 font-medium">Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border">
                            <td className="px-6 py-4">Standard</td>
                            <td className="px-6 py-4">5-7 business days</td>
                            <td className="px-6 py-4">Free on orders over $100<br />$9.95 for orders under $100</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="px-6 py-4">Expedited</td>
                            <td className="px-6 py-4">2-3 business days</td>
                            <td className="px-6 py-4">$14.95</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="px-6 py-4">Express</td>
                            <td className="px-6 py-4">1-2 business days</td>
                            <td className="px-6 py-4">$24.95</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">International</td>
                            <td className="px-6 py-4">7-14 business days</td>
                            <td className="px-6 py-4">Calculated at checkout<br />based on destination</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <p>
                      Please note that delivery timeframes are estimates and may vary based on your location and 
                      other factors outside our control, such as weather, customs processing for international orders, 
                      or carrier delays.
                    </p>
                  </div>
                </div>
                
                {/* International Shipping */}
                <div className="animate-slide-up [animation-delay:200ms]">
                  <h3 className="text-xl font-medium mb-4 border-b pb-2">International Shipping</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We ship to most countries worldwide. Important information for international customers:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Delivery times typically range from 7-14 business days, depending on the destination.</li>
                      <li>International customers are responsible for all duties, taxes, and customs fees imposed by their country.</li>
                      <li>These additional fees are not included in our shipping charges and will be collected by the carrier or customs office.</li>
                      <li>Some products may not be eligible for international shipping due to size, weight, or material restrictions.</li>
                      <li>International orders may require additional verification steps before processing.</li>
                    </ul>
                  </div>
                </div>
                
                {/* Tracking Information */}
                <div className="animate-slide-up [animation-delay:300ms]">
                  <h3 className="text-xl font-medium mb-4 border-b pb-2">Order Tracking</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Stay informed about your order's journey:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Once your order ships, you'll receive a confirmation email with tracking information.</li>
                      <li>You can also track your order by logging into your account and viewing your order history.</li>
                      <li>Orders containing multiple items may ship separately, with individual tracking numbers provided for each shipment.</li>
                      <li>If you have any questions about your shipment, please contact our customer service team with your order number.</li>
                    </ul>
                  </div>
                </div>
                
                {/* Shipping Restrictions */}
                <div className="animate-slide-up [animation-delay:400ms]">
                  <h3 className="text-xl font-medium mb-4 border-b pb-2">Shipping Restrictions</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Please be aware of the following shipping limitations:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>We cannot ship to P.O. boxes for certain large items.</li>
                      <li>Some items may require special handling or delivery arrangements.</li>
                      <li>We currently cannot ship to certain countries due to shipping regulations.</li>
                      <li>If you have concerns about delivery to your location, please contact us before placing an order.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Returns Policy */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Returns Policy</h2>
              
              <div className="space-y-12">
                {/* General Return Policy */}
                <div className="animate-slide-up">
                  <h3 className="text-xl font-medium mb-4 border-b pb-2">General Return Policy</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We want you to be completely satisfied with your purchase. If for any reason you're not, 
                      we offer a straightforward return policy:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>30-day return window from the delivery date for most unused, undamaged items in their original packaging.</li>
                      <li>Items must be in their original condition with all tags and packaging intact.</li>
                      <li>Custom orders, final sale items, and certain product categories may have different return policies as noted on their product pages.</li>
                      <li>Return shipping fees are the responsibility of the customer unless the return is due to our error or a defective product.</li>
                    </ul>
                  </div>
                </div>
                
                {/* How to Return */}
                <div className="animate-slide-up [animation-delay:100ms]">
                  <h3 className="text-xl font-medium mb-4 border-b pb-2">How to Return an Item</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      To ensure a smooth return process, please follow these steps:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Initiate your return by logging into your account and selecting the order containing the item you wish to return.</li>
                      <li>Follow the return instructions or contact our customer service team for assistance.</li>
                      <li>Once your return request is approved, you'll receive a return authorization and shipping instructions.</li>
                      <li>Carefully package the item in its original packaging to prevent damage during transit.</li>
                      <li>Include all original components, accessories, documentation, and tags.</li>
                      <li>Attach the provided return shipping label and drop off the package at the designated carrier location.</li>
                      <li>We recommend obtaining a tracking number and proof of shipment for your records.</li>
                    </ol>
                  </div>
                </div>
                
                {/* Refunds Process */}
                <div className="animate-slide-up [animation-delay:200ms]">
                  <h3 className="text-xl font-medium mb-4 border-b pb-2">Refunds & Exchanges</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Once we receive your return:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>We'll inspect the returned item to ensure it meets our return criteria.</li>
                      <li>Approved returns will be processed within 3-5 business days of receipt.</li>
                      <li>Refunds are issued to the original payment method used for the purchase.</li>
                      <li>Depending on your financial institution, refunds may take an additional 5-10 business days to appear in your account.</li>
                      <li>The original shipping charges are non-refundable unless the return is due to our error.</li>
                      <li>Exchanges are available for size, color, or similar variations within the same product category, subject to availability.</li>
                    </ul>
                  </div>
                </div>
                
                {/* Damaged Items */}
                <div className="animate-slide-up [animation-delay:300ms]">
                  <h3 className="text-xl font-medium mb-4 border-b pb-2">Damaged or Defective Items</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      If your item arrives damaged or defective:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Please contact us within 48 hours of delivery.</li>
                      <li>Provide photos of the damaged item and packaging to help us process your claim quickly.</li>
                      <li>We'll arrange for a replacement or refund, including return shipping costs.</li>
                      <li>In some cases, we may not require you to return the damaged item.</li>
                      <li>For items damaged during use within the warranty period, please refer to our warranty policy.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Contact CTA */}
              <div className="mt-16 text-center animate-fade-in">
                <h3 className="text-xl font-medium mb-4">Questions About Shipping or Returns?</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our customer service team is ready to assist you with any questions or concerns 
                  about shipping, tracking, returns, or exchanges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/faq">View FAQ</Link>
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

export default Shipping;
