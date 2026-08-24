import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-xs font-sans tracking-widest uppercase text-[#A3998E]">
        <li>
          <Link to="/" className="hover:text-[#C6A66B] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-3 h-3 text-[#C6A66B]/50" />
            {item.link ? (
              <Link to={item.link} className="hover:text-[#C6A66B] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#C6A66B] font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
