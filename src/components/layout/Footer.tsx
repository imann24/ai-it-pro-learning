import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="/about"
            className="text-sm leading-6 text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="text-sm leading-6 text-muted-foreground hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm leading-6 text-muted-foreground hover:text-foreground"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="text-sm leading-6 text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} IT Pro Development. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
