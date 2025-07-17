import Link from 'next/link';

export default function Cancel() {
  return (
    <div>
      <h1>Payment cancelled</h1>
      <Link href="/">Return to store</Link>
    </div>
  );
}
