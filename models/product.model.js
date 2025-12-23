import mongoose from 'mongoose';

// 1) we are creating schema using the mongoose.
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a product name'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Please add a product price'],
      default: 0,
    },
    description: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      enum: ['Electronics', 'Books', 'Clothing', 'Food', 'Accessories', 'Other'],
      default: 'Other',
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields automatically
  }
);

// 2) we are creating model using the schema.
// Table name => [ProductTable]
const Product = mongoose.model('ProductTable', productSchema);

export default Product;
