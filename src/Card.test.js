import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

const [testImage] = TEST_IMAGES;

it("Card Component smoke test", () => {
  render(
    <Card
      caption={testImage.caption}
      src={testImage.src}
      currNum={1}
      totalNum={1}
    />
  );
});

it("should render Card Component", () => {
  const { asFragment } = render(
    <Card
      caption={testImage.caption}
      src={testImage.src}
      currNum={1}
      totalNum={1}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
