import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Countries from "@/components/Countries";
import Process from "@/components/Process";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Countries />
      <Process />
      <LeadForm />
    </div>
  );
}
