import Button from "@/shared/ui/Button";
import { products } from "./entities/product/data/products";
import { ProductGallery } from "./widgets/product-gallery/ui/ProductGallery";

function App() {
  return (
    <>
      <div className="app">
        <Button label="primary" variant="primary" />
        <Button label="outline" variant="outline" />
        <Button label="I" variant="icon" />
      </div>

      <ProductGallery products={products} title="Descubre La Colección Brillante" />
    </>
  );
}

export default App;
