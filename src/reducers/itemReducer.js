const initialData = {
    items: [

        {
            itemName: 'Men Solid Fit Skinny Jean',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010837096-Black-BLACK-1000010837096-10032022_01-1200.jpg',
            itemPrice: '₹ 719'
        },
        {
            itemName: 'Men Stone Washed Slim Fit Jean',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011751243-Blue-MIDBLUE-1000011751243-09082022_01-1200.jpg',
            itemPrice: '₹1,599'
        },
        {
            itemName: 'Men Stone Washed Distressed Jean',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011751198-Grey-GREY-1000011751198-26082022_01-1200.jpg',
            itemPrice: '₹1,699'
        },
        {
            itemName: ' Women Stripped Round Neck Tshirt',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011670730-Purple-MAUVE-1000011670730_01-1200.jpg',
            itemPrice: '₹999'
        },
        {
            itemName: 'Women Embroided Square Neck Top',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011762960-Black-BLACK-1000011762960_01-1200.jpg',
            itemPrice: '₹1,099'
        },
        {
            itemName: 'Women Solid Full Sleeves Top',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011670492-Red-MAROON-1000011670492_01-1200.jpg',
            itemPrice: '₹799'
        },
        {
            itemName: 'Women Graphic Printed Tshirt',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011630878-Red-RED-1000011630878_01-1200.jpg',
            itemPrice: '₹449'
        },
        {
            itemName: ' Women Printed Round Neck ',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011630826-Green-GREEN-1000011630826_03-1200.jpg',
            itemPrice: '₹500'
        },
        {
            itemName: 'Women Solid Hooded Knit Jacket',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011691295-Pink-PINK-1000011691295_01-1200.jpg',
            itemPrice: '₹1,999 '
        },
        {
            itemName: ' Women Solid Panelled Bike Jacket',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011560321-Purple-LAVENDER-1000011560321_01-1200.jpg',
            itemPrice: '₹2,450'
        },
        {
            itemName: 'Women Textured Zip Closure Hooded Sweatshirt ',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011771788-Grey-CHARCOAL-1000011771788-29082022_01-1200.jpg',
            itemPrice: '₹1,000'
        },
        {
            itemName: 'Women Textured High Neck Jacket ',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011691232-Brown-LIGHTBROWN-1000011691232_01-1200.jpg',
            itemPrice: '₹2,099'
        },
        {
            itemName: 'Women Sport Jacket',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011771490-Black-BLACK-1000011771490_01-1200.jpg',
            itemPrice: '₹1,299'
        },
        {
            itemName: 'Men Solid Denim Jacket ',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011439964-Blue-MIDBLUE-1000011439964-19062022_01-1200.jpg',
            itemPrice: '₹1,400'
        },
        {
            itemName: 'Men Solid Full Sleeves Hooded Fit SweatShirt',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011868927-Beige-OFFWHITE-1000011868927_01-1200.jpg',
            itemPrice: '₹1,000'
        },
        {
            itemName: 'Men Solid Full Sleeves Bike Jacket',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011608713-Brown-TAN-1000011608713-15092022_01-1200.jpg',
            itemPrice: '₹2,400'
        },
        {
            itemName: 'Men Solid Mock Collar Jacket',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011555487-Red-MAROON-1000011555487_01-1200.jpg',
            itemPrice: '₹1,400'
        },
        {
            itemName: 'Men Full Fit Collar Jacket',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011555487-Beige-BEIGE-1000011555487_01-1200.jpg',
            itemPrice: '₹1,329'
        },
        {
            itemName: 'Women Kurta Printed With Pants',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011766608-Blue-BLUE-1000011766608_01-1200.jpg',
            itemPrice: '₹799'
        },
        {
            itemName: 'Women Embroided Round Neck Kurta ',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011416053-Green-TEAL-1000011416053-31072022_01-1200.jpg',
            itemPrice: '₹599'
        },
        {
            itemName: 'Solid Women Kurta With Long Jacket',
            itemImage: 'https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000011551014-Blue-BLUE-1000011551014-02092022_01-1200.jpg',
            itemPrice: '₹1,49,000'
        },

    ]
}
function itemReducer(state = initialData, action) {
    
    return state
}
export default itemReducer