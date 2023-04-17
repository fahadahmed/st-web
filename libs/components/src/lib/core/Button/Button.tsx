import { Button } from '@carbon/react';
import '../../../styles/global.css';

export type ButtonComponentProps = {
  title: string;
  kind?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}
export default function ButtonComponent({
  title,
  kind,
  size,
  icon
}: ButtonComponentProps) {
  return(
    <Button kind={kind} size={size} renderIcon={icon}>{title}</Button>
  )
}