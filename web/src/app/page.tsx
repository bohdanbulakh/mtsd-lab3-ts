import ProductAPI from '@/lib/api/product/ProductAPI';
import ProductCard from '@/app/components/product/ProductCard';

export default async function Home () {
  let products = null;
  let error = null;

  try {
    products = await ProductAPI.getAll();
  } catch (err) {
    error = err;
  }

  return (
    <>
      {error ? (
        <p>Please, try again later</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {products?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
