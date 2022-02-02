export default function Products({products}) {
    return (
        <nav className="flex flex-wrap items-center justify-between p-6 bg-blue-500 shadow-lg">
        <ul className="flex items-center justify-end flex-grow w-full">
         {products.nodes.map((item) => (
    <li key={item.id}>
      <a
        className="p-4 ml-2 text-white hover:underline"
        href={item.slug}
      >
        {item.name}
      </a>
    </li>
  ))}
        </ul>
      </nav>
    );
  };