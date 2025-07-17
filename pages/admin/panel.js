import Link from 'next/link';

export default function Admin() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Adicionar Produto</h1>
      <form action="/api/admin" method="POST" className="space-y-2 mb-4">
        <input type="text" name="name" placeholder="Nome" required className="border px-2 py-1 rounded w-full" />
        <input type="number" name="price" placeholder="Preço (em centavos)" required className="border px-2 py-1 rounded w-full" />
        <input type="number" name="stock" placeholder="Estoque" required className="border px-2 py-1 rounded w-full" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Criar</button>
      </form>
      <Link href="/" className="text-blue-600 underline">Voltar</Link>
    </>
  );
}
