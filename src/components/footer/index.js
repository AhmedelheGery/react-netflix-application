import React from "react";
import { Container, Row, Link, Column, Text, Break, Title } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function Footer({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Link = function Footer({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Column = function Footer({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Text = function Footer({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function Footer({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};

Footer.Title = function Footer({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  };
