/** 置換プラグインを`markdown-it`に登録する関数です */
module.exports = function replaceElementPlugin(md, options) {
  // `options`は`null`の場合があるため、`Object.assign()`を利用して確実にオブジェクトであることを保証する必要があります（`Object.assign({}, null) -> {}`）
  const optionsObject = Object.assign({}, options)

  /** 置換プラグインの本体となる関数です */
  const replacer = (state) => {
    // `state`の中には`markdown-it`の`Token`オブジェクトが`tokens`配列として入っています
    state.tokens.forEach((token) => {
      // `token.tag`に、タグの種類が文字列として格納されています

      // `token.tag`が`optionsObject`に含まれているか確認します
      if (Object.prototype.hasOwnProperty.call(optionsObject, token.tag)) {
        // `token.tag`が`optionsObject`に含まれていた場合、`token.tag`を`optionsObject[token.tag]`で置き換えます
        token.tag = optionsObject[token.tag]
      }
    })
  }

  // `markdown-it`に作成した置換プラグインを追加します
  md.core.ruler.push('replace-element', replacer)
}
