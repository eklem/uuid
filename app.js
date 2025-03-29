import { reactive, html } from 'https://esm.sh/@arrow-js/core'

// ### Data
const data = reactive({
  uuid: ''
})

data.uuid = self.crypto.randomUUID()


// ## template
const appElement = document.getElementById('app')

const template = html`
  <div id="otp">
    <h2>UUID - Reload page to get a new</h2>
    <textarea placeholder="paste or generate one-time pad" value="${() => data.uuid}"></textarea><br />
    <div>Generated in your browser. No server involved, other than serving static files. <a href="https://github.com/eklem/uuid">Source code</a>.</div>
  </div>
`
template(appElement)

// ### Functions
