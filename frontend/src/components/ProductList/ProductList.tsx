import "./ProductList.css"

const products: {id: number, name: string, price: number}[] = [
  { id: 1, name: "Zapatos", price: 56500 },
  { id: 2, name: "Camiseta sdfsf sdf dsf safsdafsdf safdsfsad fds dsfds fasdf dsaf ds sdfsd sdf sdaf sdf asdf sdf sdfsdfsdf dfsf", price: 78000 },
  { id: 3, name: "Pantaloneta", price: 19800 },
  { id: 4, name: "Zapatos", price: 56500 },
  { id: 5, name: "Camiseta", price: 78000 },
  { id: 6, name: "Pantaloneta", price: 19800 },
  { id: 7, name: "Zapatos", price: 56500 },
];

const ProductList = () => {
  return (
    <ul className="grid grid-cols-3 gap-12">
      {products.map((product) => (
        <li className="w-full h-135 relative bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="w-full aspect-square">
            <img className="w-full h-full object-cover" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ta-LgJ3RMOK_bMWgKInkR0KbNfmTZfHZOg&s"} />
          </div>
          <div className="max-h-20 px-4 py-2">
            <span className="text-xl text-black font-semibold line-clamp-2"> {product.name} </span>
          </div>
          <div className="h-15 px-4 py-2">
            <span className="text-3xl text-gray-500"> $ {Intl.NumberFormat("es-CO").format(product.price)} </span>
          </div>
          <div className="w-full absolute bottom-0 px-4 pb-6">
            <div className="bg-blue-500 py-2 text-white text-center rounded"> Agregar al carrito </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;