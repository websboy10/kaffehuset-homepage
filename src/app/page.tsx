import { AtmosphereSection } from "@/components/AtmosphereSection";
import { CustomCursorLoader } from "@/components/CustomCursorLoader";
import { Footer } from "@/components/Footer";
import { GalleryDragController } from "@/components/GalleryDragController";
import { HeroSection } from "@/components/HeroSection";
import { HorizontalGallery } from "@/components/HorizontalGallery";
import { Gallery } from "@/components/Gallery";
import { ImageRevealController } from "@/components/ImageRevealController";
import { ImageRevealWall } from "@/components/ImageRevealWall";
import { Marquee } from "@/components/Marquee";
import { MenuPreview } from "@/components/MenuPreview";
import { NoiseLayers } from "@/components/NoiseLayers";
import { RevealController } from "@/components/RevealController";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { StickyHeader } from "@/components/StickyHeader";
import { VisitSection } from "@/components/VisitSection";

export const dynamic = "force-static";
export const revalidate = false;

export default function HomePage() {
  return (
    <>
      <SEOJsonLd />
      <RevealController />
      <ImageRevealController />
      <GalleryDragController />
      <CustomCursorLoader />
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
