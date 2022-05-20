const usuarioRoutes = require('./ro_usuario')
const usuarioEmpresaRoutes = require('./ro_usuarioEmpresa')
const usuarioRecursoRoutes = require('./ro_usuarioRecurso')
const usuarioEmpreendimentoRoutes = require('./ro_usuarioEmpreendimento')
const pessoaRoutes = require('./ro_pessoa')
const pessoaComplementoRoutes = require('./ro_pessoaComplemento')
const pessoaContatoRoutes = require('./ro_pessoaContato')
const empreendimentoRoutes = require('./ro_empreendimento')
const empreendimentoBlocoRoutes = require('./ro_empreendimentoBloco')
const empreendimentoUnidadeRoutes = require('./ro_empreendimentoUnidade')
const indiceRoutes = require('./ro_indice')
const indiceDatasRoutes = require('./ro_indiceData')
const agendaTelefonicaRoutes = require('./ro_agendaTelefonica')
const assisTecSolicitacaoRoutes = require('./ro_assistecsolicitacao')
const portalRoutes = require('./ro_portal')
const propostaRoutes = require('./ro_proposta')
const recursoRoutes = require('./ro_recurso')
const empresaRoutes = require('./ro_empresa')


module.exports = [
    usuarioRoutes,
    usuarioEmpresaRoutes,
    usuarioRecursoRoutes,
    pessoaRoutes,
    pessoaComplementoRoutes,
    pessoaContatoRoutes,
    empreendimentoRoutes,
    empreendimentoBlocoRoutes,
    empreendimentoUnidadeRoutes,
    indiceRoutes,
    indiceDatasRoutes,
    agendaTelefonicaRoutes,
    assisTecSolicitacaoRoutes,
    portalRoutes,
    propostaRoutes,
    recursoRoutes,
    empresaRoutes,
    usuarioEmpreendimentoRoutes
]
