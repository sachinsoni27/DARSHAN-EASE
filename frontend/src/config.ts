// Frontend configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const apiEndpoints = {
  temples: '/temples',
  food: '/food',
  hotels: '/hotels',
  seed: '/seed',
};

// Error messages
export const errorMessages = {
  connectionError: 'Unable to connect to server. Please try again.',
  networkError: 'Network error occurred. Please check your internet connection.',
  validationError: 'Please check your input and try again.',
  serverError: 'Server error occurred. Please try again later.',
};

// Success messages
export const successMessages = {
  dataSaved: 'Data saved successfully!',
  dataDeleted: 'Data deleted successfully!',
  seedComplete: 'Database seeding completed successfully!',
};
