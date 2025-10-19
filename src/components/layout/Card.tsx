import React from 'react'

interface CardProps{
    title ?: string;
    description ?: string;
    children ?: React.ReactNode;
    className ?: string;
    buttonLabel ?: string;
    onActionClick ?: ()=> void;
}

function Card({title, description, children, className = "", buttonLabel, onActionClick}: CardProps) {
  return (
    <div
        className={`bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200 ${className}`}
    >
        {(title || description) && (
            <div className="bg-amber-50 px-4 py-3 rounded-lg mb-4 -mt-4 -mx-4 flex items-center justify-between">
              <div>
                {title && (
                  <h3 className="text-base font-semibold text-gray-800 mb-0.5">{title}</h3>
                )}
                {description && (
                  <p className="text-xs text-gray-500">{description}</p>
                )}
              </div>

              {/* 👇 Right-side action button */}
              {buttonLabel && (
                <button
                  onClick={onActionClick}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  {buttonLabel}
                </button>
              )}
            </div>
        )}

        {children && (
            <div className='text-sm text-gray-600'>{children}</div>
        )}
    </div>
  )
}

export default Card