import React from 'react';
import Button from '../Button';

import styles from './styles.module.css';
import { useRouter } from "next/navigation";
import { useTranslation } from 'react-i18next';

const AboutMeOptionsMenu: React.FC = () => {
    const { t } = useTranslation();
    const router = useRouter();
  return (
    <div className={styles.another_options}>
      <Button
        text={t("about-me.button-see-my-projects")}
        onClick={() => router.push("/projects")}
      />
      <Button
        text={t("about-me.button-problems-i-solved")}
        onClick={() => router.push("/bestBugs")}
      />
      <Button
        text={t("about-me.button-contact-me")}
        onClick={() => router.push("/contact")}
      />
    </div>);
}

export default AboutMeOptionsMenu;