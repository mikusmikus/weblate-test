"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

export default function HomePage() {
  const t = useTranslations("messages.HomePage")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t("title")}</h1>

        <p className="text-gray-600 mb-6">{t("description")}</p>

        <div className="space-y-4">
          <div className="flex justify-center space-x-4">
            <Link
              href="/"
              locale="en"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              English
            </Link>
            <Link
              href="/"
              locale="lv"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Latviešu
            </Link>
          </div>

          <div className="text-sm text-gray-500">
            {t("currentLocale")}: <span className="font-semibold">{t("locale")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
