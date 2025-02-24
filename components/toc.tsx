"use client";

import React, { useState } from 'react';

export const TableOfContents = ({ headings }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleTOC = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="toc-container" style={{ 
      margin: '1.5rem 0', 
      border: '1px solid #e2e8f0', 
      borderRadius: '0.375rem',
      overflow: 'hidden'
    }}>
      <button 
        onClick={toggleTOC}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          backgroundColor: '#f8fafc',
          border: 'none',
          textAlign: 'left',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span>Table of Contents</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div style={{ padding: '1rem' }}>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            {headings.map((heading) => (
              <li 
                key={heading.id} 
                style={{ 
                  marginBottom: '0.5rem',
                  paddingLeft: `${(heading.depth - 1) * 1.5}rem` 
                }}
              >
                <a 
                  href={`#${heading.id}`} 
                  style={{ 
                    color: '#3182ce',
                    textDecoration: 'none'
                  }}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};