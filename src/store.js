import { reactive } from 'vue'

export const store = reactive ({
    trendingProds: [
        {
            img: 's5.jpg',
            title: 'Fress Apple',
            price: '$18',
            sale: false,
            categories: ['Apple']
        },
        {
            img: 's2.jpg',
            title: 'Fress Cobies',
            price: '$18',
            discount: '$17',
            sale: true,
            categories: ['Vegetable']

        },
        {
            img: 's8.jpg',
            title: 'Fresh Watermelon',
            price: '$15',
            sale: false,
            categories: ['Food', 'Orange']

        },
        {
            img: 's1.jpg',
            title: 'Organic Juice',
            price: '$20',
            discount: '$15',
            sale: true,
            categories: ['Apple', 'Orange']
        },
        {
            img: 's4.jpg',
            title: 'Fresh Blueberries',
            price: '$19',
            discount:'$14',
            sale: true,
            categories: ['Apple', 'Food']
        },
        {
            img: 's10.jpg',
            title: 'organic letus',
            price: '$18',
            discount: '$23',
            sale: false,
            categories: ['Food', 'Vegetable']
        },
        {
            img: 's9.jpg',
            title: 'Red Gajor',
            price: '$28',
            discount: '$26',
            sale: true,
            categories: ['Food', 'Vegetable']
        },
        {
            img: 's7.jpg',
            title: 'Naga pepper',
            price: '$21',
            sale: false,
            categories: ['Apple', 'Orange']
        },
    ],
    prodCategories: ['All Products', 'Apple', 'Food', 'Orange', 'Vegetable'],
    selectedCategory: 'All Products',
    newsFeed: [
        {
            img:'blo1-390x250.jpg',
            resp: 'Gogrin',
            date: '17 Dec 2022',
            tite:'Where I live, I am surrounded by fresh, organic food, so I eat really well.',
        },
        {
            img:'blo2-390x250.jpg',
            resp: 'Gogrin',
            date: '16 Dec 2022',
            tite:'What we get at home is 100% organic food. We are also 90% vegetarian.',
        },
        {
            img:'blo3-390x250.jpg',
            resp: 'Gogrin',
            date: '15 Dec 2022',
            tite:'If we as a society are willing to have a preference for organic food farmer',
        },
        
    ],
    cardClass1: 'list_items',
    cardClass2: 'trending_products'

});