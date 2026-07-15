"use client";

import { useState } from "react";
import { nav, products } from "./data";

export function Header() {
  const [open, setOpen] = useState(false);
  return <><div className="announcement">🍋 Designed with care. Loved in kitchens across the USA.</div><header className="header"><a className="brand" href="/"><span className="mango-mark">◒</span> THE YELLOW MANGO</a><button className="menu-button" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button><nav className={open ? "nav open" : "nav"}>{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav><a className="amazon-mini" href="https://www.amazon.com/s?k=The+Yellow+Mango" target="_blank" rel="noreferrer">Amazon ↗</a></header></>;
}

export function Footer() {
  return <footer><a className="brand" href="/"><span className="mango-mark">◒</span> THE YELLOW MANGO</a><p>Bright tools for better kitchen rituals.</p><div>{nav.slice(1).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><small>© 2026 The Yellow Mango. All rights reserved.</small></footer>;
}

export function PageHero({ eyebrow, title, copy, image = true }: { eyebrow: string; title: string; copy: string; image?: boolean }) {
  return <section className={image ? "page-hero" : "page-hero no-image"}><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div>{image && <div className="page-hero-image" />}</section>;
}

export function ProductGrid({ detailed = false }: { detailed?: boolean }) {
  return <div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}><div className="product-image" style={{ backgroundPosition: product.pos }} /><div className="product-info"><div><h3>{product.name}</h3><p>{detailed ? product.description : product.tag}</p></div><a href={product.href} target="_blank" rel="noreferrer">View on Amazon ↗</a></div></article>)}</div>;
}

export function FeedbackFlow({ initialSlug }: { initialSlug: string }) {
  const product = products.find(p => p.slug === initialSlug) ?? products[0];
  const [step, setStep] = useState<"intro" | "choice" | "message" | "done">("intro");
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");
  const [country, setCountry] = useState("");
  const [satisfaction, setSatisfaction] = useState("");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const start = () => {
    if (!name.trim() || !order.trim() || !country) return setError("Please complete all three fields.");
    setError(""); setStep("choice");
  };
  const choose = (answer: string) => { setSatisfaction(answer); setStep("message"); setError(""); };
  const submit = async () => {
    if (!feedback.trim()) return setError("Please write a short message before submitting.");
    setSending(true); setError("");
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ service_id: "service_6suiqxu", template_id: "template_nmv7e7s", user_id: "-GoP7mttyZynzQu3l", template_params: { name, order, country, satisfaction, feedback, product: product.name, feedback_url: `/feedback/${product.slug}` } }) });
      if (!response.ok) throw new Error("Unable to send");
      setStep("done");
    } catch { setError("We could not send your feedback. Please try again or contact support."); }
    finally { setSending(false); }
  };
  const reviewUrl = country === "Australia" ? product.reviewAU : product.reviewUS;

  return <div className="qr-feedback-app">
    <div className="feedback-product-nav">{products.map(p => <a key={p.slug} className={p.slug === product.slug ? "active" : ""} href={`/feedback/${p.slug}`}>{p.name}</a>)}</div>
    <div className="qr-card">
      <div className="qr-product"><div className="feedback-product-image" style={{ backgroundPosition: product.pos }} /><p>Product feedback for</p><h2>{product.name}</h2><small>Every product has its own permanent feedback link, ready for a unique QR code.</small></div>
      <div className="qr-form">
        {step === "intro" && <><p className="eyebrow">Welcome to The Yellow Mango</p><h2>Tell us about your purchase.</h2><label>Name<input value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" autoComplete="name" /></label><label>Amazon order number<input value={order} onChange={e => setOrder(e.target.value)} placeholder="e.g. 112-1234567-1234567" /></label><label>Country<select value={country} onChange={e => setCountry(e.target.value)}><option value="">Select…</option><option>United States</option><option>Australia</option></select></label><button className="button primary wide" onClick={start}>Continue →</button></>}
        {step === "choice" && <><p className="eyebrow">Your experience</p><h2>How was your experience?</h2><div className="satisfaction-choice"><button className="satisfied" onClick={() => choose("Satisfied")}>I was satisfied</button><button className="dissatisfied" onClick={() => choose("Dissatisfied")}>I was dissatisfied</button></div><button className="plain-back" onClick={() => setStep("intro")}>← Back</button></>}
        {step === "message" && <><p className="eyebrow">{satisfaction} experience</p><h2>{satisfaction === "Satisfied" ? "Great — mind sharing a few words?" : "We’re sorry — help us make it right."}</h2><label>Your feedback<textarea value={feedback} onChange={e => setFeedback(e.target.value)} rows={7} placeholder="Tell us about your experience…" /></label><button className="button primary wide" disabled={sending} onClick={submit}>{sending ? "Sending…" : "Submit feedback →"}</button><button className="plain-back" onClick={() => setStep("choice")}>← Back</button></>}
        {step === "done" && <div className="feedback-complete"><span>✓</span><p className="eyebrow">Feedback received</p><h2>Thank you, {name.split(" ")[0]}.</h2><p>Your private feedback has been sent to our team. If your purchase is eligible for our current feedback promotion, your $5 voucher will be processed within a few days.</p><div className="optional-review"><strong>Want to share your honest experience on Amazon?</strong><p>This is completely optional and is not required to receive a voucher.</p><a className="button dark wide" href={reviewUrl} target="_blank" rel="noreferrer">Review on Amazon ↗</a></div></div>}
        {error && <p className="form-error" role="alert">{error}</p>}
      </div>
    </div>
  </div>;
}
