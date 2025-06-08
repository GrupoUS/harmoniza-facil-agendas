import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '@/components/theme-toggle';

// Mock next-themes
jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
  useTheme: () => ({
    theme: 'dark',
    setTheme: jest.fn(),
  }),
}));

const ThemeToggleWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider attribute="class" defaultTheme="dark">
    {children}
  </ThemeProvider>
);

describe('ThemeToggle', () => {
  it('renders theme toggle button', () => {
    render(
      <ThemeToggleWrapper>
        <ThemeToggle />
      </ThemeToggleWrapper>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  it('has proper accessibility attributes', () => {
    render(
      <ThemeToggleWrapper>
        <ThemeToggle />
      </ThemeToggleWrapper>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'true');
    
    const screenReaderText = screen.getByText('Current theme: Dark mode');
    expect(screenReaderText).toHaveClass('sr-only');
  });

  it('applies correct CSS classes', () => {
    render(
      <ThemeToggleWrapper>
        <ThemeToggle />
      </ThemeToggleWrapper>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'fixed',
      'top-4',
      'left-4',
      'z-50',
      'p-2',
      'rounded-lg',
      'bg-surface',
      'border',
      'border-neutral-light'
    );
  });
});
