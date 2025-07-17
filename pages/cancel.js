import Link from 'next/link';
import Layout from '../components/Layout';

export default function Cancel() {
  return (
    <Layout>
      <h1>Pagamento cancelado</h1>
      <Link href="/">Voltar à loja</Link>
    </Layout>
  );
}
