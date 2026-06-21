export const categories = [
    {
        id: '1',
        name: 'Smartphone',
        description: 'Smartphone terbaru dan terbaik',
        hex: '#ff6900',
        image: 'assets/images/categories/iphone-14.png'
    },
    {
        id: '2',
        name: 'Macbook',
        description: 'Laptop premium dari Apple',
        hex: '#ffb26b',
        image: 'assets/images/categories/macbook.png'
    },
    {
        id: '3',
        name: 'iPad',
        description: 'Tablet canggih dari Apple',
        hex: '#ffad77',
        image: 'assets/images/categories/ipad.png'
    },
    {
        id: '4',
        name: 'Laptop',
        description: 'Laptop untuk keperluan sehari-hari',
        hex: '#ff9e6d',
        image: 'assets/images/categories/laptop.png'
    },
    {
        id: '5',
        name: 'Apple Watch',
        description: 'Jam tangan pintar dari Apple',
        hex: '#ff8c69',
        image: 'assets/images/categories/apple-watch.png'
    },
    {
        id: '6',
        name: 'Smart Watch',
        description: 'Jam tangan pintar dengan berbagai fitur',
        hex: '#ff7a5d',
        image: 'assets/images/categories/smart-watch.png'
    },
    {
        id: '7',
        name: 'Accessories',
        description: 'Aksesori untuk perangkat elektronik',
        hex: '#ff6b5b',
        image: 'assets/images/categories/accessories.png'
    }
];

export const merks = [
    {
        id: '1',
        name: 'Apple'
    },
    {
        id: '2',
        name: 'Xiaomi & Redmi'
    },
    {
        id: '3',
        name: 'Samsung'
    }
];

export const categoryMap = Object.fromEntries(
    categories.map(c => [c.id, c.name])
);

export const merkMap = Object.fromEntries(
    merks.map(m => [m.id, m.name])
);

export const products = [
    {
        image: 'assets/images/products/iphone-14.png',
        categoryId: '1',
        merkId: '1',
        title: 'iPhone 14',
        description: 'Smartphone terbaru dari Apple',
        price: '15000'
    },

    {
        image: 'assets/images/products/iphone-14.png',
        categoryId: '1',
        merkId: '1',
        title: 'iPhone 14 Pro',
        description: 'Smartphone terbaru dari Apple',
        price: '25000'
    },
    {
        image: 'assets/images/products/iphone-14.png',
        categoryId: '1',
        merkId: '1',
        title: 'Wireless Mouse',
        description: 'Mouse ringan',
        price: '15000'
    },
    {
        image: 'assets/images/products/iphone-14.png',
        categoryId: '1',
        merkId: '1',
        title: 'Wireless Mouse',
        description: 'Mouse ringan',
        price: '15000'
    },
    {
        image: 'assets/images/products/iphone-14.png',
        categoryId: '1',
        merkId: '1',
        title: 'iPhone 14 Pro',
        description: 'Smartphone terbaru dari Apple',
        price: '25000'
    },
    {
        image: 'assets/images/products/iphone-14.png',
        categoryId: '1',
        merkId: '1',
        title: 'Wireless Mouse',
        description: 'Mouse ringan',
        price: '15000'
    },
    {
        image: 'assets/images/products/iphone-14.png',
        categoryId: '1',
        merkId: '1',
        title: 'Wireless Mouse',
        description: 'Mouse ringan',
        price: '15000'
    }
];