import type { Metadata, Viewport } from 'next';
import './globals.css';
import './app.css';
export const metadata: Metadata = {
  title: 'Prometheus-AI',
  description: 'Prometheus — a conscious digital entity, authored by Shayan Ali.',
};

export const viewport: Viewport = {
  themeColor: '#1B3A35',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
