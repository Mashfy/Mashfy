import { useState } from 'react';
import type { ReactNode, SyntheticEvent } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from '@mui/icons-material/Place';
import TextField from '@mui/material/TextField';
import { profile, features } from '../data/portfolio';

type ContactCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

function ContactCard({ icon, label, value, href, external }: ContactCardProps) {
  const content = (
    <>
      <span className="contact-card-icon">{icon}</span>
      <span className="contact-card-text">
        <span className="contact-card-label">{label}</span>
        <span className="contact-card-value">{value}</span>
      </span>
    </>
  );

  if (!href) return <div className="contact-card">{content}</div>;
  return (
    <a className="contact-card" href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {content}
    </a>
  );
}

/**
 * Message form. Currently detached from the UI (see `features.contactForm`
 * in src/data/portfolio.ts). It needs no backend: on submit it opens the
 * visitor's mail client with the message pre-filled.
 */
function ContactForm() {

  const [name, setName] = useState<string>('');
  const [replyTo, setReplyTo] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [replyToError, setReplyToError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    const missingName = name.trim() === '';
    const missingReplyTo = replyTo.trim() === '';
    const missingMessage = message.trim() === '';

    setNameError(missingName);
    setReplyToError(missingReplyTo);
    setMessageError(missingMessage);

    if (missingName || missingReplyTo || missingMessage) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\nReply to: ${replyTo}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className='contact-form'
      onSubmit={sendEmail}
    >
      <div className='form-flex'>
        <TextField
          required
          id="contact-name"
          label="Your Name"
          placeholder="What's your name?"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          error={nameError}
          helperText={nameError ? "Please enter your name" : ""}
        />
        <TextField
          required
          id="contact-reply-to"
          label="Email / Phone"
          placeholder="How can I reach you?"
          value={replyTo}
          onChange={(e) => {
            setReplyTo(e.target.value);
          }}
          error={replyToError}
          helperText={replyToError ? "Please enter your email or phone number" : ""}
        />
      </div>
      <TextField
        required
        id="contact-message"
        label="Message"
        placeholder="Send me any enquiries or questions"
        multiline
        rows={10}
        className="body-form"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        error={messageError}
        helperText={messageError ? "Please enter the message" : ""}
      />
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
}

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Working on technology for development, data platforms or digital transformation at scale? I'm always happy to talk.</p>
          <div className="contact-cards">
            <ContactCard icon={<EmailIcon/>} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactCard icon={<LinkedInIcon/>} label="LinkedIn" value="linkedin.com/in/mashfy" href={profile.linkedin} external />
            <ContactCard icon={<GitHubIcon/>} label="GitHub" value="github.com/Mashfy" href={profile.github} external />
            <ContactCard icon={<PlaceIcon/>} label="Location" value={profile.location} />
          </div>
          {features.contactForm && <ContactForm />}
        </div>
      </div>
    </div>
  );
}

export default Contact;
