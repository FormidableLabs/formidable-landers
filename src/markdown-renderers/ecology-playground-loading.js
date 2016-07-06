/* eslint-disable max-len */
export default {
  code: (code, lang) => {
    const escape = (html) => {
      return html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    };

    if (!lang) {
      return (
        `<pre><code>${escape(code)}</code></pre>`
      );
    }

    if (lang === "playground" || lang === "playground_norender") {
      return (
        `<pre style="line-height: 0">
            <div class="lang-${escape(lang)}">
                <span class="ecologyCode" style="display:none;">${escape(code)}</span>
                <div class="Interactive">
                    <div style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: stretch;justify-content: space-between;margin-left: -20px;padding: 0;">
                        <div style="min-height:300px;display: flex;flex: 1 2 45%;margin: 0;">
                        </div>
                        <div style="min-height:300px;display: flex;flex: 3 2 55%;margin: 0;padding: 0;">
                            <div class="ReactCodeMirror playgroundStage"></div>
                        </div>
                    </div>
                </div>
            </div>
        </pre>`
      );
    }

    return (
      `<pre><code class="lang-${escape(lang)}">${escape(code)}</code></pre>`
    );
  }
};
