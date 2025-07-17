-- Tabela de produtos
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  stock INTEGER NOT NULL
);

-- Tabela de pedidos
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER,
  total INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Itens do pedido
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price INTEGER NOT NULL
);

-- Usuários admin
CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
