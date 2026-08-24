import { Industries } from "@/components/home/Industries";

export default function IndustriesPage() {
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Tailored IVR experiences that solve unique communication challenges across every industry vertical.
          </p>
          <Industries />
        </div>
      </section>
    </div>
  );
}