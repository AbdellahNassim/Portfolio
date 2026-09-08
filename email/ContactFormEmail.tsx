import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
type Props = {
  message: string;
  senderEmail: string;
  senderName?: string;
  projectType?: string;
};

function ContactFormEmail({
  message,
  senderEmail,
  senderName,
  projectType,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>New message from Personal Website Contact Form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black/[0.1] my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from Personal Website
              </Heading>
              {senderName ? <Text>From: {senderName}</Text> : null}
              {projectType ? <Text>Project type: {projectType}</Text> : null}
              <Text>{message}</Text>
              <Hr></Hr>
              <Text>The sender&apos;s email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactFormEmail;
