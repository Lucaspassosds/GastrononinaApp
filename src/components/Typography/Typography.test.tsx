import React from "react";
import { render } from "@testing-library/react-native";
import Typography from ".";

describe("Typography Component", () => {
  it("renders the component with default styles", () => {
    const { getByText } = render(<Typography>Default Text</Typography>);
    const textElement = getByText("Default Text");

    expect(textElement).toBeTruthy();
    // Check if the element has the correct default classes
    expect(textElement.props.className).toContain("font-chopin");
    expect(textElement.props.className).toContain("text-primary-brown");
  });

  it("applies the correct variant and size", () => {
    const { getByText } = render(
      <Typography variant="chopin" size="h1">
        Styled Text
      </Typography>
    );
    const textElement = getByText("Styled Text");

    // Verify the className reflects the variant and size
    expect(textElement.props.className).toContain("font-chopin");
    expect(textElement.props.className).toContain("text-2xl"); // Assuming h1 maps to text-2xl
  });

  it("appends custom className", () => {
    const { getByText } = render(
      <Typography className="text-primary-green">Custom Styled Text</Typography>
    );
    const textElement = getByText("Custom Styled Text");

    // Verify custom className is appended
    expect(textElement.props.className).toContain("text-primary-green");
  });

  it("overrides default styles with custom styles", () => {
    const { getByText } = render(
      <Typography variant="birdgo" size="small" className="text-primary-pink">
        Overridden Text
      </Typography>
    );
    const textElement = getByText("Overridden Text");

    // Verify custom styles take precedence
    expect(textElement.props.className).toContain("text-primary-pink");
    expect(textElement.props.className).toContain("font-birdgo");
  });
});
