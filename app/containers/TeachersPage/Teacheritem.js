/* eslint-disable react/prop-types */
import React from 'react';

export default function Itemwriter({ title, content }) {
  if (content !== '') {
    if (title === 'Інформація на порталі Intellect: ') {
      return (
        <p>
          <span className="ItemTitle">{title}</span>
          <span>
            <a href={content}>{content}</a>
          </span>
        </p>
      );
    }
    return (
      <p>
        <span className="ItemTitle">{title}</span>
        <span>{content}</span>
      </p>
    );
  }
  return null;
}
