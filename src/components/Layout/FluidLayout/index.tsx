/*
  Fluid Layout.
*/
import { PageProps } from '@/types/type'
import styles from './style.module.scss'

type Props = {
  pages: PageProps['pages']
}

const FluidLayoutComponent: React.FC<Props> = ({ pages, children }): JSX.Element => {
  return <div className={`${pages} ${styles['fluid-layout']}`}>{children}</div>
}

export const FluidLayout = FluidLayoutComponent
