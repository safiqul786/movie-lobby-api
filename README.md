# **Movie Lobby API**

This is a TypeScript-based backend API for managing a movie lobby for OTT applications. It provides endpoints for listing, searching, adding, updating, and deleting movies. The API is built with **Node.js**, **Express**, **MongoDB**, and follows RESTful principles.

---

## **Features**

- List all movies in the lobby
- Search movies by title or genre
- Add new movies (requires admin role)
- Update existing movies (requires admin role)
- Delete movies (requires admin role)
- Basic authentication and role-based authorization
- Caching to improve performance

---

## **Prerequisites**

Ensure the following software is installed on your system:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (local or cloud-based)

---

## **Project Setup**

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd movie-lobby-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the project root and add the following:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/movieLobbyDB
   JWT_SECRET=supersecret
   ```

4. **Compile the TypeScript code**:
   ```bash
   npx tsc
   ```

5. **Run the application**:
   ```bash
   npm start
   ```

The server will start at `http://localhost:5000`.

---

## **API Documentation**

### **Endpoints**

#### 1. **List all movies**
- **URL**: `GET /movies`
- **Description**: Retrieves all movies in the lobby.
- **Response**:
  ```json
  [
    {
      "_id": "634c9b1234567890abcd1234",
      "title": "Inception",
      "genre": "Sci-Fi",
      "rating": 9,
      "streamingLink": "https://example.com/inception"
    }
  ]
  ```

#### 2. **Search movies**
- **URL**: `GET /search?q={query}`
- **Description**: Search movies by title or genre.
- **Response**:
  ```json
  [
    {
      "_id": "634c9b1234567890abcd1234",
      "title": "Inception",
      "genre": "Sci-Fi",
      "rating": 9,
      "streamingLink": "https://example.com/inception"
    }
  ]
  ```

#### 3. **Add a new movie**
- **URL**: `POST /movies`
- **Description**: Add a new movie (Admin only).
- **Request**:
  ```json
  {
    "title": "Inception",
    "genre": "Sci-Fi",
    "rating": 9,
    "streamingLink": "https://example.com/inception"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Movie added successfully"
  }
  ```

#### 4. **Update a movie**
- **URL**: `PUT /movies/:id`
- **Description**: Update movie details (Admin only).
- **Request**:
  ```json
  {
    "title": "Inception Updated"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Movie updated successfully"
  }
  ```

#### 5. **Delete a movie**
- **URL**: `DELETE /movies/:id`
- **Description**: Delete a movie (Admin only).
- **Response**:
  ```json
  {
    "message": "Movie deleted successfully"
  }
  ```

---


## **Code Quality**

- Linting is configured with **ESLint**.
- Run lint checks with:
  ```bash
  npx eslint .
  ```


