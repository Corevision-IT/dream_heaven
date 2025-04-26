# 🏡 Property Renting Website

A full-stack web application for property rentals, similar to Airbnb.  
Built using **React.js** for the frontend, **Node.js** for the backend, and **MongoDB** as the database.

## 🚀 Features

- User Authentication (Signup/Login)
- Property Listing by Hosts
- Property Browsing and Searching by Renters
- Booking System
- Responsive UI for all devices
- Secure API integration between frontend and backend
- Dashboard for Hosts to manage listings

## 🛠 Tech Stack

- **Frontend:** React.js, Axios, TailwindCSS / Bootstrap (mention what you used)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens) (if used)
- **Deployment:** (optional, if you hosted it somewhere — e.g., Vercel, Netlify, Render, etc.)

## 📂 Project Structure

```bash
├── client/           # Frontend React app
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
|   |   |__styles
│   │   └── App.js
│   │   └── App.css
│   │   └── data.js
│   │   └── index.js
├── server/           # Backend Node.js app
│   ├── models/
│   ├── public/
│   ├── routes/
│   ├── middleware/
│   └── index.js
├── README.md
├── package.json
```

## ⚙️ Installation and Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. **Navigate to the project directories**

```bash
cd client
npm install
cd ../server
npm install
```

3. **Set up environment variables**

Create a `.env` file inside `server/` and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4. **Run the development servers**

In two separate terminals:

```bash
# For frontend
cd client
npm start
```

```bash
# For backend
cd server
npm run dev
```

## 📸 Screenshot


## 🙌 Acknowledgements

- Inspired by [Airbnb](https://www.airbnb.com/)
- Thanks to open-source community contributors

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
