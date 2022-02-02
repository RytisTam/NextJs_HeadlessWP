import Link from 'next/link'

// export default function Header() {
//   return (
//     <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
//       <Link href="/">
//         <a className="hover:underline">Blog</a>
//       </Link>
//       .
//     </h2>
//   )
// }


export default function Header({menuItems: {menuItems}}) {
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-blue-500 shadow-lg">
      <ul className="flex items-center justify-end flex-grow w-full">
        {menuItems.edges.map((item) => (
          <li key={item.node.path}>
            <a
              className="p-4 ml-2 text-white hover:underline"
              href={item.node.url}
            >
              {item.node.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
