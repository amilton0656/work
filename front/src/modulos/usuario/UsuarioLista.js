
import ConsultaPadrao from '../../components/ConsultaPadrao'

const UsuarioLista = () => {

    return (
        <>
            <ConsultaPadrao
                title = 'Usuários'
                api = '/usuarios'
                fieldId = 'id_usuario'
                fieldName = 'nm_nick'
                fieldAux = ''

            />
        </>
    );
}

export default UsuarioLista;