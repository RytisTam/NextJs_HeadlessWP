import Link from 'next/link'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    if (!src) {
        src = '';
    }
    return `${src}?w=${width}&q=${quality || 75}`
  }

const Products = ({ products }) => {


    if (!products) {
        return null
    }

    console.warn(products);


    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Mūsų prekės</h2>
          
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                  
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Image loader={myLoader} src={product?.images[0]?.src ?? 'https://dev.rtam.lt/wp-content/uploads/woocommerce-placeholder.png'} alt={product.imageAlt} width={212} height={320} className="w-full h-full object-center object-cover lg:w-full lg:h-full"
    />
                  
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={product.permalink}><a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a></Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.short_description.replace('<p>','').replace('</p>','')}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price + '€'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }




export default Products;