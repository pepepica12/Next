export const metadata = {
  metadataBase: new URL("https://nefosys.vercel.app"),
  title: {
    default: "Nefosys",
    template: "%s | Nefosys",
  },
  description: "Plataforma de análisis, telemetría y automatización avanzada.",

  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://nefosys.vercel.app/",
    siteName: "Nefosys",
    title: "Nefosys",
    description: "Plataforma de análisis, telemetría y automatización avanzada.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nefosys — Vista previa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nefosys",
    description: "Plataforma de análisis, telemetría y automatización avanzada.",
    images: ["/twitter-image.png"],
    creator: "@nefosys",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
