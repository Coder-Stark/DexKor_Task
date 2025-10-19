import React from 'react'

interface CardProps{
    icon ?: React.ReactNode;
    title ?: string;
    children ?: React.ReactNode;
    className ?: string;
    buttonLabel ?: string;
    onActionClick ?: ()=> void;
    rightText ?: React.ReactNode;
}

function Card({title, children, className = "", buttonLabel, onActionClick, icon, rightText}: CardProps) {
  return (
    <div
        className={`bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200 ${className}`}
    >
        {(title || icon || rightText) && (
            <div className="px-4 py-3 rounded-lg mb-4 -mt-4 -mx-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Icon on the left */}
                {icon && (
                  <div className="flex items-center justify-center">
                    {icon}
                  </div>
                )}
                
                {/* Title */}
                {title && (
                  <h3 className="text-base font-semibold text-gray-800 mb-0.5">{title}</h3>
                )}
              </div>

              <div className="flex items-center gap-4">
                {/* Right-side text */}
                {rightText && (
                  <div>
                    {rightText}
                  </div>
                )}

                {/* Right-side action button */}
                {buttonLabel && (
                  <button
                    onClick={onActionClick}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    {buttonLabel}
                  </button>
                )}
              </div>
            </div>
        )}

        {children && (
            <div className='text-sm text-gray-600'>{children}</div>
        )}
    </div>
  )
}

export default Card
