# **App Name**: TruScan POS

## Core Features:

- Dashboard Hub: Implement a dashboard for easy navigation and key metrics overview, with a welcome message. The welcome message can be customized by an admin.
- In-Store Kiosk: Enable in-store kiosk mode with ID scanning and barcode scanning for product lookup and information display.
- Secure Authentication: Secure employee login using Firebase Authentication to control access to sensitive data and functionalities.
- Products Page: Create a Products page for inventory management, including SKU, description, quantity, category, and store location.
- Customers Page: Develop a Customers page with customer profiles and purchase history.
- Payments Page: Integrate Square API for processing payments, with purchase data stored in Firebase.
- Employee Management Page: Build an Employee Management page accessible via Firebase Authentication.
- Profile Page: Design a Profile page for user information and app session management.
- Settings Page: Implement a Settings page with a Light/Dark mode toggle and app preferences.
- Firebase Firestore Integration: Create and connect Firebase Firestore collections: products, customers, employees, transactions.
- Collapsible Navigation Bar: Design a collapsible navigation bar that appears on all pages except Dashboard and In-store Kiosk.
- Sample Data Population: Add sample data (16 inventory items across 5 categories).
- Kiosk Functionality: Enable barcode scanning & ID verification on the In-store Kiosk page.

## Style Guidelines:

- Primary color: Emerald green (#50C878) to convey freshness and natural products.
- Secondary color: Light gray (#F0F0F0) for backgrounds and neutral elements.
- Accent: Burnt orange (#CC6633) for buttons and interactive elements to draw attention.
- Use a clean, modern layout with clear sections for different functionalities.
- Consistent and recognizable icons to represent different product categories and actions.
- Subtle transitions and animations for a smooth and engaging user experience.

## Original User Request:
🚀 Build a Multifaceted POS Web App for TruFarms Dispensary: TruPOS 2.0
📍 Location: Rochester, MN | Launch: 2025

🔧 Core Requirements:
Create a fully functional POS application hosted on Firebase, intended for use on iPads, desktops, and personal devices in a cannabis dispensary setting. This app must connect to Firebase-hosted real-time databases for managing products, customers, employees, and transactions.

🧩 App Structure:
Create 8 pages total:
6 Main Pages:

Dashboard (Landing Page) – Welcome message + navigation hub.

Products Page – View/manage all inventory items (with SKU, name, description, quantity, and category).

Customers Page – View/manage customer records (name, number, email, and purchase history).

Payments Page – Integrate with Square for processing and logging all transactions (use Square APIs).

In-Store Kiosk Page – Customer-facing mode (ID scan required to proceed), barcode scanning for products, shows product info & store location (ex: “aisle 6”), with a back button to Dashboard instead of the main nav.

Employee Management Page – View/manage employee records (name, role, username/password for access control).

2 Secondary Pages: 7. Profile Page – User info and app session management. 8. Settings Page – Light/Dark mode toggle and app preferences.

🗃️ Firebase Databases:
Create and link the following Cloud Firestore collections:

products – SKU, name, description, quantity, price, category, store location.

customers – Name, phone number, email, purchase history (linked to transactions).

employees – Name, role, username, password (hashed), access level.

transactions – Date/time, items purchased, total price, payment status, customer ref, Square transaction ID.

Use fake/mock data where applicable.

📱 Features:
ID scanning required before accessing the in-store kiosk.

Collapsible navigation bar (shown on all pages except Dashboard & In-store Kiosk, which use custom navigation).

Subtle animations (fade, pop, collapse) for polished UX.

Display 16 faux inventory items in 5 categories:

Cannabis Flower (4)

THC Oil (3)

THC Edibles (3)

CBD Oils (3)

CBD Edibles (3)

🧠 AI Assistance Needs:
Build a beautiful and functional UI with clean CSS and responsive design.

Use Firebase Authentication for employee login and secured access.

Use Firebase Firestore for all data storage.

Integrate with Square APIs for transactions.

Set up Firebase Hosting to deploy the app for browser access.

🏷️ App Name:
TruPOS 2.0 by TruFarms
  