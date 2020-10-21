import MarkdownIt from 'markdown-it'

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
  md.use(require("markdown-it-anchor"))
  md.use(require("markdown-it-table-of-contents"), {
    includeLevel: [2, 3],
    containerHeaderHtml: '<div class="table-of-contents__header">目次</div>',
    listType: 'ol',
  })
  md.use(require("markdown-it-link-attributes"), { attrs: { target: '_blank', rel: 'noopener' } })
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
