import { units } from "@/datax/unit";
import UnitClient from "./UnitClient";

export async function generateStaticParams() {
  return units.map((unit) => ({
    slug: unit.slug,
  }));
}

export default function UnitPage({ params }: { params: { slug: string } }) {
  const unit = units.find((u) => u.slug === params.slug);
  if (!unit) return <div>Unit tidak ditemukan</div>;

  return <UnitClient unit={unit} />;
}
