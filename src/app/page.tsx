import {
  ArrowRight,
  Headset,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Instant WhatsApp Inbox",
      description:
        "Manage every customer thread, assign teammates, and keep the full order context visible in real time.",
      icon: MessageCircle,
    },
    {
      title: "Commerce-Aware Responses",
      description:
        "Suggested replies pull product data, inventory status, and delivery timelines directly from your catalog.",
      icon: ShoppingBag,
    },
    {
      title: "24/7 Auto Routing",
      description:
        "Route VIP shoppers to the best agent, trigger follow-ups after abandoned carts, and keep SLAs on autopilot.",
      icon: Zap,
    },
  ];

  const benefits = [
    {
      title: "Secure by Design",
      description: "Enterprise-grade encryption, approval workflows, and audit-ready conversation logs.",
      icon: ShieldCheck,
    },
    {
      title: "Team Collaboration",
      description: "Shared inbox, internal notes, and collision detection keep everyone on the same page.",
      icon: Users,
    },
    {
      title: "Branded Experiences",
      description: "Send rich media catalogs, payment links, and delivery updates that match your storefront.",
      icon: Sparkles,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Connect WhatsApp Business",
      detail:
        "Plug in your WhatsApp Business API or Cloud API account and sync your product catalog in minutes.",
    },
    {
      number: "02",
      title: "Automate Conversations",
      detail: "Design guided flows for FAQs, order tracking, and returns while keeping agents ready to step in.",
    },
    {
      number: "03",
      title: "Delight Every Shopper",
      detail:
        "Measure response times, satisfaction scores, and conversion lift from a single real-time dashboard.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-900">
        <div className="absolute inset-0 opacity-40" aria-hidden>
          <div className="mx-auto h-full w-full max-w-6xl bg-[radial-gradient(circle_at_top,_#2dd4bf20,_transparent_60%)]" />
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-24 sm:px-10 lg:flex-row lg:items-center lg:pt-32">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm font-medium text-emerald-200">
              <Headset className="size-4" />
              WhatsApp Support Built for E-commerce
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Convert chats into loyal customers with instant WhatsApp care.
            </h1>
            <p className="text-lg/8 text-slate-300 sm:text-xl/9">
              Launch a shared WhatsApp inbox tailored for online stores. Automate FAQs, track orders, send payment
              links, and deliver human service that keeps shoppers coming back.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/923001234567?text=Hi%20team,%20I%20want%20to%20launch%20WhatsApp%20support%20for%20my%20store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
              >
                Chat with an Expert
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
              >
                See how it works
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-300" />
                Verified Meta Business Partner
              </div>
              <div className="flex items-center gap-2">
                <Zap className="size-4 text-emerald-300" />
                Average response time &lt; 1 min
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-xl rounded-3xl bg-slate-900/60 p-8 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-300">Live Queue</p>
                <p className="text-3xl font-semibold text-white">12 chats</p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                SLO 98%
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { name: "Hania from Karachi", topic: "Order #48321 • Payment Confirmation", status: "Waiting 00:42" },
                { name: "Sunny Electronics", topic: "Bulk pricing • Assigned to Saad", status: "Active" },
                { name: "Guest Checkout", topic: "Shipping update • Follow-up", status: "Bot handling" },
              ].map((conversation) => (
                <div
                  key={conversation.name}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-emerald-300/40"
                >
                  <p className="text-sm font-semibold text-white">{conversation.name}</p>
                  <p className="text-sm text-slate-400">{conversation.topic}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-emerald-300">
                    {conversation.status}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500">
              Real-time shared inbox showing enriched WhatsApp conversations with order context.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
        <section id="features" className="grid gap-10 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition hover:border-emerald-300/50"
            >
              <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-emerald-500/10 to-transparent transition group-hover:translate-y-0" />
              <feature.icon className="relative size-10 text-emerald-300" />
              <h2 className="relative mt-6 text-xl font-semibold text-white">{feature.title}</h2>
              <p className="relative mt-3 text-sm/6 text-slate-300">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-24 grid gap-12 lg:grid-cols-[3fr,2fr]">
          <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-200">
              Trusted Growth Outcomes
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Turn WhatsApp into your highest-converting sales and support channel.
            </h2>
            <p className="text-base text-slate-300">
              Proactive nudges prevent cart abandonment, AI summaries keep handoffs tight, and live order lookups let
              agents solve issues in seconds. Commerce teams see up to 27% lift in repeat purchases within the first 30
              days.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { metric: "4.8/5", label: "CSAT across 50+ stores" },
                { metric: "27%", label: "Avg. repeat purchase lift" },
                { metric: "3x", label: "Faster query resolution" },
              ].map((item) => (
                <div key={item.metric} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <p className="text-2xl font-semibold text-white">{item.metric}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <benefit.icon className="size-10 flex-none text-emerald-300" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-10 rounded-3xl border border-slate-800 bg-slate-900/40 p-12 md:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-200">
              Launch in Days
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Simple rollout, measurable wins.</h2>
            <p className="text-base text-slate-300">
              From first message to reorder reminders, we map out your end-to-end journey. Plug-in analytics unlock ROI
              in a glance, while integrations with Shopify, WooCommerce, and custom catalogs keep data flowing.
            </p>
            <div className="mt-8 grid gap-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <div className="text-lg font-semibold text-emerald-300">{step.number}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Your next support agent lives in WhatsApp.</h3>
              <p className="text-sm text-slate-200">
                Deploy smart auto-responses, escalate priority orders to the right teammate, and send branded receipts in
                the same chat. Customers never have to leave their favorite messaging app.
              </p>
            </div>
            <div className="mt-10 space-y-4 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200">
                  <ShoppingBag className="size-5" />
                </div>
                <span>Connect Shopify, WooCommerce &amp; custom catalogs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200">
                  <Headset className="size-5" />
                </div>
                <span>Assign chats automatically with skill-based routing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200">
                  <ShieldCheck className="size-5" />
                </div>
                <span>Stay compliant with verified Meta Business policies</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 text-center sm:px-10 sm:text-left lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Agentic Support Suite</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Ready to power WhatsApp for your storefront?</h2>
            <p className="mt-2 text-sm text-slate-300">
              Book a 20-minute demo and we will launch your first automated journey this week.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/923001234567?text=I%20want%20a%20WhatsApp%20support%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
            >
              WhatsApp our team
              <ArrowRight className="size-4" />
            </a>
            <a
              href="mailto:support@agenticsuite.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
            >
              Email us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
