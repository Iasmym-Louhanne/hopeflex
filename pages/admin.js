import Link from 'next/link';

export default function Admin() {
  return (
    <div>
      <h1>Add Product</h1>
      <form action="/api/admin" method="POST">
        <input type="text" name="name" placeholder="Name" required /><br />
        <input type="number" name="price" placeholder="Price (in cents)" required /><br />
        <input type="number" name="stock" placeholder="Stock" required /><br />
        <button type="submit">Create</button>
      </form>
      <Link href="/">Back to products</Link>
    </div>
  );
}
