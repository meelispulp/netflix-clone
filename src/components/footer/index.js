import {Break, Column, Container, Link, Row, Text} from './styles/footer';

export default function Footer({ children }) {
  return <Container>{children}</Container>;
}

Footer.Row = function FooterRow({ children }) {
  return <Row>{children}</Row>;
};

Footer.Column = function FooterColumn({ children }) {
  return <Column>{children}</Column>;
};

Footer.Link = function FooterLink({ children }) {
  return <Link>{children}</Link>;
};

Footer.Title = function FooterTitle({ children }) {
  return <Link>{children}</Link>;
};

Footer.Text = function FooterText({ children }) {
  return <Text>{children}</Text>;
};

Footer.Break = function FooterBreak({ children }) {
  return <Break>{children}</Break>;
};
