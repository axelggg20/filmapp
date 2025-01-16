import React from 'react';
import { MOVIE_CATEGORIES } from './constants';

interface CategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex gap-4 p-4 overflow-x-auto">
      {MOVIE_CATEGORIES.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full transition-colors duration-200 ${
            category === selectedCategory
              ? 'bg-blue-500 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;