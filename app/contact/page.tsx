import type { Metadata } from "next";
import ContactView from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact Us — Lenswear Films",
  description:
    "Visit Lenswear Films in Goregaon, Mumbai or WhatsApp us to book your wedding film. Studio on Film City Road, opposite Satellite Royal.",
};

export default function ContactPage() {
  return <ContactView />;
}
