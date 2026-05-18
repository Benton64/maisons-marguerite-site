export default function HomePage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '16px' }}>
      <img src="/logo/MaisonMarguerite-OneColorBG.svg" alt="Les Maisons de Marguerite" style={{ width: 200 }} />
      <h1 style={{ fontFamily: 'var(--mm-font-display)', color: 'var(--mm-forest)', fontSize: 'var(--mm-h2-size)' }}>
        Les Maisons de Marguerite
      </h1>
      <p style={{ fontFamily: 'var(--mm-font-body)', color: 'var(--mm-bronze)', fontStyle: 'italic' }}>
        Des maisons habitées, jamais mises en scène.
      </p>
    </main>
  )
}
