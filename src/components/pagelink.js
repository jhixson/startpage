import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageLink = ({ url, title, icon }) => (
  <li className="mb-4">
    <a href={url} className="flex items-center -mx-2 hover:text-orange-400">
      <span className="w-6 mx-2">
        <FontAwesomeIcon icon={icon} className="text-2xl" fixedWidth={true} />
      </span>
      <span className="mx-2">{title}</span>
    </a>
  </li>
);
