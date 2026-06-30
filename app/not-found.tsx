import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-beige px-6 text-center">
      <p className="font-heading text-7xl font-bold text-sage">404</p>
      <h1 className="h-display mt-4 text-3xl">This page took a different path.</h1>
      <p className="mt-3 max-w-md text-charcoal/65">
        The page you&apos;re looking for doesn&apos;t exist — but your next great
        first impression still can.
      </p>
      <Link href="/" className="btn-primary mt-7">
        Back to home
      </Link>
    </div>
  );
}
