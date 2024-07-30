const items = [
    {
        "id": 1,
        "titulo": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "precio": 109.95,
        "descripcion": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "categoria": "ropa",
        "imagen": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "titulo": "Mens Casual Premium Slim Fit T-Shirts ",
        "precio": 22.3,
        "descripcion": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "categoria": "ropa",
        "imagen": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "titulo": "Mens Cotton Jacket",
        "precio": 55.99,
        "descripcion": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "categoria": "ropa",
        "imagen": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "titulo": "Mens Casual Slim Fit",
        "precio": 15.99,
        "descripcion": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product descripcion.",
        "categoria": "ropa",
        "imagen": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 5,
        "titulo": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "precio": 695,
        "descripcion": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "categoria": "joyas",
        "imagen": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 6,
        "titulo": "Solid Gold Petite Micropave ",
        "precio": 168,
        "descripcion": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "categoria": "joyas",
        "imagen": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 7,
        "titulo": "White Gold Plated Princess",
        "precio": 9.99,
        "descripcion": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "categoria": "joyas",
        "imagen": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3,
            "count": 400
        }
    },
    {
        "id": 8,
        "titulo": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "precio": 10.99,
        "descripcion": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "categoria": "joyas",
        "imagen": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 1.9,
            "count": 100
        }
    },
    {
        "id": 9,
        "titulo": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "precio": 64,
        "descripcion": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "categoria": "electronica",
        "imagen": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
            "rate": 3.3,
            "count": 203
        }
    },
    {
        "id": 10,
        "titulo": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "precio": 109,
        "descripcion": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "categoria": "electronica",
        "imagen": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 470
        }
    },
    {
        "id": 11,
        "titulo": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "precio": 109,
        "descripcion": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "categoria": "electronica",
        "imagen": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 12,
        "titulo": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "precio": 114,
        "descripcion": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "categoria": "electronica",
        "imagen": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    }
]


const error = "hubo un error"

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve(items)
            } else {
                reject("No se pudieron obtener los productos")
            }
        }, 500)
    })
}

export const getProductoPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve(items.find(e => e.id.toString() == id))
            } else {
                reject("No se pudo obtener el producto")
            }
        }, 500)
    })
}