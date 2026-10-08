import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { WhatsAppIcon } from './whatsapp-icon'
import { experiences } from '@/data/experience'
import { projects } from '@/data/projects'
import {
  portfolioContact,
  responses,
  skillGroups,
  topics,
  type Topic
} from '@/data/portfolio-chat'

const ContactLinks = () => (
  <div className="answer-contacts">
    <a href={portfolioContact.linkedin} target="_blank" rel="noreferrer">
      <Linkedin size={19} />
      <span>
        LinkedIn<small>Vamos nos conectar</small>
      </span>
      <ArrowUpRight size={17} />
    </a>
    <a href={`mailto:${portfolioContact.email}`}>
      <Mail size={19} />
      <span>
        E-mail<small>{portfolioContact.email}</small>
      </span>
      <ArrowUpRight size={17} />
    </a>
    <a href={portfolioContact.whatsapp} target="_blank" rel="noreferrer">
      <WhatsAppIcon />
      <span>
        WhatsApp<small>Fale diretamente comigo</small>
      </span>
      <ArrowUpRight size={17} />
    </a>
    <a href={portfolioContact.github} target="_blank" rel="noreferrer">
      <Github size={19} />
      <span>
        GitHub<small>Explore meus repositórios</small>
      </span>
      <ArrowUpRight size={17} />
    </a>
  </div>
)

const ProjectAnswers = ({
  onAsk,
  busy
}: {
  onAsk: (question: string) => void
  busy: boolean
}) => (
  <div className="answer-projects">
    {projects.map(project => (
      <button
        key={project.id}
        disabled={busy}
        onClick={() => onAsk(`Me conte mais sobre ${project.title}`)}
        className="answer-project"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`Interface do ${project.title}`}
            loading="lazy"
          />
        ) : (
          <div className="project-placeholder">
            <span className="project-placeholder-label">PROJETO</span>
            <strong>{project.title}</strong>
            <span>{project.description ?? 'Mais detalhes em breve'}</span>
          </div>
        )}
        <div>
          <span className="project-heading">
            <strong>{project.title}</strong>
            <ArrowUpRight size={18} />
          </span>
          <p>
            {project.description ??
              'Um projeto do meu portfólio. Vamos conversar para saber mais.'}
          </p>
          <div className="answer-tags">
            {project.tags?.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </button>
    ))}
  </div>
)

const ExperienceAnswer = () => (
  <div className="answer-timeline">
    {experiences.map(experience => (
      <details key={experience.id} className="answer-experience">
        <summary>
          <span className="experience-initials">{experience.initials}</span>
          <span>
            <strong>{experience.company}</strong>
            <span>{experience.role}</span>
            <small>{experience.period}</small>
          </span>
          <span className="expand-mark">+</span>
        </summary>
        <ul>
          {experience.achievements.map(achievement => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </details>
    ))}
  </div>
)

export const ChatAnswer = ({
  topic,
  onAsk,
  busy
}: {
  topic: Topic
  onAsk: (question: string) => void
  busy: boolean
}) => (
  <div className="chat-answer">
    <h2>{responses[topic].title}</h2>
    <p>{responses[topic].text}</p>
    {topic === 'about' && (
      <div className="about-signature">
        <img src="/me.png" alt="Edson Alves" />
        <span>
          <strong>Da ideia à interface.</strong>
          <span>Com atenção a cada detalhe.</span>
          <small>
            <MapPin size={13} /> Brejo Santo, CE · Brasil
          </small>
        </span>
      </div>
    )}
    {topic === 'skills' && (
      <div className="answer-skills">
        {skillGroups.map(group => (
          <div key={group.name}>
            <h3>{group.name}</h3>
            <div className="answer-tags">
              {group.items.map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}
    {topic === 'projects' && <ProjectAnswers onAsk={onAsk} busy={busy} />}
    {topic === 'experience' && <ExperienceAnswer />}
    {topic === 'contact' && <ContactLinks />}
    {topic === 'margem' && (
      <figure className="margem-preview">
        <img
          src="/projects/margem-reader.png"
          alt="Leitor de documentos do projeto Margem"
        />
        <figcaption>
          Margem · Biblioteca, leitura e conhecimento organizado.
        </figcaption>
      </figure>
    )}
    {topic === 'finora' && (
      <a
        className="answer-inline-link"
        href={`mailto:${portfolioContact.email}`}
      >
        Conversar sobre o Finora <ArrowUpRight size={15} />
      </a>
    )}
    <div className="answer-followups">
      {topics
        .filter(item => item.id !== topic)
        .slice(0, topic === 'fallback' ? 5 : 3)
        .map(item => (
          <button
            key={item.id}
            disabled={busy}
            onClick={() => onAsk(item.prompt)}
          >
            {item.label}
            <ArrowUpRight size={12} />
          </button>
        ))}
    </div>
  </div>
)
