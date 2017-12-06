# Kayak-Prototype
Team project for Enterprise Distributed Systems. This is a 3-tier application that implements the functions of Kayak for different travel services. 

# Goal
The goal is to build a Kayak web application which enables the user to search for Cars, Hotels and Flights and make a booking. Admin can add Flights, Cars and Hotels and also be able to delete the user and view the statistics.

# Purpose Of System:
Kayak Application is used to search for flights/cars/hotels and make a booking based on the options set by the user. The purpose of each module developed in this application is as follows:

## User Module:
Create a new user
|Delete the user account
|Change and update user information
|Display information about the user in profile section
|Search listing for different categories
|Filter Listings based on user search criteria
	a.Filter Hotels based on stars, price
	b.Filter Flights based on departure, arrival dates and price
	c.Filter cars based on car type, price
|Book a Hotel/Car or Flight
|Make Payment and view purchase summary
|View Past/Future Bookings
|Upload a profile picture and update profile picture

## Admin Module:
Only user with Admin credentials can view this module
|Stats Page - Consists of Graphs and statistics
|Manage Listings:
	A.Add a Listing
		a.Car
		b.Flight
		c.Hotel
	B.Update a listing
		a.Car
		b.Flight
        c.Hotel
|Manage Users
|Search Payment information based on date and months
|Mange Admin Profile
|Log out

#System Design:
|Kayak Application is built on top of the following:
|Node.js - Application Server
|Express.js - Node.js Web Framework
|MongoDb and MySQL - Database Storage
|Twitter Bootstrap and Material UI - UI Component & Layout Library
|Kafka – communication between frontend and backend- Distributed architecture
|Redis - SQL Caching


# Screenshots
1. Homepage
![homepage](https://user-images.githubusercontent.com/31905103/33640948-56285e0e-d9e8-11e7-9a05-c8145df2d7d8.PNG)

2. SignUp Page
![signuppage](https://user-images.githubusercontent.com/31905103/33640968-68ad6b6e-d9e8-11e7-8777-75afd5ac06ec.PNG)

3. Hotel Search
![hotel_search](https://user-images.githubusercontent.com/31905103/33640988-77335888-d9e8-11e7-9770-e988e86461e2.PNG)

4. Flight Search
![flight_search](https://user-images.githubusercontent.com/31905103/33640994-77c6688a-d9e8-11e7-881d-95bd4f71462f.PNG)

5. Car Search
![car_search](https://user-images.githubusercontent.com/31905103/33640993-77ad5c1e-d9e8-11e7-8c3f-db3494655dae.PNG)

6. Payment Page
![payment_page](https://user-images.githubusercontent.com/31905103/33640989-774df2ec-d9e8-11e7-8e73-5cc7b86d41f4.PNG)

7. Admin Page
![admin_page](https://user-images.githubusercontent.com/31905103/33640992-7795630c-d9e8-11e7-8cad-14e386d6a17f.PNG)

8. Adding Hotel
![adding_hotel](https://user-images.githubusercontent.com/31905103/33640991-777dff0a-d9e8-11e7-94c8-b9246f201814.PNG)

9. Statistics
![statistics](https://user-images.githubusercontent.com/31905103/33640990-77664360-d9e8-11e7-9d16-0ef8ff3357df.PNG)

