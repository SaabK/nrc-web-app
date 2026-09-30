"use client";

import { useState } from "react";
import { submitForm } from "@/lib/forms/submit";

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const payload: Record<string, string> = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };
    const result = await submitForm("contact", payload);
    if (result.success) {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("error");
      setErrorMsg(result.message);
    }
  };

  const inputClass =
    "w-full bg-transparent border border-[rgba(232,79,14,0.15)] text-white placeholder:text-[#3D4358] px-4 py-3 text-sm focus:outline-none focus:border-[rgba(232,79,14,0.5)] focus:bg-[rgba(232,79,14,0.02)] transition-all duration-200";

  if (status === "success") {
    return (
      <div className="border border-[rgba(232,79,14,0.3)] p-8 text-center">
        <div className="font-mono text-[10px] tracking-[0.3em] text-[#E84F0E] uppercase mb-3">Received</div>
        <p className="text-white text-sm">Your message is in. We&apos;ll reply via email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-mono text-[9px] tracking-[0.3em] text-[#6B7285] uppercase mb-2">
            Name *
          </label>
          <input id="name" name="name" type="text" required value={form.name}
            onChange={handleChange} className={inputClass} placeholder="Your name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-[9px] tracking-[0.3em] text-[#6B7285] uppercase mb-2">
            Email *
          </label>
          <input id="email" name="email" type="email" required value={form.email}
            onChange={handleChange} className={inputClass} placeholder="your@email.com" autoComplete="email" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block font-mono text-[9px] tracking-[0.3em] text-[#6B7285] uppercase mb-2">
          Subject
        </label>
        <input id="subject" name="subject" type="text" value={form.subject}
          onChange={handleChange} className={inputClass} placeholder="What is this about?" />
      </div>
      <div>
        <label htmlFor="message" className="block font-mono text-[9px] tracking-[0.3em] text-[#6B7285] uppercase mb-2">
          Message *
        </label>
        <textarea id="message" name="message" required rows={5} value={form.message}
          onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Your message…" />
      </div>
      {status === "error" && (
        <p className="text-sm text-[#C1121F]" role="alert">{errorMsg}</p>
      )}
      <button type="submit" disabled={status === "loading"}
        className="self-start inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-white bg-[#E84F0E] px-6 py-3 rounded-full hover:bg-[#FF6B2B] hover:shadow-[0_0_20px_rgba(232,79,14,0.4)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 active:scale-95">
        {status === "loading" ? "SENDING…" : "SEND MESSAGE →"}
      </button>
    </form>
  );
}
