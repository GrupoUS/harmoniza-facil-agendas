import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Harmoniza Fácil Agendas' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sistema de Agendamento' })).toBeVisible();
  });

  test('should have theme toggle button', async ({ page }) => {
    const themeToggle = page.getByRole('button', { name: /Switch to (light|dark) mode/ });
    await expect(themeToggle).toBeVisible();
    await expect(themeToggle).toHaveAttribute('aria-pressed');
  });

  test('should toggle theme when clicking theme button', async ({ page }) => {
    const themeToggle = page.getByRole('button', { name: /Switch to (light|dark) mode/ });
    
    // Get initial theme state
    const initialPressed = await themeToggle.getAttribute('aria-pressed');
    
    // Click theme toggle
    await themeToggle.click();
    
    // Wait for theme transition
    await page.waitForTimeout(500);
    
    // Check if theme state changed
    const newPressed = await themeToggle.getAttribute('aria-pressed');
    expect(newPressed).not.toBe(initialPressed);
  });

  test('should display navigation links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Início' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Agendamentos' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Pacientes' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Procedimentos' })).toBeVisible();
  });

  test('should display call-to-action buttons', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Acessar Painel Admin' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Portal do Paciente' })).toBeVisible();
  });

  test('should display feature cards', async ({ page }) => {
    await expect(page.getByText('Agendamento Inteligente')).toBeVisible();
    await expect(page.getByText('Gestão de Pacientes')).toBeVisible();
    await expect(page.getByText('Disponibilidade Flexível')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check if main elements are still visible
    await expect(page.getByRole('heading', { name: 'Harmoniza Fácil Agendas' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sistema de Agendamento' })).toBeVisible();
    
    // Check if buttons are accessible
    await expect(page.getByRole('link', { name: 'Acessar Painel Admin' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Portal do Paciente' })).toBeVisible();
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    // Check for proper heading hierarchy
    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toHaveCount(1);
    
    // Check for alt text on icons (if any images are present)
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      await expect(img).toHaveAttribute('alt');
    }
    
    // Check for proper link attributes
    const links = page.getByRole('link');
    const linkCount = await links.count();
    
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
    }
  });

  test('should load without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Filter out known acceptable errors (if any)
    const criticalErrors = consoleErrors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('manifest')
    );
    
    expect(criticalErrors).toHaveLength(0);
  });

  test('should have proper meta tags', async ({ page }) => {
    await expect(page).toHaveTitle(/Harmoniza Fácil Agendas/);
    
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /Sistema de agendamento para harmonização facial/);
    
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', 'width=device-width, initial-scale=1');
  });
});
