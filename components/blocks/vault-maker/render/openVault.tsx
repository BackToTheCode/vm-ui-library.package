import { OpenVault } from '../6-open-vault/wrapped';

export const openVault = () => {
  return (
    <OpenVault.Wrapped>
      <OpenVault.Title>Set Allowance and open your Vault </OpenVault.Title>
      <OpenVault.HorizontalRule sx={{mb: 8}} />
      <OpenVault.Notice>This permission allows Oasis to interact with your ETH. This has to be done once for each new collateral type.</OpenVault.Notice>
      <OpenVault.CTAButton>Open Vault</OpenVault.CTAButton>
      <OpenVault.OAButton>Go back</OpenVault.OAButton>
    </OpenVault.Wrapped>
  );
};
