'use client';
import { useState } from 'react';
import TextReveal from './TextReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch {
      setStatus('Something went wrong.');
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      {/* ambient gradient */}
      {/* ambient gradient removed */}

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
            <TextReveal className="inline">
              Let’s Talk
            </TextReveal>
          </h2>
          <p className="mt-4 text-sm text-neutral-400">
            Have a project or idea? I’d love to hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="group space-y-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {['name', 'email'].map((field) => (
              <div key={field} className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-neutral-400">
                  {field}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  required
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  placeholder={field === 'email' ? 'you@email.com' : 'Your name'}
                  className="w-full rounded-xl bg-black/40 px-4 py-3 text-white placeholder-neutral-500 border border-white/10 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 outline-none transition-all"
                />
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-widest text-neutral-400">
              Message
            </label>
            <textarea
              rows={5}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell me about your project..."
              className="w-full rounded-xl bg-black/40 px-4 py-3 text-white placeholder-neutral-500 border border-white/10 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 outline-none transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="relative w-full overflow-hidden rounded-xl bg-purple-500 py-4 font-semibold uppercase tracking-widest text-black transition-all hover:bg-purple-400 hover:scale-[1.02] active:scale-95"
          >
            <span className="relative z-10">
              {status || 'Send Message'}
            </span>
          </button>

          {status && (
            <p className="text-center text-xs text-neutral-400 pt-2">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
