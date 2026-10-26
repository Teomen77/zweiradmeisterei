export const site = {
  name: "Zweiradmeisterei",
  owner: "Simon Schäfer",
  legalName: "Zweiradmeisterei Inh. Simon Schäfer",
  street: "Luxemburger Str. 265",
  postalCode: "50939",
  city: "Köln",
  district: "Köln-Sülz",
  phoneDisplay: "0221 95317798",
  phoneTel: "+4922195317798",
  email: "zweiradmeisterei@gmail.com",
  vatId: "DE348613184",
  url: "https://zweiradmeisterei.vercel.app",
  houseNumber: "265",
  lat: 50.9160617,
  lon: 6.9282942,
  hoursLabel: "Mo–Fr 9:30–18:00",
} as const;

export const nav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#werkstatt", label: "Werkstatt" },
  { href: "/#zeiten", label: "Zeiten" },
  { href: "/#standort", label: "Standort" },
] as const;

export const services = [
  {
    name: "Inspektion",
    detail: "Durchsicht des Rades in der Meisterwerkstatt.",
  },
  {
    name: "Sicherheitsüberprüfung",
    detail: "Prüfung der sicherheitsrelevanten Teile.",
  },
  {
    name: "Instandsetzung",
    detail: "Reparatur, wenn etwas defekt ist.",
  },
  {
    name: "Restaurierung",
    detail: "Aufarbeitung eines älteren Rades.",
  },
  {
    name: "Generalüberholung",
    detail: "Größere Überholung, nicht nur ein einzelner Handgriff.",
  },
  {
    name: "Einstellarbeiten",
    detail: "Schaltung, Bremse und weitere Einstellungen.",
  },
  {
    name: "Platte Reifen",
    detail: "Ein Plattfuß ist ausdrücklich willkommen.",
  },
  {
    name: "Bremsen",
    detail: "Defekte Bremsen.",
  },
  {
    name: "Schaltungen",
    detail: "Defekte Schaltungen.",
  },
  {
    name: "Lager",
    detail: "Defekte Lager.",
  },
  {
    name: "Lichtanlage",
    detail: "Defekte Lichtanlagen.",
  },
  {
    name: "Neueinspeichung",
    detail: "Neueinspeichung von Hand.",
  },
  {
    name: "Wiederaufbereitung",
    detail: "Wiederaufbereitung des Rades.",
  },
  {
    name: "E-Bike",
    detail: "Zertifizierte Bosch E-Bike Techniker.",
  },
  {
    name: "Beratung",
    detail: "Ersatzteile, Zubehör und die passende Reparatur.",
  },
] as const;

export const hours = [
  { day: "Montag", time: "9:30–18:00" },
  { day: "Dienstag", time: "9:30–18:00" },
  { day: "Mittwoch", time: "9:30–18:00" },
  { day: "Donnerstag", time: "9:30–18:00" },
  { day: "Freitag", time: "9:30–18:00" },
  { day: "Samstag", time: null },
  { day: "Sonntag", time: null },
] as const;

export const facts = [
  {
    term: "Meisterbrief",
    detail:
      "Simon Schäfer hat 2021 den Meisterbrief als Zweiradmechaniker erhalten und wurde als Jahrgangsbester des Kammerbezirks der Handwerkskammer zu Köln geehrt.",
  },
  {
    term: "Werkstattteam",
    detail:
      "Neben ihm stehen Ole und Nicolai zur Seite, beide ausgebildete Zweiradmechatroniker.",
  },
  {
    term: "E-Bike",
    detail: "Die Werkstatt arbeitet als zertifizierte Bosch E-Bike Techniker.",
  },
] as const;

export function repairMailto(body: string) {
  const params = new URLSearchParams();
  params.set("subject", "Reparaturanfrage");
  if (body.trim()) params.set("body", body.trim());
  return `mailto:${site.email}?${params.toString().replace(/\+/g, "%20")}`;
}

export function serviceMailto(name: string) {
  return repairMailto(`Leistung: ${name}\n\n`);
}

export const mapEmbedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=6.920%2C50.912%2C6.936%2C50.920&layer=mapnik&marker=${site.lat}%2C${site.lon}`;

export const mapLink = `https://www.openstreetmap.org/?mlat=${site.lat}&mlon=${site.lon}#map=17/${site.lat}/${site.lon}`;

export const routeLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${site.street}, ${site.postalCode} ${site.city}`,
)}`;

export const heroAlt =
  "Generierte Darstellung einer Werkstatt mit Fahrrad auf einem Montageständer. Kein Foto der Zweiradmeisterei.";

export const detailAlt =
  "Generierte Darstellung eines Laufrads in einem Zentrierständer. Kein Foto der Zweiradmeisterei.";
