# Multi-Collateral DAI Vault Manager

The MCD DAI Vault Manager gives users the opportunity to set up and manage Vaults covering 
the range of collateral types currently approved by Maker voters.

**Note**: Collateralised Debt Position -> renamed to -> Vault.

## Why

To create a brutally simple tool for members of the MakerDAO community to use to 
create and maintain Vaults.

## Installation

Clone the repository `git clone git@github.com:BackToTheCode/project.mcd-vault-manager.git`

Install dependencies `yarn install`

## Run

Start the development server `yarn dev`

## Test

Run the test suit `yarn test`

## Process

- Firstly, simple wireframes were drawn on paper to help the author understand the necessary flows.
- Secondly, a kanban board was prepared populated with all the necessary tickets [`MCD Vault Manager Board`](https://trello.com/b/H0NV22h9/mcd-vault-manager).
- Thirdly, setup storybook to create a design-system for the tool [`MCD Vault Manager Design System`](https://adoring-leavitt-ad4453.netlify.com).
- Finally, built out the tool itself using Next.JS / Dai.js and an array of other tools and libraries.

## Technology

### 💰Dai.js

Dai.js is a library - developed by the Maker Foundation team - to allow community member developers to quickly and simply build applications on top of MakerDAO's platform of smart contracts. 

### ⚛️ React / Next.JS

Next.JS is the self described React Framework for production. It is more opinionated than the Facebook developed create-react-app bootstrapping library.
Next.JS also comes with some major performance optimizations and the ability to fully export the application as a static site. This static export 
capability is being leveraged in this project.

### 🆎Typescript

Typescript brings a degree of type-safety to weakly typed javascripts. It adds some fairly significant overhead during setup and also development.

### 💅Styled Components / ⚛️ Rebass


### 📚Storybook

Storybook is a front-end tool that allows engineers to maintain a living record of all their applications components. All versions/states of each component are listed alongside one another.

## 📤Deployment

Both the design system and the app itself are being deployed as static sites via Netlify.

- [`MCD Vault Manager Design System`](https://adoring-leavitt-ad4453.netlify.com).
- [`MCD Vault Manager`](https://nervous-shannon-c787e5.netlify.com).















