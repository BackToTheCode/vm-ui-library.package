import VaultMaker from './index';
import connect from '../../../store/connect';

function mapStateToProps(state: any) {
  const { collateral, currentStep } = state.makeVault;
  const tokenKey = collateral.toLowerCase();
  const { balances } = state;
  return {
    currentStep: currentStep,
    collateral: collateral,
    balance: balances[tokenKey].bal,
    price: balances[tokenKey].price
  };
}

const Wrapped = connect(mapStateToProps, null)(VaultMaker);

VaultMaker.Wrapped = Wrapped;

export default VaultMaker;