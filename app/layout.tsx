import { config as dotenvConfig } from "dotenv";
import type { Metadata, Viewport } from "next";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";

// Предполагается, что вы перенесли содержимое styles/normalize.css сюда или импортируете его здесь
import "../styles/normalize.css";
import "./globals.css";
import Providers from "./providers";

dotenvConfig();

export const metadata: Metadata = {
  title: "AiSender - Лидогенерация с AI",
  description:
    "AISender - инструмент ИИ, который способен самостоятельно найти лидов и вести диалог с клиентом. Присоединяйтесь к нашему Telegram каналу для последних обновлений.",
  keywords:
    "AISender, лидогенерация, AI, искусственный интеллект, лиды, автоматизация продаж, маркетинг, телеграм канал",
  openGraph: {
    type: "website",
    url: "https://aisender.ru/",
    title: "AiSender - Лидогенерация с AI",
    description:
      "AISender - инструмент ИИ для лидогенерации и автоматизации диалогов с клиентами",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://aisender.ru/",
    title: "AiSender - Лидогенерация с AI",
    description:
      "AISender - инструмент ИИ для лидогенерации и автоматизации диалогов с клиентами",
  },
  other: {
    "telegram:channel": "@aisendercases",
  },
  alternates: {
    canonical: "https://aisender.ru/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
