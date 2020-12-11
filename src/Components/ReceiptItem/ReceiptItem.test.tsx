import { render, screen } from '@testing-library/react';
import { ReceiptItem } from './ReceiptItem';

it('renders the item name', () => {
  render(<ReceiptItem name="foo" price={5} />);
  expect(screen.getByText(/foo/).textContent).toBe('foo');
});

it('renders the litres pricing label if isLiquidBased', () => {
  render(<ReceiptItem name="foo" price={10} litres={0.35} isLiquidBased />)
  expect(screen.getByText(/0.35/).textContent).toBe('0.35 l @ £10/l');
});

it('DOES NOT render the litres pricing label if !isLiquidBased', () => {
  render(<ReceiptItem name="foo" price={10} litres={0.35} />)
  expect(screen.queryByText(/0.35/)).not.toBeInTheDocument();
});

it('renders the item price', () => {
  render(<ReceiptItem name="foo" price={5} />);
  expect(screen.getByText(/5/).textContent).toBe('5');
});

it('renders the item litres price if isLiquidBased', () => {
  render(<ReceiptItem name="foo" price={10} litres={0.35} isLiquidBased />)
  expect(screen.getByText(/3.5/).textContent).toBe('3.5');
});