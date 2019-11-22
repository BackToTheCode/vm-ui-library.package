import React from 'react';
import { Box } from 'rebass';

const styles = {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'superLightGrey'
}

const HorizontalRule = () => {

    return (
        <Box sx={styles}></Box>
    )
}
HorizontalRule.displayName = "HorizontalRule";

export default HorizontalRule;