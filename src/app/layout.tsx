// This layout is needed to configure the default locale
// It's a passthrough component that doesn't render any UI
// See: https://next-intl.docschina.org/docs/getting-started/app-router#static-rendering
export default function RootLayout({children}: {children: React.ReactNode}) {
  return children;
}
