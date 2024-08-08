Here’s the updated README file with the specific environment variables and repository links included:

---

# Real Estate Community Website

Welcome to the **Real Estate Community Website**! This platform connects agents, buyers, and admins, providing a seamless and efficient real estate experience.

### 🌐 **Live URL**

Explore our platform at: [Real Estate Community](https://real-estate-community.web.app/)

### 📋 **Project Overview**

The Real Estate Community Website is designed to enhance real estate transactions with various features tailored to different user roles. The platform supports efficient property management and transactions with modern technology.

### ✨ **Features**

- **Role-Based Access:**

  - **Agents:** List, manage, and sell properties.
  - **Users:** Browse, review, and purchase properties.
  - **Admins:** Oversee and maintain the website.

- **Secure Payments:** Integrated with Stripe for smooth and secure transactions.

- **Efficient Loading:** Utilizes React Skeleton for a fast, responsive experience.

- **State Management:** Implemented with Redux for robust state handling.

- **Authentication:** Firebase for secure login and signup.

- **Property Reviews:** Users can submit and view detailed property reviews.

- **Advanced Filtering & Sorting:** Comprehensive filtering and sorting by price.

- **Custom Dashboards:** Tailored dashboards for different user roles.

- **Interactive Maps:** View property locations with integrated mapping tools.

- **Real-Time Notifications:** Receive updates and alerts in real-time.

- **Virtual Tours:** Experience properties with immersive virtual tours.

- **Search Optimization:** Advanced search functionality for accurate property searches.

- **Dynamic Content:** Regular updates and featured properties highlighted on the homepage.

### 🛠️ **Technologies Used**

**Front-End:**

- **React:** For building dynamic user interfaces.
- **Tailwind CSS:** For modern and responsive design.
- **Redux:** For state management.
- **React Skeleton:** For efficient loading.
- **Firebase:** For authentication and real-time data management.
- **Vite:** For fast and optimized builds.

**Back-End:**

- **Node.js with Express:** For server-side operations.
- **MongoDB:** A flexible NoSQL database.
- **Mongoose:** For MongoDB object modeling.
- **TypeScript:** For type-safe development.
- **JWT:** For secure authentication and authorization.

### 🚀 **Setup Instructions**

#### 1. **Clone the Repositories**

**Front-End:**

```bash
git clone https://github.com/ibnabdullah1/real-Estate-Platform-client.git
cd real-Estate-Platform-client
```

**Back-End:**

```bash
git clone https://github.com/ibnabdullah1/real-Estate-Platform-server.git
cd real-Estate-Platform-server
```

#### 2. **Install Dependencies**

**Front-End:**

```bash
cd real-Estate-Platform-client
npm install
```

**Back-End:**

```bash
cd real-Estate-Platform-server
npm install
```

#### 3. **Configure Environment Variables**

Create `.env` files in the respective directories with the following variables:

**Front-End (`client/.env`):**

```
VITE_apiKey= your_api_key
VITE_authDomain= your_auth_domain
VITE_projectId= your_project_identifier
VITE_storageBucket= your_storage_bucket
VITE_messagingSenderId= your_messaging_sender
VITE_appId= your_app_identifier
VITE_measurementId= your_measurement_identifier
VITE_API_URL= your_API_URL
VITE_IMGBB_API_KEY= your_IMGBB_API_key
VITE_Payment_Gateway_PK= your_PayPal_payment_gateway
```

**Back-End (`server/.env`):**

```
DB_USER= your database_name
DB_PASS= your database_password
ACCESS_TOKEN_SECRET= your_secret_key
STRIPE_TEST_SECRET_KEY= your_stripe_secret_key
```

#### 4. **Start the Application**

**Front-End:**

```bash
cd real-Estate-Platform-client
npm run dev
```

**Back-End:**

```bash
cd real-Estate-Platform-server
npm run start
```

#### 📜**Usage**

1. **Visit the Live URL:** [Real Estate Community](https://real-estate-community.web.app/)
2. **Create an Account:** Sign up as a user or agent, or log in as an admin.
3. **Explore Properties:** Use the search and filter options to find properties.
4. **Manage Listings:** Agents can manage their property listings from their dashboard.
5. **Make Transactions:** Purchase properties securely with Stripe.

### 🤝 **Contributing**

We welcome contributions to enhance the project! For bug reports or feature requests, please open an issue on the [GitHub repository](https://github.com/ibnabdullah1/real-Estate-Platform-client) or [server repository](https://github.com/ibnabdullah1/real-Estate-Platform-server). Pull requests are also welcome!

### 📬 **Contact**

For any inquiries or feedback, please contact us at [arfathossen541@gmail.com](mailto:arfathossen541@gmail.com).

---

Thank you for exploring the Real Estate Community Website! We appreciate your support and feedback.
