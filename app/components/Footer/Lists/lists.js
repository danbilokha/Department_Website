import React from 'react';
import { FormattedMessage } from 'react-intl';
import TodoItems from './listItems';
import HeaderLink from './HeaderLink';

const scope = 'boilerplate.components.';

const topics = [
  { id: 'about', title: 'about', link: '/' },
  { id: 'entrance', title: 'entrance', link: '/' },
  { id: 'studing', title: 'studing', link: '/' },
  { id: 'scientificWork', title: 'scientificWork', link: '/' },
  { id: 'diploma', title: 'diploma', link: '/' },
  { id: 'deansOffice', title: 'deansOffice', link: '/' },
  { id: 'departments', title: 'departments', link: '/' },
  { id: 'usefulLinks', title: 'usefulLinks', link: '/' },
];

export default function TodoLists() {
  return (
    <div className="Lists">
      {topics.map(topic => {
        const footerId = scope + topic.title;
        return (
          <div>
            <HeaderLink to={topic.link}>
              <FormattedMessage id={footerId} />
            </HeaderLink>
            <TodoItems topic={topic.title} />
          </div>
        );
      })}
    </div>
  );
}
