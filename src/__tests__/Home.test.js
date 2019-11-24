import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render} from 'react-testing-library';
import Home from '../components/Home'

test('renders price for object', () => {
    const { getByLabelText } = render(<Home />);
    const input = getByLabelText('Price:');
  
    expect(input).toHaveAttribute('className', 'price');
  });

  