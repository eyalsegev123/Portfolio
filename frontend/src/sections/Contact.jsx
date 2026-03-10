import { useState } from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import AnimateOnScroll from '../components/AnimateOnScroll';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 6000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('All fields are required!', 'warning');
      return;
    }
    setIsSending(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        showToast('Message sent successfully!', 'success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        showToast(`Failed to send message: ${error.text || 'Unknown error'}`, 'error');
      })
      .finally(() => setIsSending(false));
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 transition-colors";

  return (
    <section id="contact" className="section-padding bg-navy">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-cyan rounded mb-12" />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Form — 3/5 */}
          <AnimateOnScroll className="md:col-span-3" delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-4">
              <input
                type="text"
                placeholder="Name"
                aria-label="Name"
                className={inputClass}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                className={inputClass}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <textarea
                placeholder="Message"
                aria-label="Message"
                rows={5}
                className={`${inputClass} resize-none`}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 bg-cyan text-navy font-semibold rounded-lg hover:bg-cyan-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </AnimateOnScroll>

          {/* Social links — 2/5 */}
          <AnimateOnScroll className="md:col-span-2" delay={0.2}>
            <div className="flex flex-col gap-4 h-full justify-center">
              <a
                href="https://github.com/eyalsegev123/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-hover rounded-xl p-4 flex items-center gap-4 group"
              >
                <FaGithub className="text-2xl text-white/60 group-hover:text-cyan transition-colors" />
                <div>
                  <p className="text-white font-medium text-sm">GitHub</p>
                  <p className="text-white/40 text-xs">@eyalsegev123</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/eyal-segev/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-hover rounded-xl p-4 flex items-center gap-4 group"
              >
                <FaLinkedin className="text-2xl text-white/60 group-hover:text-cyan transition-colors" />
                <div>
                  <p className="text-white font-medium text-sm">LinkedIn</p>
                  <p className="text-white/40 text-xs">eyal-segev</p>
                </div>
              </a>

              <a
                href="/Eyal_Segev_resume.pdf"
                download
                className="glass-hover rounded-xl p-4 flex items-center gap-4 group"
              >
                <FaDownload className="text-2xl text-white/60 group-hover:text-cyan transition-colors" />
                <div>
                  <p className="text-white font-medium text-sm">Resume</p>
                  <p className="text-white/40 text-xs">Download PDF</p>
                </div>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-white/20 text-sm font-mono">
          © {new Date().getFullYear()} Eyal Segev
        </p>
      </div>

      {/* Toast notification */}
      {toast.show && (
        <div className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-lg text-sm font-medium shadow-lg transition-all ${
          toast.type === 'success' ? 'bg-cyan text-navy' :
          toast.type === 'error' ? 'bg-red-500 text-white' :
          'bg-yellow-500 text-navy'
        }`}>
          {toast.message}
        </div>
      )}
    </section>
  );
};

export default Contact;
