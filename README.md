
# Food Delivery 

Food Delivery is a full-stack web application built using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to browse menus, place food orders, and track their deliveries in real-time. The project simulates the real-world functionalities of a food delivery service, making it user-friendly for both customers and restaurant administrators.

# Features 

User Authentication: Secure sign-up and login functionality for users.

Add to Cart and Checkout: Users can add items to their cart and proceed with checkout.

Order Tracking: Real-time order tracking after placing an order.

Admin Panel: Allows restaurant admins to manage menus, view orders, and update order status.

Responsive Design: Optimized for both desktop and mobile views.

# Tech Stack

Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Payment Integration: Stripe
    



## Installation

1. Clone the repository


```bash
  git clone https://github.com/Somesh-Karpate/Akasa_FoodDelivery
  cd Akasa_FoodDelivery
```
2. Setup Admin

```bash
    cd admin
```
Install dependencies :
```bash
    npm install
```
Run Admin :
```bash
    npm run dev 
```

3. Create .env file in backend directory 

backend/.env :
```bash
    JWT_SECRET = "random#secret"
    STRIPE_SECRET_KEY = <your secret key>
```
For stripe secret key go to : https://stripe.com/in

4. Setup database

Go to backend/config/db.js :
```bash
    mongoose.connect(<your mongodb atlas URI>)
```

a. For that go to https://www.mongodb.com/products/platform/atlas-database and create your account.

b. Create Cluster - free version, your cluster will be created, after you have click on connect.

c. Connect your application -> Drivers -> And Copy -> the connection string for your application and paste it in db.js

if any doubt you can watch : https://www.youtube.com/watch?v=SMXbGrKe5gM


5. Setup your backend

```bash
    cd backend
```
Install dependencies :
```bash
    npm install
```
Run backend :
```bash
    nodemon server.js 
```

6. Setup your frontend

```bash
    cd frontend
```
Install dependencies :
```bash
    npm install
```
Run frontend :
```bash
    npm run dev 
```

7. This steps will help you to run the whole project in your system.




    
## Additional Features
features which i would like to add.

- Optimized Cart: Improvements in the cart section to ensure smoother user experience, faster processing, and enhanced UI.
- User Food Recommendations: Personalized food recommendations based on users' order history.
- Enhanced Admin Panel: More detailed management features for restaurant admins, including analytics and reporting.
- User-Friendly Environment: Enhanced user interactions and a more intuitive interface to improve the overall experience for both customers and admins.

