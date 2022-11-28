# Rare Books - An online old book store(buy & sell)

### Live website : https://used-book-store-90b6b.web.app/
### server: https://used-book-store-server.vercel.app/

### Admin Mail: admin@books.com
### Admin Password: 123456

## Some of the important feature of this project

* This is an old and rare books store. A user can buy and sell his/her old books.
* Dashboard implemented. Users can sign up as a buyer or sellers. Admin is set manually. Admin email and password are mentioned above.
* Admin can see all sellers, all buyers, and reported item routes. A buyer can see my product route and a seller can see my products and add product routes.
* Admin can verify a seller and after verification a blue is will be visible. Admin can delete any user or any books which are reported.
* A seller can add a book, advertise and delete books he/she wanted.
* A buyer can see the booked product and he/she can report to the admin if he/she thinks the seller is a scam, etc.
* User authentication is implemented for both email and google users, with firebase authentication.
* User authorization is implemented for every role with JWT(JSON web token).
* Payment gateway implemented with stripe.
* After payment is successful seller will see the product status is "SOLD" instead of Available.
* Book will be deleted from both the advertised section and the category section after the payment is successful.
* 404 router added normal routes and for dynamic routes, 404 pages were added as well as an error element.
* Private routing, Dynamic routing, admin route, seller route, and buyer route applied.
* Custom hook created and used for JWT verification.

## Technology used in this project
* React Js(hooks)
* Express Js
* MongoDB
* Tailwind CSS
* React query
* React router
* React icon
* Hot toast
* Stripe
* Axios


