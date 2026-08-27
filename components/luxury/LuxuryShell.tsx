import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { WorkWithUs } from "@/components/luxury/PageHero";
import NapBlock from "@/components/luxury/NapBlock";

type LuxuryShellProps = {
  children: React.ReactNode;
  jsonLd?: object | object[];
  showWorkWithUs?: boolean;
  showNap?: boolean;
};

export default function LuxuryShell({
  children,
  jsonLd,
  showWorkWithUs = true,
  showNap = false,
}: LuxuryShellProps) {
  const graphs = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <>
      {graphs.map((graph, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
      <Navbar />
      <main>{children}</main>
      {showNap && <NapBlock />}
      {showWorkWithUs && <WorkWithUs />}
      <Footer />
    </>
  );
}
