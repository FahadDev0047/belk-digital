import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

export function Layout({
  children,
  isRTL = false
}: {
  children: React.ReactNode;
  isRTL?: boolean;
}) {
  // Next.js handles HTML/Body in root layout, so we just wrap content here
  return (
    <div className={cn("min-h-screen flex flex-col", isRTL && "rtl")}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}
