import React from 'react';
import { motion } from 'framer-motion';

const LoadingSkeletonTemple: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
    <div className="p-6 space-y-4">
      <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
      <div className="flex gap-2 mt-4">
        <div className="h-10 bg-gray-200 rounded animate-pulse flex-1"></div>
        <div className="h-10 bg-gray-200 rounded animate-pulse flex-1"></div>
      </div>
    </div>
  </motion.div>
);

export const LoadingGrid: React.FC<{ count?: number }> = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <LoadingSkeletonTemple key={i} />
    ))}
  </div>
);

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center py-12">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      className="w-12 h-12 border-4 border-saffron border-t-transparent rounded-full"
    />
  </div>
);

export default LoadingSkeletonTemple;
