import {html, LitElement} from 'lit-element';
/**
 * `blame-element`
 * Blame table for versioned git data.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BlameElement extends LitElement {
  constructor() {
    super();
    this.users = {
      1: {first: 'Luis', last: 'Santos', email: 'luis@blame.com', id: 'iamluis'},
      2: {first: 'Nuno', last: 'Godinho', email: 'nuno@blame.com', id: 'nununo'}
    }
    this.code = [
      {
        date: new Date(),
        commit: {id: '3948105948eljfd354adfk4jhk3h5', message: 'Something Nice'},
        user: 1,
        request: 'LOCAL',
        lines: [`Something`, `Copyright luis 2019`]
      },
      {
        date: new Date(),
        commit: {id: '3948105948eljfd354adfk4jhk3h5', message: 'Something Less Nice'},
        user: 2,
        request: 'LOCAL',
        lines: [`Pois`, `Luis`]
      }
    ]
    this.line = 0
  }

  renderLine(data) {
    return html`
        <tr> 
            <td>${data.user.first + data.user.last}</td> 
            <td>${data.commit.id}</td> 
            <td>${data.commit.date}</td> 
            <td>${data.lines.map((line, index) => html`<p>${this.line++}</p>`)}</td> 
            <td>${data.lines.map(line => html`<p>${line}</p>`)}</td> 
            <td>${data.request}</td> 
        </tr>
    `;
  }

  static get properties() {
    return {
      code: {
        type: Array,
      },
    };
  }


  render() {
    return html`
      <table> 
        <tr> 
          <th>Line</th> 
          <th>Source</th> 
          <th>Version</th> 
          <th>Author</th> 
          <th>Date</th> 
          <th>Request</th> 
        </tr> 
        ${this.code.map(item => this.renderLine({...item, user: this.users[item.user]}))}
      </table>
      
    `;
  }
  
}

window.customElements.define('blame-element', BlameElement);
