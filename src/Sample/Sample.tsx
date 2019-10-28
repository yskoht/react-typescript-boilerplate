import React from 'react';

import style from './Sample.module.scss';

export const Sample: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Sample</div>
    </div>
  );
};
