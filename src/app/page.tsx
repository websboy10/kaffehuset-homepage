import dynamic from "next/dynamic";
import { AtmosphereSection } from "@/components/AtmosphereSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Gallery } from "@/components/Gallery";
import { Marquee } from "@/components/Marquee";
import { MenuPreview } from "@/components/MenuPreview";
import { NoiseLayers } from "@/components/NoiseLayers";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { StickyHeader } from "@/components/StickyHeader";
import { VisitSection } from "@/components/VisitSection";

const CustomCursor = dynamic(() => import("@/components/CustomCursor").then((mod) => mod.CustomCursor));
const ImageRevealWall = dynamic(() =>
  import("@/components/ImageRevealWall").then((mod) => mod.ImageRevealWall)
);
const HorizontalGallery = dynamic(() =>
  import("@/components/HorizontalGallery").then((mod) => mod.HorizontalGallery)
);

export default function HomePage() {
  return (
    <>
      <SEOJsonLd />
      <CustomCursor />
      <NoiseLayers />
      <StickyHeader />
      <main>
        <HeroSection />
        <Marquee />
        <MenuPreview />
        <AtmosphereSection />
        <ImageRevealWall />
        <HorizontalGallery />
        <Gallery />
        <VisitSection />
      </main>
      <Footer />
    </>
  );
}
