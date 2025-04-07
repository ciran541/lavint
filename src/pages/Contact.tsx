
import { useState } from "react";
import Layout from "@/components/Layout";
import { Send, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you soon.",
        duration: 5000,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="pt-20">
        {/* Map Section */}
        <div className="w-full h-[400px] bg-secondary">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8177779469187!2d103.8302356!3d1.3067168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19110a2628c3%3A0x8c5a0d1d348f5fda!2sFar%20East%20Shopping%20Centre!5e0!3m2!1sen!2ssg!4v1655456672124!5m2!1sen!2ssg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LAVINT Design Studio Location"
          ></iframe>
        </div>

        {/* Contact Content */}
        <div className="container-fluid mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif mb-6">Contact Us</h1>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? We'd love to hear from you. Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Our Office</h3>
                  <p className="text-muted-foreground">
                    123 Design Street, #01-01<br />
                    Singapore 123456
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Opening Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday & Public Holidays: Closed
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    Phone: +65 1234 5678<br />
                    Email: info@lavint.com
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-secondary p-8">
                <h2 className="text-xl font-serif mb-6">Get a Free Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm mb-1">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select Project Type</option>
                      <option value="HDB">HDB</option>
                      <option value="Condo">Condo</option>
                      <option value="Landed">Landed</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full p-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
