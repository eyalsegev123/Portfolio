import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiC, SiPhp,
  SiReact, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiGraphql, SiPostman,
  SiPostgresql, SiMongodb, SiDocker, SiGit, SiOpenjdk
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const iconMap = {
  SiJavascript, SiTypescript, SiPython, SiOpenjdk, SiCplusplus, SiC, SiPhp,
  SiReact, SiHtml5, SiCss3: SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiGraphql, SiPostman,
  SiPostgresql, SiMongodb, SiAmazonaws: FaAws, SiDocker, SiGit,
};

const SkillBadge = ({ name, icon }) => {
  const IconComponent = iconMap[icon];
  return (
    <div className="glass-hover rounded-lg p-3 flex items-center gap-2 cursor-default">
      {IconComponent && <IconComponent className="text-cyan text-lg flex-shrink-0" />}
      <span className="text-sm text-white/80 font-medium">{name}</span>
    </div>
  );
};

export default SkillBadge;
