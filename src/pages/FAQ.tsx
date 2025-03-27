
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | Aesthete</title>
        <meta name="description" content="Frequently asked questions about our products, shipping, returns, and more." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">Frequently Asked Questions</h1>
                <p className="text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
                  Find answers to common questions about our products, ordering process, 
                  shipping, returns, and more. Can't find what you're looking for? Contact our support team.
                </p>
              </div>
            </div>
          </section>
          
          {/* FAQ Sections */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="grid grid-cols-1 gap-8">
                {/* Products FAQ */}
                <div className="animate-slide-up">
                  <h2 className="text-2xl font-bold tracking-tight mb-6">Products</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What materials do you use in your products?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          We carefully select materials that balance aesthetics, durability, and environmental responsibility. 
                          Depending on the product, we use solid woods (oak, walnut, maple), recycled metals, 
                          organic textiles, ceramic, glass, and occasionally responsibly-sourced leather. 
                          Each product page specifies the exact materials used.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Are your products handmade?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Many of our products involve handcrafting by skilled artisans, while others utilize 
                          precision manufacturing techniques. We believe in using the right approach for each 
                          product to ensure quality and consistency. Product descriptions indicate when items 
                          are handcrafted or involve significant handwork.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How do I care for my Aesthete products?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Each product comes with specific care instructions to ensure longevity. 
                          Generally, we recommend gentle cleaning with appropriate products, avoiding 
                          harsh chemicals, and following material-specific guidelines. You can also find 
                          care information on each product page or in our comprehensive Care Guide.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Do you offer product customization?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          For select products, we offer customization options such as size variations, 
                          material choices, or color finishes. Products with customization options will 
                          indicate this on their product page. For special requests, please contact our 
                          customer service team to discuss possibilities.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                {/* Orders & Shipping FAQ */}
                <div className="animate-slide-up [animation-delay:100ms]">
                  <h2 className="text-2xl font-bold tracking-tight mb-6">Orders & Shipping</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How long will it take to receive my order?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Shipping times vary based on product availability and your location. In-stock items 
                          typically ship within 1-3 business days. Standard domestic shipping takes 3-7 business 
                          days, while international orders may take 7-14 business days. Made-to-order items have 
                          specific lead times noted on their product pages.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Yes, we ship to most countries worldwide. International customers may be responsible 
                          for customs duties, import taxes, and any additional fees imposed by their country. 
                          These fees are not included in our shipping charges. Shipping rates and delivery 
                          estimates are provided at checkout.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Can I track my order?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Yes, once your order ships, you'll receive a confirmation email with tracking 
                          information. You can also track your order by logging into your account on our 
                          website and viewing your order history. For orders containing multiple items, 
                          products may ship separately.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger>What if my order arrives damaged?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          We carefully package all items to prevent damage during shipping. If your order 
                          arrives damaged, please take photos of the damaged item and packaging, and contact 
                          our customer service team within 48 hours of delivery. We'll arrange for a replacement 
                          or refund as quickly as possible.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                {/* Returns & Refunds FAQ */}
                <div className="animate-slide-up [animation-delay:200ms]">
                  <h2 className="text-2xl font-bold tracking-tight mb-6">Returns & Refunds</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is your return policy?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          We offer a 30-day return policy for most unused, undamaged items in their original 
                          packaging. Custom orders, sale items, and certain categories may have different 
                          return policies as noted on their product pages. To initiate a return, please 
                          contact our customer service team or visit the Returns page in your account.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do I return an item?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          To initiate a return, log into your account and select the order containing the 
                          item you wish to return. Follow the return instructions or contact our customer 
                          service team. Once approved, you'll receive a return shipping label and instructions. 
                          Carefully package the item in its original packaging and attach the return label.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>When will I receive my refund?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Once we receive and inspect your return, we'll process your refund within 3-5 
                          business days. Refunds are issued to the original payment method. Depending on 
                          your financial institution, it may take an additional 5-10 business days for 
                          the refund to appear in your account.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Do you offer exchanges?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Yes, we offer exchanges for size, color, or similar variations within the same 
                          product category. To request an exchange, follow the return process and indicate 
                          that you'd like an exchange instead of a refund. Please note that exchanges are 
                          subject to product availability and may extend the processing time.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                {/* Account & Orders FAQ */}
                <div className="animate-slide-up [animation-delay:300ms]">
                  <h2 className="text-2xl font-bold tracking-tight mb-6">Account & Orders</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Do I need an account to place an order?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          While you can checkout as a guest, creating an account offers several benefits: 
                          order tracking, saved shipping addresses, faster checkout for future orders, 
                          and access to order history. Creating an account takes just a few moments and 
                          requires only basic information.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How can I check the status of my order?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Log into your account and navigate to the Order History section to view all your 
                          orders and their current status. Each order will display its processing stage, 
                          shipping information, and tracking number once shipped. You'll also receive email 
                          updates at key stages of your order's journey.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Can I modify or cancel my order?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          We process orders quickly to ensure prompt shipping. If you need to modify or 
                          cancel an order, please contact our customer service team immediately. We can 
                          usually accommodate changes if the order hasn't entered the shipping process. 
                          Once shipped, standard return policies will apply.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Do you offer gift options?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Yes, during checkout you can select gift options including gift wrapping, 
                          personalized messages, and shipping to different addresses. Our minimalist 
                          gift packaging reflects our design aesthetic while creating a special unboxing 
                          experience. We never include price information in gift orders.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              
              {/* Contact CTA */}
              <div className="mt-16 text-center animate-fade-in">
                <h2 className="text-2xl font-bold tracking-tight mb-4">Still Have Questions?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our customer service team is ready to assist you with any questions or concerns not addressed in our FAQ.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:support@aesthete.com">Email Support</a>
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

export default FAQ;
