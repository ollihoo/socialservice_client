import '@/ui/global.css';
import '@/ui/fonts';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Die Linke - Beratungsdatenbank',
}

export default function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={'antialiased'}>{children}</body>
    </html>
  );
}
