"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.addMovie = exports.searchMovies = exports.getMovies = void 0;
const movie_1 = __importDefault(require("../models/movie"));
const getMovies = async (req, res) => {
    try {
        const movies = await movie_1.default.find();
        res.status(200).json(movies);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getMovies = getMovies;
const searchMovies = async (req, res) => {
    try {
        const { q } = req.query;
        const movies = await movie_1.default.find({
            $or: [
                { title: { $regex: q, $options: 'i' } },
                { genre: { $regex: q, $options: 'i' } }
            ]
        });
        res.status(200).json(movies);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.searchMovies = searchMovies;
const addMovie = async (req, res) => {
    try {
        const { title, genre, rating, streamingLink } = req.body;
        const newMovie = new movie_1.default({ title, genre, rating, streamingLink });
        await newMovie.save();
        res.status(201).json(newMovie);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.addMovie = addMovie;
const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedMovie = await movie_1.default.findByIdAndUpdate(id, updates, { new: true });
        res.status(200).json(updatedMovie);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateMovie = updateMovie;
const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        let dm = await movie_1.default.findByIdAndDelete(id);
        res.status(204).json(dm);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteMovie = deleteMovie;
