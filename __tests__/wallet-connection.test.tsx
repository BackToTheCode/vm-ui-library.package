import React from 'react';
import Header from '../components/blocks/header/index';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Page from '../pages';

afterEach(cleanup);

// Override the provider used to connect to web3 - need an http version pointing at <Infura></Infura>
// Render a page
//

// Should create the app

describe('When a user connects and enters their password', () => {
  it('should connect the user and show them them the Vault Maker Wizard', () => {
    // Arrange
    const { getByText } = render(<Page />);

    // Act

    // Assert
   
  });
});

describe('Once Web3 has connected', () => {
  it('should update the address bar text', () => {
    // Arrange
    // - Setup web3 connection using dai.js
    // Act
    // - authenticate using Metamask
    // Assert
    // - confirm that authentication was successful and state was updated
  });

  it('should suggest a collateral type based on a user\'s highest value balance in USD', () => {
    // Arrange

    // Act
    // Assert
  });

  it('should update the address text', () => {
    // Arrange
    // Act
    // Assert
  });
});
