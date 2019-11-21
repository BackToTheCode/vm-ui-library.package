import React from 'react';
import Header from '../components/blocks/header/index';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

// Should create the app

describe('When a user connects with Metamask and enters their password', () => {
  it('should connect the user and show them them the Vault Maker Wizard', () => {
    // Arrange

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
