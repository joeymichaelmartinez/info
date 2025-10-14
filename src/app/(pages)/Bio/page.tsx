"use client";
import React, { FC } from 'react';
import Headshot from '../../../../public/images/Headshot.jpg';
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import style from "./Bio.module.css";
import useDeviceType from '@/app/utils/deviceType/useDeviceType';
import Link from 'next/link';

const Bio: FC = () => {
  const deviceType = useDeviceType();

  return (
    <div className={`min-h-screen grid gap-8 items-center justify-center ${style.about} ${deviceType === 'mobile' ? 'grid-cols-1' : 'grid-cols-2'}`}>

      <div className={`${style.headshot} flex justify-center`}>
        <img
          src={Headshot.src}
          alt="Headshot"
          className="rounded-full w-64 h-64 object-cover"
        />
      </div>

      <div className={`${style.bioText} space-y-4`}>
        <p>
          Hello, I&apos;m Joey! I&apos;m a Full Stack Developer with 8 years of experience delivering clean, effective code across complex 
          projects. I work endlessly to make sure that I am not only reaching my goals, but that my code is both efficient, 
          clean, and easy to understand. As an engineer, I believe in staying mindful of best practices and continually refining my 
          own process to always create the best product possible. 
        </p>
        <p>
          I am a graduate of Loyola Marymount University with a B.S. in Computer Science. While attending I fell in love with
          Full Stack Development, and have carried that with me throughout my career.
        </p>
        <p>
          In my free time I like to program video games and learn programming through game design. 
          I also enjoy music, playing drums, and I am currently learning guitar and piano.
        </p>

        
          <div className={`${style.flexSocial}`}>
            <Link href="/resume/JosephMartinezResume.pdf" target="_blank" rel="noopener noreferrer">
              <Button className={style.resumeButton} size="lg">
                Download Resume
              </Button>
            </Link>

            <div className={style.socialLinks}>
              <Link href="https://github.com/joeymichaelmartinez">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href="https://www.linkedin.com/in/joeymichaelmartinez/">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link href="mailto:joeymichaelmartinez@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Bio;



