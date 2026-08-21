import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — LorVen Systems" },
      { name: "description", content: "Privacy policy for LorVen Systems Pvt. Ltd." },
      { property: "og:title", content: "Privacy — LorVen Systems" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero eyebrow="L/01 — Legal" index="L/01" title="Privacy." />
      <section className="border-t border-rule bg-bg">
        <article className="container-editorial mx-auto max-w-3xl py-24 text-lg leading-relaxed text-ink">
          <p className="text-ink-muted">Last updated: 25 June 2026</p>
          <h2 className="mt-12 text-2xl font-light">1. What we collect</h2>
          <p className="mt-3">
            We collect only the information you provide through the enquiry form on this site — your
            name, company, contact details and message. Server logs record standard request metadata
            for security.
          </p>
          <h2 className="mt-10 text-2xl font-light">2. How we use it</h2>
          <p className="mt-3">
            Enquiry data is used solely to reply to your enquiry and to keep a record of the
            conversation. We do not sell or share your data with third parties.
          </p>
          <h2 className="mt-10 text-2xl font-light">3. Cookies</h2>
          <p className="mt-3">
            This site uses no third-party advertising or analytics cookies. Strictly-necessary
            cookies may be set to support site functionality.
          </p>
          <h2 className="mt-10 text-2xl font-light">4. Retention</h2>
          <p className="mt-3">
            Enquiry correspondence is retained for up to five years and then deleted, except where a
            longer retention is required by contract or by law.
          </p>
          <h2 className="mt-10 text-2xl font-light">5. Contact</h2>
          <p className="mt-3">
            For any privacy request, write to privacy@lorvensystems.com or to our registered office
            in Hyderabad.
          </p>
        </article>
      </section>
    </>
  );
}
