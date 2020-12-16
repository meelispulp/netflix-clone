import {HeaderContainer} from '../containers/header';
import {Feature, OptForm2} from '../components';
import {JumbotronContainer} from '../containers/jumbotron';
import {FaqsContainer} from '../containers/faqs';
import {FooterContainer} from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films</Feature.Title>
          <Feature.SubTitle>Watch anywhere</Feature.SubTitle>
          <OptForm2>
            <OptForm2.Input placeholder="Email address" />
            <OptForm2.Button>Try it now</OptForm2.Button>
            <OptForm2.Break />
            <OptForm2.Text>For free</OptForm2.Text>
          </OptForm2>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
