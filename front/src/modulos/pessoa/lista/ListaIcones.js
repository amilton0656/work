

const ListaIcones = props => {
    return ( 
        <div className='pessoa_list__icones'>
                                        <button className='pessoa_list__icones-button' onClick={() => goToForm(pessoa)}><FaRegEdit size={30} color='blue' /></button>
                                        <button className='pessoa_list__icones-button' onClick={() => FichaCadastral(pessoa.id_pessoa)}><FaRegFilePdf size={30} color='grey' /></button>
                                        <button className='pessoa_list__icones-button' onClick={() => deletePessoaHandler(pessoa.id_pessoa)}><BsTrash size={30} color='red' /></button>
                                        <input id={`linha-${pessoa.id_pessoa}`} type='checkbox' style={{display: 'none'}} />
       </div>
     );
}
 
export default ListaIcones;