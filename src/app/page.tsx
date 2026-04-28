import { AtmosphereSection } from "@/components/AtmosphereSection";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HorizontalGallery } from "@/components/HorizontalGallery";
import { Gallery } from "@/components/Gallery";
import { ImageRevealWall } from "@/components/ImageRevealWall";
import { Marquee } from "@/components/Marquee";
import { MenuPreview } from "@/components/MenuPreview";
import { NoiseLayers } from "@/components/NoiseLayers";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { StickyHeader } from "@/components/StickyHeader";
import { VisitSection } from "@/components/VisitSection";

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
