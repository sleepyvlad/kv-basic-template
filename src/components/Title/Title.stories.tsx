import React from "react";
import Title from "./Title";

export default { title: "Title" };

export const h1 = (): React.ReactElement => <Title as="h1">H1 Title</Title>;
export const h2 = (): React.ReactElement => <Title as="h2">H1 Title</Title>;
export const h3 = (): React.ReactElement => <Title as="h3">H1 Title</Title>;
export const h4 = (): React.ReactElement => <Title as="h4">H1 Title</Title>;
export const h5 = (): React.ReactElement => <Title as="h5">H1 Title</Title>;
export const h6 = (): React.ReactElement => <Title as="h6">H1 Title</Title>;
