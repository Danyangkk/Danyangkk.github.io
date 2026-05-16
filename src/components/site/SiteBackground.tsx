export function SiteBackground() {
  return (
    <>
      <div
        className="site-grid-bg pointer-events-none fixed inset-0 z-0 opacity-80"
        aria-hidden
      />
      <div
        className="site-radial-glow pointer-events-none fixed inset-0 z-0"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed top-1/4 -right-20 z-0 h-80 w-80 rounded-full bg-primary/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed bottom-1/4 -left-20 z-0 h-80 w-80 rounded-full bg-secondary-container/10 blur-[100px]"
        aria-hidden
      />
    </>
  )
}
