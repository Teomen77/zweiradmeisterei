import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-schibsted",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zweiradmeisterei · Fahrradwerkstatt Köln-Sülz",
    template: "%s · Zweiradmeisterei",
  },
  description:
    "Meisterbetrieb für Fahrradreparatur in Köln-Sülz. Luxemburger Str. 265. Reparatur anfragen unter 0221 95317798.",
  applicationName: site.name,
  authors: [{ name: site.owner }],
  openGraph: {
    title: "Zweiradmeisterei · Fahrradwerkstatt Köln-Sülz",
    description:
      "Meisterbetrieb an der Luxemburger Straße 265. Reparatur für jedes Rad, vom alten Schätzchen bis zum E-Bike.",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-werkstatt.jpg",
        alt: "Generierte Darstellung einer Werkstatt mit Fahrrad. Kein Foto der Zweiradmeisterei.",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${sans.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
