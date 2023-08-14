export const items = [
  {
    code: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/admin',
  },
  {
    code: 'guide',
    label: 'Guide',
    icon: 'guide',
    path: '/admin/guide',
  },
  {
    code: 'user',
    label: 'Users',
    icon: 'user',
    path: '/admin/user',
    children: [
      {
        code: 'listUser',
        label: 'Lists User',

        path: '/admin/user/list',
      },
      {
        code: 'detail',
        label: 'Detail',

        path: '/admin/user/detail',
      },
    ],
  },

  {
    code: 'product',
    label: 'Products',
    icon: 'product',
    path: '/admin/product',
    children: [
      {
        code: 'listProduct',
        label: 'Lists Product',

        path: '/admin/product/list',
      },
      {
        code: 'create',
        label: 'Form',

        path: '/admin/product/form',
      },
      {
        code: 'size',
        label: 'Sizes',

        path: '/admin/product/size',
      },
      {
        code: 'color',
        label: 'Colors',

        path: '/admin/product/color',
      },
      {
        code: 'catalog',
        label: 'Catalogs',

        path: '/admin/product/catalog',
      },
      {
        code: 'length',
        label: 'Lengths',

        path: '/admin/product/length',
      },
    ],
  },
  {
    code: 'order',
    label: 'Orders',
    icon: 'order',
    path: '/admin/order',
    children: [
      {
        code: 'listOrder',
        label: 'Lists Order',

        path: '/admin/order/list',
      },
    ],
  },
  {
    code: 'blog',
    label: 'Blogs',
    icon: 'blog',
    path: '/admin/blog',
    children: [
      {
        code: 'listBlog',
        label: 'Lists Blog',

        path: '/admin/blog/list',
      },
    ],
  },
];
