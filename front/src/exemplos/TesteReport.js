
import './testeReport.css'

// https://stackoverflow.com/questions/1360869/how-to-use-html-to-print-header-and-footer-on-every-printed-page-of-a-document

const TesteReport = () => {
    return (
        <div>
<table class="report-container">
   <thead class="report-header">
     <tr>
        <th class="report-header-cell">
           <div class="header-info">
           <div style ={{
                   borderTop: '1px solid black',
                   borderBottom: '1px solid black',
                   padding: '20px',
                   textAlign: 'center'
                   
                }}>
           Cabeçalho

               </div>
           </div>
         </th>
      </tr>
    </thead>
    <tfoot class="report-footer">
      <tr>
         <td class="report-footer-cell">
           <div class="footer-info">

           Rodape

           </div>
          </td>
      </tr>
    </tfoot>
    <tbody class="report-content">
      <tr>
         <td class="report-content-cell">
            <div class="main">
            <ul>
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
            </div>
          </td>
       </tr>
     </tbody>
</table>


            
        </div>
    );
}

export default TesteReport;