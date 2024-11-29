import { VariantProps } from "class-variance-authority";
import React from "react";
import { Text } from "react-native";
import { TextProps } from "react-native";
import { typographyStyles } from "./styles";

interface TypographyProps
  extends TextProps,
    VariantProps<typeof typographyStyles> {
  className?: string; // Tailwind classes
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <Text {...props} className={typographyStyles({ variant, size, className })}>
      {props.children}
    </Text>
  );
};

export default Typography;
