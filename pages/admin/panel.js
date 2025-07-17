import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Admin() {
  return (
    <Layout>
      <h1>Adicionar Produto</h1>
      <form action="/api/admin" method="POST">
        <input type="text" name="name" placeholder="Nome" required /><br />
        <input type="number" name="price" placeholder="Preço (em centavos)" required /><br />
        <input type="number" name="stock" placeholder="Estoque" required /><br />
        <button type="submit">Criar</button>
      </form>
      <Link href="/">Voltar</Link>
    </Layout>
  );
}
