const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Event title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    date: {
      type: Date,
      required: [true, 'Event date is required'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
    },
    image: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      enum: ['workshop', 'hackathon', 'seminar', 'competition', 'networking', 'other'],
      default: 'other',
    },
    registrationLink: {
      type: String,
      default: '',
    },
    isUpcoming: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
