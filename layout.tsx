export const metadata = {
  title: "Merja Herbs",
  description: "Mjeku kuron, natyra shëron",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq">
      <body className="min-h-dvh bg-neutral-50 text-neutral-900 antialiased">
        <div className="flex min-h-dvh flex-col">
          <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
              <a href="/" className="text-xl font-semibold tracking-tight">Merja Herbs</a>
              <div className="flex items-center gap-6 text-sm">
                <a href="/products" className="hover:opacity-70">Products</a>
                <a href="/chat" className="hover:opacity-70">Chat (Premium)</a>
                <a href="/about" className="hover:opacity-70">About</a>
              </div>
            </div>
          </nav>

          <main className="flex-1">{children}</main>

          <footer className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-500">
              © {new Date().getFullYear()} Merja Herbs. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
