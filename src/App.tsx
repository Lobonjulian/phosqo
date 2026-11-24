import { products } from "./entities/product/data/products";
import { HeroShowcase } from "./widgets/hero-showcase/ui/HeroShowcase";
import { ProductGallery } from "./widgets/product-gallery/ui/ProductGallery";

function App() {
  return (
    <>
      <HeroShowcase />
      <ProductGallery products={products} title="Descubre La Colección Brillante" />
    </>
  );
}

export default App;
