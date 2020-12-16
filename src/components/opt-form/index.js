import {Break, Button, Container, Input, Text} from './styles/opt-form';

export default function OptForm({ children }) {
  return <Container>{children}</Container>;
}

OptForm.Input = function OptFormInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children }) {
  return (
    <Button>
      {children} <img src="/images/icons/chevron-right.png" alt="Try now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children }) {
  return <Text>{children}</Text>;
};
OptForm.Break = function OptFormBreak() {
  return <Break />;
};
