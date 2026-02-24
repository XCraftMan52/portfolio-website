export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-foreground/10 flex flex-col items-center justify-center mt-auto">
      <p className="text-sm text-foreground/60">
        © {new Date().getFullYear()} Lucas Webber.
      </p>
    </footer>
  )
}
