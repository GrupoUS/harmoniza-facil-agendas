import '@testing-library/jest-dom';

// Mock next/font/google
jest.mock('next/font/google', () => ({
  Inter: () => ({
    style: {
      fontFamily: 'mocked',
    },
    variable: '--font-inter',
  }),
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
  usePathname: () => '/',
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Moon: ({ className, ...props }) => <div data-testid="moon-icon" className={className} {...props} />,
  Sun: ({ className, ...props }) => <div data-testid="sun-icon" className={className} {...props} />,
  Calendar: ({ className, ...props }) => <div data-testid="calendar-icon" className={className} {...props} />,
  Clock: ({ className, ...props }) => <div data-testid="clock-icon" className={className} {...props} />,
  Users: ({ className, ...props }) => <div data-testid="users-icon" className={className} {...props} />,
  Sparkles: ({ className, ...props }) => <div data-testid="sparkles-icon" className={className} {...props} />,
  ChevronLeft: ({ className, ...props }) => <div data-testid="chevron-left-icon" className={className} {...props} />,
  ChevronRight: ({ className, ...props }) => <div data-testid="chevron-right-icon" className={className} {...props} />,
  Plus: ({ className, ...props }) => <div data-testid="plus-icon" className={className} {...props} />,
}));

// Global test utilities
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
