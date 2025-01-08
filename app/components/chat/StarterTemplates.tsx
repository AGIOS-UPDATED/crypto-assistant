import React from 'react';
import type { Template } from '~/types/template';
import { STARTER_TEMPLATES , STARTER_EXCHANGE } from '~/utils/constants';

interface FrameworkLinkProps {
  template: Template;
}

const FrameworkLink: React.FC<FrameworkLinkProps> = ({ template }) => (
  <a
    href={`/git?url=https://github.com/${template.githubRepo}.git`}
    data-state="closed"
    data-discover="true"
    className="items-center justify-center "
  >
    {/* <div
      className={`inline-block ${template.icon} w-8 h-8 text-4xl transition-theme opacity-25 hover:opacity-75 transition-all`}
    /> */}
    <div className=' inline-block text-white underline text-normal mb-4 transition-theme opacity-25 hover:opacity-75 transition-all'>
      {template.name}
    </div>
  </a>
);

const StarterTemplates: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-sm text-gray-500">or start a trade with your favorite platform</span>
      <div className="flex justify-center">
        <div className="flex w-70 flex-wrap items-center justify-center gap-4">
          {STARTER_EXCHANGE.map((template) => (
            <FrameworkLink key={template.name} template={template} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarterTemplates;
