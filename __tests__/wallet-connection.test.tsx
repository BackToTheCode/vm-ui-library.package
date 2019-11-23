import React from 'react';
// import Header from '../components/blocks/header/index';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import Page from '../pages';

afterEach(cleanup);

// Override the provider used to connect to web3 - need an http version pointing at <Infura></Infura>
// Render a page
//

// Should create the app

describe('When a user connects and enters their password', () => {
  it('should connect the user and show them them the Vault Maker Wizard', async () => {
    // Arrange
    const buttonText = "Connect with Metamask";
    const { getByText, findByText } = render(<Page />);
    const vaultMakerTitleSegment = "We suggest";
    const vaultMakerTitlePattern = new RegExp(vaultMakerTitleSegment, 'i');
    
    // Act
    fireEvent.click(getByText(buttonText));
    await wait();
    const titleComponent = await findByText(vaultMakerTitlePattern); 

    // Assert
    expect(titleComponent.textContent).toContain(vaultMakerTitleSegment)
   
  });
});

describe('Once Web3 has connected', () => {
  it('should update the address bar text', async () => {
    // Arrange
    const buttonText = "Connect with Metamask";
    const { getByText, findByText } = render(<Page />);
    const publicKey = "0x61049F5e03Bfe3823f274C479158A94bcA26456c";
    const publicKeyPrefixPattern = /0x/i;
    
    // Act
    fireEvent.click(getByText(buttonText));
    await wait();
    const addressComponent = await findByText(publicKeyPrefixPattern); 

    // Assert
    expect(addressComponent.textContent).toBe(publicKey)
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
