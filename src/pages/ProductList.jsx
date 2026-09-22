import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedItems, setAddedItems] = useState(new Set());

  const plants = {
    'Succulents': [
      {
        id: 1,
        name: 'Aloe Vera',
        price: 12.99,
        image: 'https://hips.hearstapps.com/hmg-prod/images/aloe-vera-plant-cut-leaves-66e6e07d093d7.jpg?resize=980:*',
        description: 'Low-maintenance succulent with healing properties'
      },
      {
        id: 2,
        name: 'Jade Plant',
        price: 15.99,
        image: 'https://i0.wp.com/www.gardening4joy.com/wp-content/uploads/2022/08/Jade-Main-2.jpg?w=1500&ssl=1',
        description: 'Hardy and beautiful, perfect for beginners'
      },
      {
        id: 3,
        name: 'Echeveria',
        price: 10.99,
        image: 'https://www.avantgardensne.com/wp-content/uploads/2024/12/echcaribblue-768x768.jpg',
        description: 'Stunning rosette-shaped succulent'
      },
      {
        id: 4,
        name: 'String of Pearls',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80',
        description: 'Elegant trailing succulent'
      },
      {
        id: 5,
        name: 'Cactus Mix',
        price: 9.99,
        image: 'https://www.thespruce.com/thmb/7U23PyPAeicGaXFfv5m3XFLe0eQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/angel-wings-cactus-ab159de1fa074df592d01d4d6799d7c9.jpg',
        description: 'Diverse collection of cactus species'
      },
      {
        id: 6,
        name: 'Sedum',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80',
        description: 'Colorful and easy to grow'
      }
    ],
    'Tropical Plants': [
      {
        id: 7,
        name: 'Monstera Deliciosa',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80',
        description: 'Large, trendy plant with unique leaves'
      },
      {
        id: 8,
        name: 'Fiddle Leaf Fig',
        price: 34.99,
        image: 'https://i0.wp.com/www.gardening4joy.com/wp-content/uploads/2024/02/Fiddle-Leaf-Fig-Main2.jpg?w=1500&ssl=1',
        description: 'Elegant statement plant'
      },
      {
        id: 9,
        name: 'Bird of Paradise',
        price: 27.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwU9HuUl3xC8qEf57_VGSJTMNSpguXMv--S1aa-v1fO_1PObet8x8ZH-E&s=10',
        description: 'Vibrant tropical beauty'
      },
      {
        id: 10,
        name: 'Hibiscus',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=800&q=80',
        description: 'Colorful flowering tropical plant'
      },
      {
        id: 11,
        name: 'Anthurium',
        price: 22.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eDQXpcQrqiHRhH4XriKYBk9LxG_gCTvxcxHB8f6m56B87hGY0kC8AzU&s=10',
        description: 'Exotic with long-lasting flowers'
      },
      {
        id: 12,
        name: 'Bougainvillea',
        price: 25.99,
        image: 'https://seedbeej.pk/wp-content/uploads/2025/09/8-2.webp',
        description: 'Vibrant and robust tropical plant'
      }
    ],
    'Flowering Plants': [
      {
        id: 13,
        name: 'Orchid',
        price: 31.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5U0KaRfFhlEzqv8FEE4xH7wGFKNuLzSV6jg2D2N5jhAU0tyUNTb33X7O&s=10',
        description: 'Elegant and exotic flowering plant'
      },
      {
        id: 14,
        name: 'Rose',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=800&q=80',
        description: 'Classic beauty with fragrant blooms'
      },
      {
        id: 15,
        name: 'Tulip',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=800&q=80',
        description: 'Colorful spring flowers'
      },
      {
        id: 16,
        name: 'Peony',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80',
        description: 'Lush and romantic flowering plant'
      },
      {
        id: 17,
        name: 'Sunflower',
        price: 14.99,
        image: 'https://images.myglobalflowers.com/aff31852-7d06-4979-9d85-d4ef6e535200/original',
        description: 'Bright and cheerful tall flowers'
      },
      {
        id: 18,
        name: 'Begonia',
        price: 17.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtv5lo7uUHO8etEet5Pl3_OmM-XF2c23i0BiwFR8Rcrp7k74bn_V1VcM4&s=10',
        description: 'Diverse colorful flowering plant'
      }
    ]
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image
    }));
    setAddedItems(prev => new Set([...prev, plant.id]));
  };

  const isItemAdded = (id) => {
    return addedItems.has(id) || cartItems.some(item => item.id === id);
  };

  return (
    <div className="product-listing">
      <div className="container">
        {Object.entries(plants).map(([category, plantList]) => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="products-grid">
              {plantList.map(plant => (
                <div key={plant.id} className="product-card">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-price">${plant.price}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isItemAdded(plant.id)}
                    >
                      {isItemAdded(plant.id) ? 'Added ✓' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
