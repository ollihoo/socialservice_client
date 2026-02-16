import '@/ui/global.css';
import '@/ui/fonts';
export default function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={'antialiased'}>{children}</body>
    </html>
  );
}
