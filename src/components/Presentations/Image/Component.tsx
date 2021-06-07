/*
  Image Component.
*/

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './style.module.scss'

type Props = {
  image: string
  extension: 'webp' | 'svg' | 'png' | 'jpg' | 'gif'
  altProps: string
  unitTestPath?: string
}

type OptionalKeys =
  | 'mobileWidth'
  | 'desktopWidth'
  | 'mobileMinWidth'
  | 'desktopMinWidth'
  | 'mobileMaxWidth'
  | 'desktopMaxWidth'
  | 'mobileHeight'
  | 'desktopHeight'
  | 'mobileMinHeight'
  | 'desktopMinHeight'
  | 'mobileMaxHeight'
  | 'desktopMaxHeight'
  | 'margin'
  | 'mobileMargin'
  | 'desktopMargin'

type OptionalProps = {
  [P in OptionalKeys]: string
}

export const Image: React.VFC<Partial<OptionalProps> & Props> = ({ image, extension, altProps, unitTestPath, ...props }): JSX.Element => {
  const mediaMatch = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)')
  const [firstRender, setFirstRender] = useState(true)
  const [matches, setMatches] = useState(mediaMatch && mediaMatch.matches)
  const router = useRouter()
  const pickBasePath = process.env.envMode ? `${router.basePath}/` : unitTestPath ? unitTestPath : ''

  useEffect((): void | (() => void) => {
    setFirstRender(false)
    const matchesDispatch = (event: MediaQueryListEvent): void => setMatches(event.matches)

    if (mediaMatch) {
      mediaMatch.addEventListener('change', matchesDispatch)
      return (): void => mediaMatch.removeEventListener('change', matchesDispatch)
    }
  }, [mediaMatch])

  const path = extension === 'webp' ? 'webps' : 'images'

  const stylesProps = (matches: boolean): React.CSSProperties => {
    return firstRender
      ? {
          display: 'none'
        }
      : {
          display: 'block',
          width: matches ? props.desktopWidth || '100%' : props.mobileWidth || '100%',
          minWidth: matches ? props.desktopMinWidth || 'none' : props.mobileMinWidth || 'none',
          maxWidth: matches ? props.desktopMaxWidth || 'none' : props.mobileMaxWidth || 'none',
          height: matches ? props.desktopHeight || 'auto' : props.mobileHeight || 'auto',
          minHeight: matches ? props.desktopHeight || 'none' : props.mobileHeight || 'none',
          maxHeight: matches ? props.desktopMaxHeight || 'none' : props.mobileMaxHeight || 'none',
          margin: props.margin ? props.margin : matches ? props.desktopMargin || '0 auto' : props.mobileMargin || '0 auto'
        }
  }

  return (
    <>
      {firstRender ? (
        <>
          <img src={`${pickBasePath}images/loading.svg`} />
        </>
      ) : (
        <img className={styles.image} src={`${pickBasePath}${path}/${image}.${extension}`} alt={altProps} loading="lazy" style={{ ...stylesProps(matches) }} />
      )}
    </>
  )
}
