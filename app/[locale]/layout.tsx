import "./globals.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import LocaleSwitcher from "../../shared/LocaleSwitcher";

const locales = ["en", "de"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  return (
    <html lang={locale}>
      <body>
        <LocaleSwitcher />
        <main>{children}</main>
      </body>
    </html>
  );
}
