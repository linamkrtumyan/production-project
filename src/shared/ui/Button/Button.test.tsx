import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('classNames', () => {
  test('with mods false', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  // test("with only first params", () => {
  //   render(<Button>test</Button>);
  //   expect(screen.getByText('test')).toHaveClass('clear');
  //   screen.debug();
  // });
});
