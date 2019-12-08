import { render } from '@testing-library/react';
import React from 'react';
import { CoinIcon } from '../coin-icon';

describe('<CoinIcon /> spec', () => {
  test('it renders the component', () => {
    // Arrange
    const expectedTestId = "coin-icon";

    // Act
    const { getByTestId } = render(<CoinIcon  />);
    const element = getByTestId(expectedTestId)

    // Assert
    expect(element).toMatchSnapshot();
  });
});
