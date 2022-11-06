import React from 'react';
import { homeButton } from './SoupCard';

type Props = {
  error: string;
};

export default function ErrorPage(props: Props) {
  return (
    <div className="error-container">
      <p>{props.error}. Try again later.</p>
      {homeButton}
    </div>
  );
}
