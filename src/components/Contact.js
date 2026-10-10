import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const contactItems = [
  {
    id: 'email',
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'houdlaouaoudja@gmail.com',
    href: 'mailto:houdlaouaoudja@gmail.com',
    external: false,
  },
  {
    id: 'phone',
    icon: <FaPhone />,
    label: 'Phone',
    value: '+213 656 928 567',
    href: 'tel:+213656928567',
    external: false,
  },
  {
    id: 'linkedin',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'Houd Laouaoudja',
    href: 'https://www.linkedin.com/in/houd-laouaoudja',
    external: true,
  },
  {
    id: 'instagram',
    icon: <FaInstagram />,
    label: 'Instagram',
    value: '@houd_dido',
    href: 'https://www.instagram.com/houd_dido?igsh=a2k1dndpZ2dxcW9o',
    external: true,
  },
  {
    id: 'github',
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'houdLaou',
    href: 'https://github.com/houdLaou',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact_section">
      <div className="contact_inner">
        <h1 className="contact_heading">Contact Me</h1>
        <p className="contact_subtitle">
          Eager to contribute to innovative teams through internships and collaborative projects.
          Feel free to reach out via any channel below!
        </p>

        <div className="contact_grid">
          {contactItems.map((item) => (
            <a
              key={item.id}
              id={`contact-${item.id}`}
              href={item.href}
              className="contact_card"
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
            >
              <span className="contact_icon">{item.icon}</span>
              <div className="contact_text">
                <span className="contact_label">{item.label}</span>
                <span className="contact_value">{item.value}</span>
              </div>
              <span className="contact_arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
