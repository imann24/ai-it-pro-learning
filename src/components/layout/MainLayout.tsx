import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow px-4 py-6 md:px-8">{children}</main>
      <Footer />
    </div>
  );
}
