import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — LorVen Systems" },
      { name: "description", content: "Terms of use for the LorVen Systems website." },
      { property: "og:title", content: "Terms — LorVen Systems" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero eyebrow="L/02 — Legal" index="L/02" title="Terms of use." />
      <section className="border-t border-rule bg-bg">
        <article className="container-editorial mx-auto max-w-3xl py-24 text-lg leading-relaxed text-ink">
          <p className="text-ink-muted">Last updated: 25 June 2026</p>
          <h2 className="mt-12 text-2xl font-light">1. Purpose of the site</h2>
          <p className="mt-3">
            This site presents LorVen Systems Pvt. Ltd., its products and services. It is
            informational and does not constitute an offer to contract.
          </p>
          <h2 className="mt-10 text-2xl font-light">2. Intellectual property</h2>
          <p className="mt-3">
            All text, photography, drawings and product names on this site are the property of
            LorVen Systems Pvt. Ltd. or its licensors. Republication without consent is prohibited.
          </p>
          <h2 className="mt-10 text-2xl font-light">3. Accuracy</h2>
          <p className="mt-3">
            Technical specifications are indicative and subject to change. Binding values are issued
            in the project-specific datasheet.
          </p>
          <h2 className="mt-10 text-2xl font-light">4. Governing law</h2>
          <p className="mt-3">
            These terms are governed by the laws of India. Any dispute is subject to the exclusive
            jurisdiction of the courts of Hyderabad.
          </p>
        </article>
      </section>
    </>
  );
}
