import React, { useRef, useEffect } from 'react';
import ReactToPrint from 'react-to-print';
import { useNavigate } from 'react-router-dom'

// import { ComponentToPrint } from './ComponentToPrint';

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

const PrintPrint = props => {

  const navigate = useNavigate()

  const componentRef = useRef();

  useEffect(() => {
    document.getElementById("meubotao").click();
  }, [])

  return (
    <div style={{display:'none'}}>
      <ReactToPrint
        content={() => componentRef.current}
        trigger={() => <button id='meubotao' />}
        onAfterPrint={() => navigate(-1)}
      />
      <ComponentToPrint ref={componentRef}>
        {/* <div>teste impressao</div> */}
        {props.children}
      </ComponentToPrint>
    </div>
  );
};

export default PrintPrint

