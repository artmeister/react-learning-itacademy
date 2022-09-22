import {
  useState,
  // useEffect
} from 'react';

import cls from './Ishop.module.scss'
import productsData from './productsData.json';
import Store from './components/Store';


const Ishop2 = () => {
  const [products, setProducts] = useState(productsData);
  const [editFormData, setEditFormData] = useState({
    photo: "",
    name: "",
    price: null,
    mount: null,
  });
  const [editProductId, setEditProductId] = useState(null);

  const onToggle = (id) => {
    const productElements = products.map(product => {
      if (product.id === id) product.selected = !product.selected;

      return product;
    })

    setProducts(productElements);
  }

  const onDelete = (id) => {
    const productDeleting = products.filter(product => product.id !== id);

    setProducts(productDeleting);
  }

  const onAdded = (name, price, photo, mount) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: name,
        price: price,
        photo: photo,
        mount: mount
      },
    ]);
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedProduct = {
      id: editProductId,
      name: editFormData.name,
      price: editFormData.price,
      photo: editFormData.photo,
      mount: editFormData.mount
    };

    const newProducts = [...products];

    const index = products.findIndex((product) => product.id === editProductId);

    newProducts[index] = editedProduct;

    setProducts(newProducts);
    setEditProductId(null);
  };

  const handleEditClick = (event, product) => {
    event.preventDefault();

    setEditProductId(product.id);

    const formValues = {
      name: product.name,
      price: product.price,
      photo: product.photo,
      mount: product.mount,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditProductId(null);
  };

  return (
    <Store
      cls={cls}
      products={products}
      onDelete={onDelete}
      onToggle={onToggle}
      onAdded={onAdded}
      editFormChange={handleEditFormChange}
      editFormSubmit={handleEditFormSubmit}
      editClick={handleEditClick}
      cancelClick={handleCancelClick}
      editProductId={editProductId}
      editFormData={editFormData}
    />
  )
}

export default Ishop2;