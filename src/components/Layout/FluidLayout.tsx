/*
  Fluid Layout.
*/
import { PageProps } from '@/types/type'

type Props = {
  pages: PageProps['pages']
}

const FluidLayoutComponent: React.FC<Props> = ({ pages, children }): JSX.Element => {
  return <div className={`${pages} layout fluid-layout`}>{children}</div>
}

export const FluidLayout = FluidLayoutComponent
