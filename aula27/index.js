const usuarioPont = 1000;

const nivelUsuario = usuarioPont >= 1000 ? 'Usuário VIP' : 'Usuário normal'

const corUsuario = 'pink'

const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao)

