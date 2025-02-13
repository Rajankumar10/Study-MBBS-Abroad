import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    title: "Eligibility Check",
    content: "Minimum 50% in PCB (Physics, Chemistry, Biology) in 12th standard. NEET qualification required for Indian students."
  },
  {
    title: "Document Preparation",
    content: "Prepare necessary documents including marksheets, passport, NEET scorecard, and other required certificates."
  },
  {
    title: "University Selection",
    content: "Choose from our partner universities based on your preferences and budget."
  },
  {
    title: "Application Process",
    content: "Complete the university application form and submit required documents."
  },
  {
    title: "Visa Processing",
    content: "Guidance for student visa application and documentation."
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Admission Process & Eligibility
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {steps.map((step, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg">
                  {step.title}
                </AccordionTrigger>
                <AccordionContent>
                  {step.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
