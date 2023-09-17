const asyncHandler = require("express-async-handler");
const bookModel = require("../model/bookModel");

const getBook = asyncHandler(async (req, res) => {
  const books = await bookModel.find({ user_id: req.user.id });
  res.status(200).json(books);
});

const createBook = asyncHandler(async (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400);
    throw new Error("Name of the book is mandatory!");
  }
  const book = await bookModel.create({
    title,
    user_id: req.user.id,
  });

  res.status(201).json(book);
});

const updateBook = asyncHandler(async (req, res) => {
  const book = await bookModel.findById(req.params.id);

  if (!book) {
    res.status(404);
    throw new Error("Book not Found!");
  }

  if (book.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User doesn't have permission!");
  }
  const updatedBook = await bookModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedBook);
});

const deleteBook = asyncHandler(async (req, res) => {
  const book = await bookModel.findById(req.params.id);

  if (!book) {
    res.status(404);
    throw new Error("Book not found!");
  }

  if (book.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User doesn't have permission!");
  }

  await bookModel.deleteOne({ _id: req.params.id });
  res.status(200).json(book);
});

module.exports = { getBook, createBook, updateBook, deleteBook };
