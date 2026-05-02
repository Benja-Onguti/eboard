import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
import { cn } from '@/utils/cn';
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text for the input */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Success message to display */
  success?: string;
  /** Helper text to display below input */
  helper?: string;
  /** Whether the input is in a loading state */
  isLoading?: boolean;
  /** Whether to show a clear button */
  clearable?: boolean;
  /** Left icon element */
  leftIcon?: React.ReactNode;
  /** Right icon element */
  rightIcon?: React.ReactNode;
  /** Container class name */
  containerClassName?: string;
  /** Label class name */
  labelClassName?: string;
  /** Whether to show character count */
  showCount?: boolean;
  /** Maximum length for character count */
  maxLength?: number;
  /** Variant of the input */
  variant?: 'default' | 'filled' | 'outline' | 'ghost';
  /** Size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the input is a password field */
  isPassword?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = '',
      label,
      error,
      success,
      helper,
      isLoading = false,
      clearable = false,
      leftIcon,
      rightIcon,
      containerClassName = '',
      labelClassName = '',
      showCount = false,
      maxLength,
      variant = 'default',
      size = 'md',
      isPassword = false,
      onClear,
      disabled,
      required,
      id,
      value,
      defaultValue,
      onChange,
      type = 'text',
      placeholder,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputValue, setInputValue] = useState(value || defaultValue || '');

    // Generate unique ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    // Handle password visibility toggle
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    // Handle clear button click
    const handleClear = () => {
      setInputValue('');
      onClear?.();
      // Trigger onChange event with empty value
      const event = new Event('input', { bubbles: true });
      if (ref && 'current' in ref && ref.current) {
        ref.current.value = '';
        ref.current.dispatchEvent(event);
      }
    };

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onChange?.(e);
    };

    // Determine input type (for password fields)
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    // Size classes
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg',
    };

    // Variant classes
    const variantClasses = {
      default: 'bg-white border-gray-300 focus:border-primary-500 focus:ring-primary-500',
      filled:
        'bg-gray-100 border-transparent focus:bg-white focus:border-primary-500 focus:ring-primary-500',
      outline:
        'bg-transparent border-2 border-gray-300 focus:border-primary-500 focus:ring-primary-500',
      ghost:
        'bg-transparent border-transparent focus:bg-gray-50 focus:border-primary-500 focus:ring-primary-500',
    };

    // State classes
    const stateClasses = {
      error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      success: 'border-green-500 focus:border-green-500 focus:ring-green-500',
      disabled: 'bg-gray-100 cursor-not-allowed opacity-60',
      loading: 'animate-pulse',
    };

    // Icon spacing classes
    const leftIconClasses = {
      sm: 'pl-9',
      md: 'pl-10',
      lg: 'pl-12',
    };

    const rightIconClasses = {
      sm: 'pr-9',
      md: 'pr-10',
      lg: 'pr-12',
    };

    return (
      <div className={cn('w-full', containerClassName)}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium text-gray-700 mb-1',
              disabled && 'opacity-50',
              error && 'text-red-600',
              labelClassName
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div
              className={cn(
                'absolute left-0 top-0 h-full flex items-center justify-center text-gray-400 pointer-events-none',
                size === 'sm' && 'pl-3',
                size === 'md' && 'pl-4',
                size === 'lg' && 'pl-5'
              )}
            >
              {leftIcon}
            </div>
          )}

          {/* Input Element */}
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            disabled={disabled || isLoading}
            required={required}
            placeholder={placeholder}
            maxLength={maxLength}
            className={cn(
              // Base styles
              'block w-full rounded-lg border transition-all duration-200',
              'placeholder:text-gray-400',
              'focus:outline-none focus:ring-2 focus:ring-offset-2',
              'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60',

              // Size
              sizeClasses[size],

              // Variant
              variantClasses[variant],

              // Icons spacing
              leftIcon && leftIconClasses[size],
              (rightIcon || clearable || isPassword || (success && !error)) &&
                rightIconClasses[size],

              // Error state
              error && stateClasses.error,

              // Success state
              success && !error && stateClasses.success,

              // Custom classes
              className
            )}
            aria-invalid={!!error}
            aria-describedby={
              error
                ? `${inputId}-error`
                : success
                  ? `${inputId}-success`
                  : helper
                    ? `${inputId}-helper`
                    : undefined
            }
            {...props}
          />

          {/* Right side elements */}
          <div className="absolute right-0 top-0 h-full flex items-center space-x-1 pr-3">
            {/* Success Icon */}
            {success && !error && !isPassword && !clearable && (
              <CheckCircle className="w-5 h-5 text-green-500" />
            )}

            {/* Error Icon */}
            {error && <AlertCircle className="w-5 h-5 text-red-500" />}

            {/* Clear Button */}
            {clearable && inputValue && !disabled && !isLoading && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Clear input"
              >
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}

            {/* Password Toggle */}
            {isPassword && !disabled && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-400" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-400" />
                )}
              </button>
            )}

            {/* Right Icon (if provided and no other elements) */}
            {rightIcon && !clearable && !isPassword && !success && !error && (
              <div className="text-gray-400">{rightIcon}</div>
            )}
          </div>

          {/* Loading Spinner */}
          {isLoading && (
            <div className="absolute right-0 top-0 h-full flex items-center pr-3">
              <div className="w-5 h-5 border-2 border-gray-300 border-t-primary-600 rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Helper/Error/Success Text */}
        <div className="mt-1 min-h-[20px]">
          {error && (
            <p id={`${inputId}-error`} className="text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1 flex-shrink-0" />
              {error}
            </p>
          )}

          {success && !error && (
            <p id={`${inputId}-success`} className="text-sm text-green-600 flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 flex-shrink-0" />
              {success}
            </p>
          )}

          {helper && !error && !success && (
            <p id={`${inputId}-helper`} className="text-sm text-gray-500">
              {helper}
            </p>
          )}

          {/* Character Count */}
          {showCount && maxLength && (
            <p className="text-xs text-gray-500 text-right">
              {String(inputValue).length} / {maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

// Additional input types
export const SearchInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>((props, ref) => {
  return (
    <Input
      ref={ref}
      type="search"
      leftIcon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      }
      {...props}
    />
  );
});

SearchInput.displayName = 'SearchInput';

export const NumberInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>((props, ref) => {
  return <Input ref={ref} type="number" {...props} />;
});

NumberInput.displayName = 'NumberInput';

export const EmailInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>((props, ref) => {
  return <Input ref={ref} type="email" {...props} />;
});

EmailInput.displayName = 'EmailInput';

export const PhoneInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>((props, ref) => {
  return <Input ref={ref} type="tel" {...props} />;
});

PhoneInput.displayName = 'PhoneInput';

export const PasswordInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type' | 'isPassword'>>(
  (props, ref) => {
    return <Input ref={ref} type="password" isPassword {...props} />;
  }
);

PasswordInput.displayName = 'PasswordInput';
