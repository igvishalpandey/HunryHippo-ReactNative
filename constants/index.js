export const categories = [
    {
        id: 1,
        name: 'Burger',
        image: require('../assets/images/categories/burger.png'),
    },
    {
        id: 2,
        name: 'Sweets',
        image: require('../assets/images/categories/cupcakeIcon.png'),
    },
    {
        id: 3,
        name: 'Sea Food',
        image: require('../assets/images/categories/fish.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/categories/takeaway.png'),
    },
    {
        id: 5,
        name: 'Italian',
        image: require('../assets/images/categories/noodles.png'),
    },
    {
        id: 6,
        name: 'Indian',
        image: require('../assets/images/categories/juice.png'),
    }
]

export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants:
        [
            {
                id: 1,
                name: 'KFC',
                image: require('../assets/images/restaurants/kfc.webp'),
                description: 'Hot and spicy pizzas',
                lng: 38.2145602,
                lat: -85.5324269,
                address: 'Mayur Vihar Phase 1, New Delhi-91',
                stars: 4,
                reviews: '4.5k',
                category: 'Non-Veg',
                dishes: [
                    {
                        id: 1,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 2,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 3,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    }],
            },
            {
                id: 2,
                name: 'Baba ka Dhabha',
                image: require('../assets/images/restaurants/multifood.webp'),
                description: 'Spicy Indian and Mughali food',
                lng: 38.2145602,
                lat: -85.5324269,
                address: 'Kamla Nagar Market, New Delhi',
                stars: 4,
                reviews: '3.2k',
                category: 'Indian Food',
                dishes: [
                    {
                        id: 1,
                        name: 'Roti',
                        description: 'Butter Roti',
                        price: 12,
                        image: require('../assets/images/dishes/roti.jpeg')
                    },
                    {
                        id: 2,
                        name: 'Jeera Rice',
                        description: 'Jeera Rice with Jeera',
                        price: 120,
                        image: require('../assets/images/dishes/rice.jpeg')
                    },
                    {
                        id: 3,
                        name: 'Samosa',
                        description: 'Fried Aalu Samosa',
                        price: 15,
                        image: require('../assets/images/dishes/samosa.jpeg')
                    },{
                        id: 4,
                        name: 'Nuts',
                        description: 'Crispt Chicken Nuts',
                        price: 420,
                        image: require('../assets/images/dishes/nuts.jpeg')
                    }],
            },
            {
                id: 3,
                name: "Rom's Pizza",
                image: require('../assets/images/restaurants/romspizza.jpg'),
                description: 'Hot and spicy pizzas',
                lng: 38.2145602,
                lat: -85.5324269,
                address: 'Noida Sec-62A',
                stars: 4,
                reviews: '4.8k',
                category: 'Pizza and More',
                dishes: [
                    {
                        id: 1,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 2,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 3,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    }],
            },
        ]
}

export const featured02 = {
    id: 2,
    title: 'Chinese and Italian',
    description: 'Enjoy flavourfull delights',
    restaurants:
        [
            {
                id: 1,
                name: "Rom's Pizza",
                image: require('../assets/images/restaurants/romspizza.jpg'),
                description: 'Hot and spicy pizzas',
                lng: 38.2145602,
                lat: -85.5324269,
                address: 'Noida Sec-62A',
                stars: 4,
                reviews: '4.8k',
                category: 'Pizza and More',
                dishes: [
                    {
                        id: 1,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 2,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 3,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    }],
            },
            {
                id: 2,
                name: 'Pizza Hut',
                image: require('../assets/images/restaurants/pizzahut.jpeg'),
                description: 'Pizza and More',
                lng: 38.2145602,
                lat: -85.5324269,
                address: '434 second street',
                stars: 4,
                reviews: '4.4k',
                category: 'Fast Food',
                dishes: [
                    {
                        id: 1,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 2,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 3,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    }],
            },
            {
                id: 3,
                name: 'Aggrwal Foods',
                image: require('../assets/images/restaurants/indiafood.jpg'),
                description: 'Sweets and Indian Food',
                lng: 38.2145602,
                lat: -85.5324269,
                address: 'CP, Delhi',
                stars: 4,
                reviews: '4.4k',
                category: 'Fast Food',
                dishes: [
                    {
                        id: 1,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 2,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 3,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    }],
            },
        ]
}

export const featured03 = {
    id: 3,
    title: 'Indian Magic',
    description: 'get the taste of authentic Indian Food',
    restaurants:
        [
            {
                id: 1,
                name: 'Aggrwal Foods',
                image: require('../assets/images/restaurants/indiafood.jpg'),
                description: 'Sweets and Indian Food',
                lng: 38.2145602,
                lat: -85.5324269,
                address: 'CP, Delhi',
                stars: 4,
                reviews: '4.4k',
                category: 'Fast Food',
                dishes: [
                    {
                        id: 1,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 2,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 3,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    }],
            },
            {
                id: 2,
                name: 'Baba ka Dhabha',
                image: require('../assets/images/restaurants/multifood.webp'),
                description: 'Spicy Indian and Mughali food',
                lng: 38.2145602,
                lat: -85.5324269,
                address: 'Kamla Nagar Market, New Delhi',
                stars: 4,
                reviews: '3.2k',
                category: 'Indian Food',
                dishes: [
                    {
                        id: 1,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 2,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 3,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    }],
            },
            {
                id: 3,
                name: "Rom's Pizza",
                image: require('../assets/images/restaurants/romspizza.jpg'),
                description: 'Hot and spicy pizzas',
                lng: 38.2145602,
                lat: -85.5324269,
                address: 'Noida Sec-62A',
                stars: 4,
                reviews: '4.8k',
                category: 'Pizza and More',
                dishes: [
                    {
                        id: 1,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 2,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    },
                    {
                        id: 3,
                        name: 'pizza',
                        description: 'cheezy garlic pizza',
                        price: 10,
                        image: require('../assets/burger.jpeg')
                    }],
            },
        ]
}