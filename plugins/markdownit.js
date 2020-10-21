import MarkdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'

export default ({ app }, inject) => {

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typography: true,
    injected: true,
    breaks: true,
  })

  const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }
  md.use(markdownItAnchor)
  md.use(require("markdown-it-link-attributes"), {
    attrs: { target: '_blank', rel: 'noopener' }
  })
  md.use(require("markdown-it-toc-done-right"), {
    level: 2
  })
  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const aIndex = tokens[idx].attrIndex('target')
    if (tokens[idx]['attrs'][0][1].match('http')) {
      if (aIndex < 0) {
        tokens[idx].attrPush(['target', '_blank'])
      } else {
        tokens[idx].attrs[aIndex][1] = '_blank'
      }
    }
    return defaultRender(tokens, idx, options, env, self);
  }

  inject('md', md)
}
