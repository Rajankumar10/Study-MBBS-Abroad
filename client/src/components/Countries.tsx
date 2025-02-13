import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { countries } from "@/lib/countries";

export default function Countries() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Top Countries for MBBS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-4">{country.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {country.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
