import markdownIt from 'markdown-it'
import Token from 'markdown-it/lib/token'

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

  return {
    provide: {
      mdRenderer: md
    }
  }
})
