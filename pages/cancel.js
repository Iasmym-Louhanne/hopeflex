import Link from 'next/link';

export default function Cancel() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Pagamento cancelado</h1>
      <Link href="/" className="text-blue-600 underline">Voltar à loja</Link>
    </>
  );
}
