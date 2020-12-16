import {Container, Image, Inner, Item, Pane, SubTitle, Title} from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
  /*    Idea is to create div that goes horizontally across page and
        within I have Inner that locks that in with like 1000px
        And Inner can make some CSS modification to outer div such as full width border */
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

/*
    Image is not going to return any children
 */

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
