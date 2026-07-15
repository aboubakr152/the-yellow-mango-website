import { FeedbackFlow, Footer, Header, PageHero } from "../../components";
import { products } from "../../data";

export default async function ProductFeedback({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  const selected = products.find(p => p.slug === product) ?? products[0];
  return <main><Header /><PageHero eyebrow="Product feedback" title={`Your ${selected.name} experience.`} copy="Share private feedback directly with The Yellow Mango. It only takes a minute and helps us make our products and support better." image={false} /><section className="section feedback-page"><FeedbackFlow initialSlug={selected.slug} /></section><Footer /></main>;
}
