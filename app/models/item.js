const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  upc: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  ads: {
    type: Number,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

itemSchema.set('toObject', {virtuals: true})

itemSchema.virtual('needsReplenishment?').get(function () {
  if (this.quantity < 2 * this.ads) {
    return 'Order'
  } else {
    return ''
  }
})

module.exports = mongoose.model('Item', itemSchema)
