# 🐳 Docker Login App with Node.js & MongoDB

This is a simple login app built using **Node.js, Express, and MongoDB**, fully **Dockerized** with support for Mongo Express UI. The goal of this project was to learn and implement core Docker concepts by containerizing a full-stack application.

---

## ✅ What I Learned

Through this project, I explored and successfully implemented:

### 🐳 Docker Fundamentals
- Creating and managing **containers** and **images**
- Writing custom **Dockerfiles**
- Using essential **Docker commands** like `build`, `run`, `exec`, `ps`, `stop`, `rm`, `rmi`, `logs`, and more
- Understanding **port binding** (`-p 3002:3002`) and troubleshooting related issues
- Fixing common errors like:
  - "Port already in use"
  - "Cannot POST /route"
  - Image not found / pull access denied

### 🕸️ Docker Networking
- Creating custom Docker **networks**
- Connecting containers using internal Docker DNS (`mongo`, `mongo-express`, `nodeapp`)
- Ensuring the Node.js app connects to MongoDB using `mongodb://user:pass@mongo:27017` with `authSource=admin`

### 🗄️ MongoDB & Mongo Express
- Using official `mongo` and `mongo-express` Docker images
- Setting environment variables for Mongo root user and password
- Accessing Mongo Express at `localhost:3001` to view and manage data visually

### 📦 Docker Compose
- Writing a `docker-compose.yml` to run `nodeapp`, `mongo`, and `mongo-express` in one command
- Using `depends_on` and `networks` to manage container relationships

### 📂 Dockerizing Node App
- Writing a clean **Dockerfile** for the Express app
- Serving static HTML (login form)
- Connecting Express backend with MongoDB database in another container

### ☁️ DockerHub Deployment
- Tagging and pushing the final image to [DockerHub](https://hub.docker.com/)
- Learning naming conventions like `username/image:tag`

### 💾 Volumes & Persistence
- Learning about Docker **volumes** for data persistence
- Avoiding data loss when containers are removed or restarted

---

## 🚀 Getting Started

### 📁 Folder Structure

```

nodeapp/
├── server.js
├── index.html
├── Dockerfile
├── docker-compose.yml
├── public/
│   └── style.css
├── package.json
└── README.md

````

### 🧪 How to Run

#### Using Docker Compose:
```bash
docker-compose up --build
````

* Node.js app: [http://localhost:3002](http://localhost:3002)
* Mongo Express UI: [http://localhost:3001](http://localhost:3001)

---

## 📤 DockerHub

> The image is also pushed to DockerHub for quick reuse:
> 👉 [https://hub.docker.com/r/saadhaji/mynodeapp](https://hub.docker.com/r/saadhaji/mynodeapp)

---

## 📚 Technologies Used

* Node.js & Express
* MongoDB (official Docker image)
* Mongo Express
* Docker & Docker Compose

---

## 🙋‍♂️ Author

**Saad Haji**
💻 [GitHub](https://github.com/saadhaji2007)
🐳 DockerHub: [`saadhaji`](https://hub.docker.com/u/saadhaji)

---

Feel free to fork, star, and use this as a boilerplate for learning Docker or building simple containerized apps.

```


