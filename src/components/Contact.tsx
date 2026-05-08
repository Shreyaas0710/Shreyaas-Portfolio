import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setIsSending(true);
    setStatusMsg("");

    emailjs.sendForm(
      'service_3wygfvk', 
      'template_mjjev05', 
      form.current, 
      'yuQOwu-vHwA_ZTenq'
    )
      .then((result) => {
          setStatusMsg("Message sent successfully!");
          setIsSending(false);
          form.current?.reset();
      }, (error) => {
          console.error(error.text);
          setStatusMsg("Failed to send the message, please try again.");
          setIsSending(false);
      });
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card bg-card border border-border rounded-[3rem] p-8 md:p-16 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <SectionHeading 
                title="Let's Connect" 
                subtitle="Open to new opportunities, collaborations, and exciting challenges." 
              />
              
              <div className="space-y-8 mt-12">
                <a href="mailto:05shreyaas@gmail.com" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full glass-card border border-border bg-muted flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                    <Mail className="w-6 h-6 text-muted-foreground group-hover:text-cyan-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-1">Email</p>
                    <p className="text-lg font-medium text-foreground group-hover:text-cyan-500 transition-colors">05shreyaas@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+919444881062" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full glass-card border border-border bg-muted flex items-center justify-center group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300">
                    <Phone className="w-6 h-6 text-muted-foreground group-hover:text-purple-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-lg font-medium text-foreground group-hover:text-purple-500 transition-colors">+91 9444881062</p>
                  </div>
                </a>
              </div>

              <div className="flex gap-4 mt-12">
                <a 
                  href="https://github.com/Shreyaas0710" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border bg-muted flex items-center justify-center hover:bg-foreground hover:text-background text-foreground transition-all duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shreyaas0710" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border bg-muted flex items-center justify-center hover:bg-blue-600 hover:text-white text-foreground hover:border-transparent transition-all duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Simulated Contact Form (Static) */}
            <div className="bg-muted/30 border border-border rounded-3xl p-8">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">Send a Message</h3>
              <form ref={form} className="space-y-4" onSubmit={sendEmail}>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Your Name" 
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Your Email" 
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    required
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                  />
                </div>
                {statusMsg && (
                  <p className={`text-sm ${statusMsg.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                    {statusMsg}
                  </p>
                )}
                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-foreground text-background font-bold rounded-xl px-4 py-4 flex items-center justify-center gap-2 hover:bg-cyan-500 hover:text-white hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" /> {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
