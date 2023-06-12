import markdownIt from 'markdown-it'
import Token from 'markdown-it/lib/token'
// @ts-expect-error this module does not come with types, but don't worry.
import namedCodeBlocks from 'markdown-it-named-code-blocks'

export default defineNuxtPlugin(() => {
  const md = markdownIt({
    html: false,
    breaks: true,
    linkify: true,
    xhtmlOut: true
  })

  md.core.ruler.push('html_inline', (state) => {
    state.tokens.forEach((blockToken: Token) => {
      blockToken.children?.forEach((token) => {
        if (token.tag === 'a') {
          token.attrPush(['rel', 'ugc nofollow'])
        }
        return true
      })
    })
  })

  md.use(namedCodeBlocks)

  return {
    provide: {
      mdRenderer: md
    }
  }
})
