import { FC } from 'react';
import './style.scss';
import Arrow from './Arrow';
import Chevron from './Chevron';
import Trash from './Trash';

const icons = {
  arrow: <Arrow />,
  chevron: <Chevron />,
  trash: <Trash />,
};

interface Props extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
  orientation?: 'up' | 'right' | 'down' | 'left';
}

const Icon: FC<Props> = ({ name, orientation = 'down' }) => {
  return <span className={`icon icon--orientation-${orientation}`}>{icons[name]}</span>;
};

export default Icon;
