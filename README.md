# Paradise Nursery Shopping Application

## Project Overview
Paradise Nursery is a dynamic e-commerce web application built with React that allows users to browse and purchase plants from an online plant shop.

## Project Name
**Paradise Nursery** - Your destination for beautiful, healthy plants and expert gardening advice.

## Features

### 1. Landing Page
- Beautiful hero section with Paradise Nursery branding
- "Get Started" button to navigate to the product listing
- Gradient background with a nature theme

### 2. Product Listing
- Display of 18 unique houseplants organized into 3 categories:
  - **Succulents**: Aloe Vera, Jade Plant, Echeveria, String of Pearls, Cactus Mix, Sedum
  - **Tropical Plants**: Monstera Deliciosa, Fiddle Leaf Fig, Bird of Paradise, Hibiscus, Anthurium, Bougainvillea
  - **Flowering Plants**: Orchid, Rose, Tulip, Peony, Sunflower, Begonia
- Each plant displays:
  - Thumbnail image
  - Plant name
  - Price
  - "Add to Cart" button that disables after adding

### 3. Shopping Cart
- Display all items added to cart
- Show total cart amount and total cost for each plant
- Display for each item:
  - Thumbnail image
  - Plant name
  - Unit price
  - Total price for quantity
- Quantity control buttons (increase/decrease)
- Delete button for each item
- "Continue Shopping" button to return to product listing
- "Checkout" button (Coming Soon)

### 4. Navigation Bar
- Available on all pages
- Links to: Home, Plants, About Us, and Cart
- Cart icon with dynamic item count badge

### 5. About Us Page
- Company story and mission statement
- Reasons to choose Paradise Nursery
- Customer commitment and sustainability practices

## Technology Stack
- **React** 18.x - UI library
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **CSS3** - Responsive styling

## Project Structure
```
src/
├── redux/
│   ├── CartSlice.jsx
│   └── store.js
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── LandingPage.jsx
│   ├── ProductList.jsx
│   ├── CartSlice.jsx
│   └── AboutUs.jsx
├── App.jsx
├── App.css
└── index.js
```

## Installation & Setup
```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## File Descriptions

### CartSlice.jsx
Redux slice implementing cart management with reducers for:
- Adding items to cart
- Removing items
- Updating quantities
- Calculating totals

### App.jsx
Main application component with React Router setup for navigation between pages

### App.css
Comprehensive styling including:
- Landing page with green gradient background
- Product grid layout
- Shopping cart page
- Responsive design for mobile devices

### ProductList.jsx
Product listing page displaying 18 plants in 3 categories with add-to-cart functionality

### CartSlice.jsx
Shopping cart interface with item management and checkout placeholder

### AboutUs.jsx
Company information and mission statement page

## License
Educational project for demonstrating React and Redux e-commerce skills.
