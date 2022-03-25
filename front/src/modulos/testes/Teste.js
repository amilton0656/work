import { useState } from 'react'
import * as XLSX from 'xlsx'



const Teste = props => {

    const [linhas, setLinhas] = useState([])

    const lista = props.lista
    console.log('chegando ', props.lista)

    const writeExcel = (fileExtension, fileName, lista) => {
        var data = [
            {Nome:"Amilton", "Email":"amilton@cota.com.br", "Telefone":"48 99986 4257"},
            {Nome:"Joaquim", "Email":"jo@gmail.com", "Telefone":"48 99988 8888"},
            {Nome:"Maria", "Email":"ma@email.com", "Telefone":"48 99955 5555"}
        ];
        
        /* this line is only needed if you are not adding a script tag reference */
        if(typeof XLSX == 'undefined') XLSX = require('xlsx');
        
        /* make the worksheet */
        var ws = XLSX.utils.json_to_sheet(lista);
        
        /* add to workbook */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Teste Excel");
        
        /* generate an XLSX file */
        XLSX.writeFile(wb, "testeExcel.xlsx");

    }

    const readExcel = (file) => {

        const promise = new Promise((resolve, reject) => {

            console.log('carregando...')
            const fileReader =  new FileReader()
            fileReader.readAsArrayBuffer(file)

            fileReader.onload = (e) => {
                console.log('carregando...2')
                const bufferArray = e.target.result

                const wb=XLSX.read(bufferArray, { type: 'buffer'})

                const wsname = wb.SheetNames[0]

                const ws = wb.Sheets[wsname]

                const data = XLSX.utils.sheet_to_json(ws)

                const abc = XLSX.utils.json_to_sheet               

                console.log('carregando...3', data)

                resolve(data)
                setLinhas(data)
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })

        promise.then((d) => {
            console.log('resultado ', d)
        })
    }
    


    return (
        <div>

            <button onClick={() => writeExcel('xlsx','teste', lista)}>Enviar</button>

            <input 
                type='file'
                onChange={e => {
                    const file = e.target.files[0]

                    readExcel(file)
                }}
                />

                <ul>
                {
                    
                    linhas.map(ln => (
<li>{ln.nome}</li>
                    ))
                }

                </ul>
        </div>
    )
}

export default Teste