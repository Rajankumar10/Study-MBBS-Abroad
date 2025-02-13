import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Globe, BadgeDollarSign, Award } from "lucide-react";

const benefits = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Quality Education",
    description: "World-class medical education with modern facilities and experienced faculty"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Recognition",
    description: "Degrees recognized worldwide including WHO and major medical councils"
  },
  {
    icon: <BadgeDollarSign className="h-8 w-8" />,
    title: "Affordable Fees",
    description: "Cost-effective education without compromising on quality"
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Career Growth",
    description: "Excellent career opportunities and global practice options"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Study MBBS Abroad?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-primary flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
