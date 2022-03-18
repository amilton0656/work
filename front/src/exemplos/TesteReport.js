import React, { useRef, useEffect } from 'react';
import './testeReport.css'

import ReactToPrint from 'react-to-print';

// https://stackoverflow.com/questions/1360869/how-to-use-html-to-print-header-and-footer-on-every-printed-page-of-a-document

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div style = {{listStyle: 'none'}}>{this.props.children}</div>
    );
  }
}
const Cabecalho = props => {
  return (
    <div id='cabecalho' style={{
      borderTop: '1px solid black',
      borderBottom: '1px solid black',
      padding: '20px',
      textAlign: 'center'

    }}>
      {/* Pagina: {props.pagina} */}

    </div>
  )
}

const conteudo = (
<ul id='conteudo' >
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
      </ul>
)

const TesteReport = props => {
  const componentRef = useRef();
  let pagina = 0
  return (
    <div class="main">
      <div>
        <ReactToPrint
          content={() => componentRef.current}
          trigger={() => <button id='meubotao'>xxxxx</button>}
          documentTitle = 'titulo'
          // onAfterPrint={() => navigate(-1)}
          
        />
        <ComponentToPrint ref={componentRef}>
          <div>tetetetetete</div>
        </ComponentToPrint>
      </div>
      
    </div>
  );
}

export default TesteReport;