import styles from "./SectionHeader.module.css";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export function SectionHeader({ title, subtitle, eyebrow }: SectionHeaderProps) {
  return (
    <>
      {eyebrow && <p className={styles.sectionHeaderEyebrow}>{eyebrow}</p>}
      <hgroup className={styles.sectionHeader}>
        <h2 className={styles.sectionHeaderTitle}>{title}</h2>
        {subtitle && <p className={styles.sectionHeaderSubtitle}>{subtitle}</p>}
      </hgroup>
    </>
  );
}
