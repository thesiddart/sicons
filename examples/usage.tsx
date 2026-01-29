import React from 'react';
import {
  AddBold,
  AddOutline,
  HeartBold,
  HeartOutline,
  HomeBold,
  HomeOutline,
  SearchNormalBold,
  SearchNormalOutline,
  SettingBold,
  SettingOutline,
} from 'sicons';

/**
 * Basic Usage Examples
 * 
 * This file demonstrates common usage patterns for sicons.
 */

// Example 1: Basic icon usage
export function BasicExample() {
  return (
    <div>
      <AddBold size={24} />
      <AddOutline size={24} />
    </div>
  );
}

// Example 2: Custom size and color
export function CustomizedExample() {
  return (
    <div>
      <HeartBold size={32} color="#ff0000" />
      <HeartOutline size={32} color="#ff0000" />
    </div>
  );
}

// Example 3: Using with CSS classes (e.g., Tailwind)
export function TailwindExample() {
  return (
    <div className="flex gap-4">
      <HomeBold className="w-6 h-6 text-blue-500" />
      <HomeOutline className="w-6 h-6 text-blue-500" />
    </div>
  );
}

// Example 4: Interactive button with icon
export function ButtonExample() {
  const [liked, setLiked] = React.useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="flex items-center gap-2 px-4 py-2 rounded"
    >
      {liked ? (
        <HeartBold size={20} color="#ff0000" />
      ) : (
        <HeartOutline size={20} color="#999" />
      )}
      <span>{liked ? 'Liked' : 'Like'}</span>
    </button>
  );
}

// Example 5: Icon list
export function IconListExample() {
  const menuItems = [
    { icon: HomeBold, label: 'Home' },
    { icon: SearchNormalBold, label: 'Search' },
    { icon: SettingBold, label: 'Settings' },
  ];

  return (
    <nav>
      {menuItems.map((item) => (
        <div key={item.label} className="flex items-center gap-3 p-3">
          <item.icon size={20} />
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
}

// Example 6: Responsive icon sizes
export function ResponsiveExample() {
  return (
    <div>
      {/* Mobile: 20px, Desktop: 24px */}
      <AddBold className="w-5 h-5 md:w-6 md:h-6" />
    </div>
  );
}

// Example 7: Icon with accessibility
export function AccessibleExample() {
  return (
    <button aria-label="Add new item">
      <AddBold size={24} aria-hidden="true" />
    </button>
  );
}

// Example 8: Styling with CSS modules
export function StyledExample() {
  return (
    <div style={{ color: '#3b82f6' }}>
      {/* This icon will inherit the color */}
      <AddBold size={24} />
    </div>
  );
}
