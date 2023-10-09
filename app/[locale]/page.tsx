import { useTranslations } from "next-intl";
import Link from "next/link";

export default function YourPage() {
  const t = useTranslations("MainPage");
  return (
    <div>
      <h1>{t("home")}</h1>
      <Link href="/products">{t("link")}</Link>
    </div>
  );
}
