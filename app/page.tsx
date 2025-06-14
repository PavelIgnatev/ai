"use client";

import type { Metadata } from "next";
import "react-tooltip/dist/react-tooltip.css";
import "semantic-ui-css/semantic.min.css";

import { ViewDialogContainer } from "../widgets/view-dialog/view-dialog.container";

export const metadata: Metadata = {
  title: "AiSender - Лидогенерация с искусственным интеллектом",
  description:
    "AISender - инновационный инструмент для лидогенерации с использованием AI. Присоединяйтесь к нашему Telegram каналу @aisendercases для получения последних кейсов и обновлений.",
  alternates: {
    canonical: "https://aisender.ru/",
  },
};

export default function Home() {
  return <ViewDialogContainer />;
}
