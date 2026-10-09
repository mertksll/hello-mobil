interface Props {
  title: string;
  description: string;
  facts: [string, string][];
  technologyTitle: string;
  technologyDescription: string;
}

export default function ProjeBilgileri({
  title,
  description,
  facts,
  technologyTitle,
  technologyDescription,
}: Props) {
  return (
    <details className="project-details">
      <summary>
        <span>
          <strong>{title}</strong>
          <small>{description}</small>
        </span>
        <span className="project-details-toggle" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="project-details-content">
        <dl className="project-facts">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd dir="auto">{value}</dd>
            </div>
          ))}
        </dl>
        <h3>{technologyTitle}</h3>
        <p>{technologyDescription}</p>
        <ul className="technology-list" aria-label={technologyTitle}>
          {["Tauri v2", "Rust", "Astro", "Svelte 5", "React", "MDX", "Bun"].map((name) => (
            <li key={name} dir="ltr">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
