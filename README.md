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
