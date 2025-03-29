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
    <h2>UUID whenever you need it. Reload page to get a new</h2>
    <textarea placeholder="paste or generate one-time pad" value="${() => data.uuid}"></textarea><br />
  </div>
`
template(appElement)

// ### Functions
