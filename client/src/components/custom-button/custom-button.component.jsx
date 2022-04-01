import React from "react";

import { CustomButtonStyled } from "./custom-button.styles";

const CustomButton = ({children, ...otherProps}) => (
    <CustomButtonStyled {...otherProps}>
        {children}
    </CustomButtonStyled>
);

export default CustomButton;