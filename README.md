Here is a professional and structured **README.md** file for your Pro-Bid project.

---

# 🚀 Pro-Bid: Auction & Claim Management System

Pro-Bid is a comprehensive **Auction Platform** where users can bid on items and winners can manage their claims. The project utilizes a modern **React.js** frontend interfaced with a **PHP (MySQL/MariaDB)** backend.

## 🛠 Tech Stack

* **Frontend:** React.js, Axios, React Router, Bootstrap/Custom CSS.
* **Backend:** Native PHP, MySQLi.
* **Database:** MariaDB (via XAMPP).

---

## 📊 Database Structure

The project uses a database named `auction_website`. Below is a breakdown of the core tables:

| Table Name | Description |
| --- | --- |
| **`tbl-claim`** | Tracks user item claims and delivery status. |
| **`tbl_bidding`** | Records all bids placed on active items. |
| **`tbl_items`** | Stores details of items available for auction. |
| **`tbl_user`** | Contains registered user profiles and authentication data. |
| **`tbl_winners`** | Maintains a record of auction winners. |
| **`categories`** | Organizes items into groups (e.g., Electronics, Vehicles). |
| **`tbl_wishlist`** | Stores items saved by users for later viewing. |

---

## 🚀 Key Features

### 1. Admin Dashboard

* **Claim Management:** View all user claims and update delivery statuses (e.g., Pending to Delivered).
* **Category Management:** Dynamically add, edit, or delete item categories.
* **User Oversight:** Monitor registered users and manage the list of auction winners.

### 2. User Experience

* **Real-time Bidding:** Place bids on desired items during active auction windows.
* **Claim Tracking:** View the status of won items and manage the checkout/claim process.

---

## 📂 Project Installation

### Backend (PHP)

1. Open **XAMPP Control Panel** and start `Apache` and `MySQL`.
2. Place the backend code in `C:\xampp\htdocs\auction_website\`.
3. Configure your database connection in `conection.php`:
```php
$con = mysqli_connect("localhost", "root", "", "auction_website");

```



### Frontend (React)

1. Navigate to your project directory in the terminal.
2. Install necessary dependencies:
```bash
npm install axios react-router-dom

```


3. Launch the application:
```bash
npm start

```



---

## 🛰 API Endpoints

* `GET /user/claimsdetails.php` — Fetches all claim records for the dashboard.
* `POST /user/claimStatus.php` — Updates the status of a claim (Requires: `id`, `status`).
* `DELETE /user/deleteClaim.php?id={id}` — Removes a specific claim from the record.

---

## 💡 Notes for Development

* **CORS Policy:** Ensure your PHP files include `header("Access-Control-Allow-Origin: *");` to allow the React app to communicate with the PHP server.
* **SQL Syntax:** Always wrap table names containing hyphens (like ``tbl-claim``) in backticks to avoid SQL syntax errors.

