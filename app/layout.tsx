import type { Metadata } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif_JP({
  variable: '--font-noto-serif',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  preload: true,
})

const notoSans = Noto_Sans_JP({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  preload: true,
})

export const metadata: Metadata = {
  title: '新人戦力化プログラム | KnoockRap',
  description:
    '採用直後・配属前・現場での伸び悩み。どんな状況でも、5日間の実務型プログラムで現場に通用する人材に育成します。',
  keywords: [
    '新人研修',
    '新人育成',
    '人材育成',
    'テレアポ',
    '営業研修',
    '帯広',
  ],
  authors: [{ name: 'KnoockRap' }],
  robots: 'index, follow',
  openGraph: {
    title: '新人戦力化プログラム | KnoockRap',
    description:
      '採用直後・配属前・現場での伸び悩み。どんな状況でも、5日間の実務型プログラムで現場に通用する人材に育成します。',
    type: 'website',
    url: 'https://knockrapworks.com',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '新人戦力化プログラム | KnoockRap',
    description: '5日間で戦力になる。実務型新人研修プログラム。',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={`${notoSerif.variable} ${notoSans.variable} scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
