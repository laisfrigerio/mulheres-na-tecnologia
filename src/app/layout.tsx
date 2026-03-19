import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BackToTop } from "@/components/BackToTop";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title:
    "Mulheres na Tecnologia | Conteúdos, Cursos, Eventos e Comunidades Tech no Brasil",
  description:
    "Plataforma brasileira que reúne conteúdos técnicos criados por mulheres na tecnologia: artigos, vídeos, cursos, bootcamps, eventos e comunidades tech. Descubra, aprenda e fortaleça vozes femininas na tecnologia.",
  keywords:
    "mulheres na tecnologia, mulheres na tech, mulheres programadoras, conteúdo tech feminino, cursos de programação para mulheres, comunidades tech femininas, tecnologia no Brasil",
  openGraph: {
    title: "Mulheres na Tecnologia | Conteúdos Tech Criados por Mulheres",
    description:
      "Descubra artigos, vídeos, cursos e eventos criados por mulheres na tecnologia no Brasil.",
    type: "website",
    url: "https://www.mulheresnatecnologia.com.br/",
    images: [
      {
        url: "https://www.mulheresnatecnologia.com.br/images/og-cover.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mulheres na Tecnologia",
    description: "Curadoria de conteúdos tech criados por mulheres no Brasil.",
    images: ["https://www.mulheresnatecnologia.com.br/images/og-cover.png"],
  },
  alternates: {
    canonical: "https://www.mulheresnatecnologia.com.br/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="light">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/images/favico2.png" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mulheres na Tecnologia",
              url: "https://www.mulheresnatecnologia.com.br/",
              description:
                "Plataforma brasileira que reúne conteúdos técnicos criados por mulheres na tecnologia.",
              inLanguage: "pt-BR",
            }),
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NNGVJJ2M');`,
          }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q04YSK88N4"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q04YSK88N4');`,
          }}
        />
      </head>
      <body data-theme="light">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NNGVJJ2M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeToggle />
        <main>{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
