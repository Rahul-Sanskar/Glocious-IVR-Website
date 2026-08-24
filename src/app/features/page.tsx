import { IVRFeatures } from "@/components/home/IVRFeatures";

export default function FeaturesPage() {
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our IVR Features</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Discover the powerful capabilities of our IVR solutions that drive efficiency and enhance customer experience.
          </p>
          <IVRFeatures />
        </div>
      </section>
    </div>
  );
}