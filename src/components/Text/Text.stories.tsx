import React from "react";
import Text from "./Text";

export default { title: "Text" };

export const asParagraph = (): React.ReactElement => (
  <>
    <Text as="p">Some paragraph text</Text>
    <Text as="p">Another paragraph text</Text>
  </>
);
export const asSpan = (): React.ReactElement => (
  <>
    <Text as="span">Some span text</Text>
    <Text as="span">Another span text</Text>
  </>
);
