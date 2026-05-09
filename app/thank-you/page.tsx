import { PremiumButton } from "@/components/ui/premium-button";

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-porcelain px-4 py-10">
      <div className="noise" aria-hidden="true" />
      <section className="section-shell flex min-h-[calc(100vh-5rem)] items-center justify-center">
        <div className="premium-border glass max-w-xl rounded-3xl p-8 text-center sm:p-10">
          <p className="text-sm font-medium text-muted">Message sent</p>
          <h1 className="mt-4 text-4xl font-semibold text-graphite">Thanks for reaching out.</h1>
          <p className="mt-5 leading-8 text-muted">
            Your message was sent successfully. I’ll review it and get back to you soon.
          </p>
          <div className="mt-8">
            <PremiumButton href="/" variant="dark">
              Back to portfolio
            </PremiumButton>
          </div>
        </div>
      </section>
    </main>
  );
}
