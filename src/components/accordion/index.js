import {createContext, useContext, useState} from 'react';
import {Body, Container, Header, Inner, Item, Title} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children }) {
  return <Title>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow((toggle) => !toggle)}>
      {children}

      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="opened" />
      ) : (
        <img src="/images/icons/add.png" alt="closed" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body>{children}</Body> : null;
};
