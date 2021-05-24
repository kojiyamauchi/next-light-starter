/*
  Image Component Storybook.
*/

import { Image } from './'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Image Component',
  component: Image
}

export const Default = (): JSX.Element => <Image image="logo_cream" extension="webp" altProps="Storybook Image" desktopWidth="450px" mobileWidth="80%" />
