import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiGraphql,
  SiPostgresql, SiMongodb, SiDocker, SiGit, SiOpenjdk,
  SiGoogle, SiOpenai
} from 'react-icons/si';
import { FaAws, FaServer, FaTerminal } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

const iconMap = {
  SiJavascript, SiTypescript, SiPython, SiOpenjdk, SiCplusplus,
  SiReact, SiHtml5, SiCss3: SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiGraphql,
  SiPostgresql, SiMongodb, SiAmazonaws: FaAws, SiDocker, SiGit,
  FaServer,
  SiGoogle, SiOpenai, FaTerminal, VscCode,
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
