import { ComponentProps } from 'react'

function CustomLink(props: ComponentProps<'a'>) {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return <a {...props} />
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  )
}

export const mdxComponents = {
  a: CustomLink,
}
