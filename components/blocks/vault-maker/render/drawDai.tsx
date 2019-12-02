import { DrawDai } from '../4-draw-dai/wrapped';

export const drawDai = () => {
    return (
      <DrawDai.Wrapped>
        <DrawDai.Title>
          {`How much DAI would you like to draw from your Vault`}
        </DrawDai.Title>
        <DrawDai.HorizontalRule sx={{mb: 8}} />
        <DrawDai.SelectDai symbol="DAI" />
        <DrawDai.CTAButton>Draw</DrawDai.CTAButton>
        <DrawDai.OAButton>Go back</DrawDai.OAButton>
      </DrawDai.Wrapped>
    );
  };