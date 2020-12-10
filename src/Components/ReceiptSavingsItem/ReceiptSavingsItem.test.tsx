import { render, screen } from '@testing-library/react';
import { ReceiptSavingsItem } from './ReceiptSavingsItem';

it('renders the label', () => {
  render(<ReceiptSavingsItem label="foo" discount={2} />);
  expect(screen.getByText(/foo/).textContent).toBe(' foo ');
});

it('renders the discount text', () => {
  render(<ReceiptSavingsItem label="foo" discount={2} />);
  expect(screen.getByText(/2/).textContent).toBe(' -2 ');
});