import { useState } from 'react';
import { ArrowUpRight, CheckCircle, AlertCircle } from 'lucide-react';

// ── Replace with your Formspree form ID after signing up at https://formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdpzqno';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormProps {
  lang: 'ja' | 'en';
}

const copy = {
  ja: {
    name:        'お名前',
    email:       'メールアドレス',
    message:     'お問い合わせ内容',
    namePh:      '山田 太郎',
    emailPh:     'your@email.com',
    messagePh:   'データ戦略、AI導入、採用などお気軽にどうぞ。',
    submit:      '送信する',
    submitting:  '送信中...',
    success:     'ご連絡ありがとうございます。24時間以内にご返信します。',
    error:       '送信に失敗しました。もう一度お試しいただくか、メールでご連絡ください。',
    required:    '必須',
  },
  en: {
    name:        'Name',
    email:       'Email',
    message:     'Message',
    namePh:      'Jane Smith',
    emailPh:     'your@email.com',
    messagePh:   'Tell me about your project — data strategy, AI implementation, consulting...',
    submit:      'Send message',
    submitting:  'Sending...',
    success:     'Thank you! I\'ll get back to you within 24 hours.',
    error:       'Something went wrong. Please try again or reach out via email.',
    required:    'required',
  },
};

export default function ContactForm({ lang }: ContactFormProps) {
  const c = copy[lang];
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-white/10 border border-white/30 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors duration-200";

  if (status === 'success') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle size={48} className="opacity-80" />
        <p className="text-lg font-semibold">{c.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5 w-full max-w-sm mx-auto md:mx-0 md:max-w-none">
      {/* Name */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest opacity-70 mb-2">
          {c.name} <span className="opacity-50">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder={c.namePh}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest opacity-70 mb-2">
          {c.email} <span className="opacity-50">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder={c.emailPh}
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest opacity-70 mb-2">
          {c.message} <span className="opacity-50">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder={c.messagePh}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm opacity-80">
          <AlertCircle size={16} />
          <span>{c.error}</span>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="self-center md:self-start inline-flex items-center gap-3 bg-white text-accent font-extrabold text-sm tracking-widest uppercase px-10 py-4 rounded-full shadow-lg shadow-black/20 hover:scale-105 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {status === 'submitting' ? c.submitting : c.submit}
        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </form>
  );
}
