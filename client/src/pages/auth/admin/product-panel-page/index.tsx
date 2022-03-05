import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FileUploadFieldProps } from '../../../../components/file-upload-field';
import CategoryService from '../../../../services/category-service';
import ProductService from '../../../../services/product-service';
import Category from '../../../../types/category';
import Image from '../../../../types/image';
import Product from '../../../../types/product';
import ProductData from '../../../../types/product-data';
import ProductPanelPageForm from './product-panel-page-form';
import ProductPanelPageTable from './product-panel-page-table';

// const defaultCategoryOption: Category = {
//   id: '-1',
//   title: 'Pasirinkti kategoriją',
//   createdAt: '',
//   updatedAt: '',
// };

const ProductPanelPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  // const [titleField, setTitleField] = useState<string>('');
  // const [categoryField, setCategoryField] = useState<string>(defaultCategoryOption.id);
  // const [priceField, setPriceField] = useState<number>(0);
  // const [description1Field, setDescriptionField] = useState<string>('');
  // const [imageField, setImageField] = useState<Image>([]);
  // const [editedProduct, setEditedProduct] = useState<string | null>(null);

  const handleCreateProduct = (formData: ProductData) => {
    ProductService.createProduct(formData);
  };

  const editProduct = (id: string) => {
    console.log(id);
  };

  // const updateProduct = async () => {
  //   if (editedProduct !== null) {
  //     const updatedProduct = await ProductService.updateProduct(editedProduct, {
  //       title: titleField,
  //       category: categoryField,
  //       price: priceField,
  //       description: description1Field,
  //       images: imageField,
  //     });
  //     if (typeof updatedProduct === 'string') {
  //       setError(updatedProduct);

  //       return;
  //     } else if (error) {
  //       setError(null);
  //     }
  //   }
  // };

  const deleteProduct = async (id: string) => {
    const deletedProduct = await ProductService.deleteProduct(id);

    if (typeof deletedProduct === 'string') {
      setError(deletedProduct);

      return;
    } else if (error) {
      setError(null);
    }
    setProducts(products.filter(x => x.id !== id));
  };

  useEffect(() => {
    (async () => {
      const fetchedProducts = await ProductService.getProducts();
      const productsArray = Object.values(fetchedProducts);
      if (typeof fetchedProducts === 'string') {
        console.log(fetchedProducts);

        return;
      }
      setProducts(productsArray[0]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const fetchedCategories = await CategoryService.getCategories();
      const categoryArray = Object.values(fetchedCategories);
      if (typeof fetchedCategories === 'string') {
        console.error(fetchedCategories);

        return;
      }
      setCategories(categoryArray[0]);
    })();
  }, []);

  return (
    <Container
      maxWidth="md">
      <Grid container spacing={3}>
        {
          categories.length > 0 && (
            <Grid item xs={12}>
              <ProductPanelPageForm
                initialCategories={categories}
                onSubmit={handleCreateProduct}
              />
            </Grid>
          )
        }
        <Grid item xs={12}>
          <ProductPanelPageTable
            data={products.map((x) => ({ ...x, edited: false }))}
            onDelete={deleteProduct}
            onEdit={editProduct}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPanelPage;
