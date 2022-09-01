import cls from './Ishop.module.scss'
import Store from './components/Store';

const Ishop2 = () => {

  const products = [
    {
      id: 1,
      name: 'Продукт 1',
      price: 1000,
      photo: 'https://content2.onliner.by/catalog/device/header/3d1539e7b55921664aa80f7b59cc9f55.jpeg',
      mount: 15
    },
    {
      id: 2,
      name: 'Продукт 2',
      price: 2000,
      photo: 'https://content2.onliner.by/catalog/device/header/9fdb7c833aab7fa921691e4dad4f7c3d.jpeg',
      mount: 2
    },
    {
      id: 3,
      name: 'Продукт 3',
      price: 3000,
      photo: 'https://content2.onliner.by/catalog/device/header/0bde71a90a551c172c6a9e290d1cdbed.jpeg',
      mount: 13
    },
    {
      id: 4,
      name: 'Продукт 4',
      price: 4000,
      photo: 'https://content2.onliner.by/catalog/device/header/e2a53ea4433eb3613bc104e709d4879e.jpeg',
      mount: 55
    },
    {
      id: 5,
      name: 'Продукт 5',
      price: 5000,
      photo: 'https://content2.onliner.by/catalog/device/header/cb784a0c2b3e9deaabdf05b82be33f42.jpeg',
      mount: 41
    }
  ]

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  //   {
  //     field: 'photo',
  //     headerName: 'Изображение товара',
  //     renderCell: (params) => {
  //       return (
  //         <img height={100} src={params.value} alt={params.row.name} />
  //       )
  //     },
  //     width: 200,
  //     align: 'center'
  //   },
  //   { field: 'name', headerName: 'Наименование', width: 150 },
  //   { field: 'price', headerName: 'Цена, ед.', type: 'number', width: 90 },
  //   { field: 'mount', headerName: 'Кол-во, шт.', type: 'number', width: 90 }
  // ];

  return (
    <Store
      cls={cls}
      products={products}
      // columns={columns}
    />
  )
}

export default Ishop2;