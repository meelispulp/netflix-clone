import faqsJson from '../fixtures/faq.json';
import {Accordion, OptForm2} from '../components';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>FAQ</Accordion.Title>
      {faqsJson.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptForm2>
        <OptForm2.Input placeholder="Email address" />
        <OptForm2.Button>Try it now</OptForm2.Button>
        <OptForm2.Break />
        <OptForm2.Text>For free</OptForm2.Text>
      </OptForm2>
    </Accordion>
  );
}
