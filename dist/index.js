"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const movieRoutes_1 = __importDefault(require("./routes/movieRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', movieRoutes_1.default);
app.listen(3000, () => {
    mongoose_1.default
        .connect(process.env.MONGO_URI)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('Failed to connect to MongoDB', error));
    console.log("app is running on port: 3000");
});
