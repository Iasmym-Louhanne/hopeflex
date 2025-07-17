import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>{children}</main>
      <footer style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid #ccc' }}>
        <p>&copy; Hopeflex Store</p>
      </footer>
    </>
  );
}
