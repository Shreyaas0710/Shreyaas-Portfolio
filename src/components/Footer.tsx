export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Shreyaas S. All rights reserved.
      </p>
      <p className="text-gray-600 text-xs mt-2 font-mono">
        Designed & Built with React, Tailwind & Framer Motion
      </p>
    </footer>
  );
}
