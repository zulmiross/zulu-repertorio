const firebaseConfig = {
    apiKey: "AIzaSyCE1Z2WLYYJI8lkCPKmOjmMu-pJZnwxAeM",
    authDomain: "musicrep-78c82.firebaseapp.com",
    projectId: "musicrep-78c82",
    storageBucket: "musicrep-78c82.appspot.com",
    messagingSenderId: "101912439476",
    appId: "1:101912439476:web:5d248b1a4675bf463605e1"
};


firebase.initializeApp(firebaseConfig);

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("btn_login"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
}



$("#btn_login").on('click', function() {

    // getErrorMessage();
    // return
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        app.views.main.router.navigate("/perfil/")
    }).catch(error => {

        console.log(getErrorMessage(error))
            // app.dialog.alert("ts", "Erro!");
    });
})

function getErrorMessage(error) {
    $.each(errosFirebase, function(code, valor) {
        if (error.code == code) {
            return valor;
        }
        return error.message;
    })

}

var errosFirebase = {
    "auth/claims-too-large": "A carga útil de declarações fornecida para setCustomUserClaims() excede o tamanho máximo permitido de 1.000 bytes.",
    "auth/email-already-exists": "O e-mail fornecido já está em uso por um usuário existente. Cada usuário deve ter um email exclusivo.",
    "auth/id-token-expired": "O token de ID do Firebase fornecido expirou.",
    "auth/id-token-revoked": "O token de ID do Firebase foi revogado.",
    "auth/insufficient-permission": "A credencial usada para inicializar o Admin SDK não tem permissão suficiente para acessar o recurso de autenticação solicitado. Consulte Configurar um projeto do Firebase para obter documentação sobre como gerar uma credencial com as permissões apropriadas e usá-la para autenticar os SDKs administrativos.",
    "auth/internal-error": "O servidor de autenticação encontrou um erro inesperado ao tentar processar a solicitação. A mensagem de erro deve conter a resposta do servidor de autenticação contendo informações adicionais. Se o erro persistir, relate o problema ao nosso canal de suporte Bug Report .",
    "auth/invalid-argument": "Um argumento inválido foi fornecido a um método de autenticação. A mensagem de erro deve conter informações adicionais.",
    "auth/invalid-claims": "Os atributos de declaração personalizada fornecidos para setCustomUserClaims() são inválidos.",
    "auth/invalid-continue-uri": "O URL de continuação deve ser uma string de URL válida.",
    "auth/invalid-creation-time	": "A hora de criação deve ser uma sequência de data UTC válida.",
    "auth/invalid-credential": "A credencial usada para autenticar os Admin SDKs não pode ser usada para executar a ação desejada. Certos métodos de autenticação, como createCustomToken() e verifyIdToken() exigem que o SDK seja inicializado com uma credencial de certificado, em vez de um token de atualização ou credencial padrão do aplicativo. Consulte Inicializar o SDK para obter documentação sobre como autenticar os SDKs Admin com uma credencial de certificado.",
    "auth/invalid-disabled-field": "O valor fornecido para a propriedade do usuário disabled é inválido. Deve ser um booleano.",
    "auth/invalid-display-name": "O valor fornecido para a propriedade do usuário displayName é inválido. Deve ser uma string não vazia.",
    "auth/invalid-dynamic-link-domain": "O domínio de link dinâmico fornecido não está configurado ou autorizado para o projeto atual.",
    "auth/invalid-email": "O valor fornecido para a propriedade do usuário email é inválido. Deve ser um endereço de e-mail de string.",
    "auth/invalid-email-verified": "O valor fornecido para a propriedade do usuário emailVerified é inválido. Deve ser um booleano.",
    "auth/invalid-hash-algorithm": "O algoritmo hash deve corresponder a uma das strings na lista de algoritmos suportados.",
    "auth/invalid-hash-block-size": "O tamanho do bloco hash deve ser um número válido.",
    "auth/invalid-hash-derived-key-length": "O comprimento da chave derivada de hash deve ser um número válido.",
    "auth/invalid-hash-key": "A chave hash deve ter um buffer de bytes válido.",
    "auth/invalid-hash-memory-cost": "O custo da memória hash deve ser um número válido.",
    "auth/invalid-hash-parallelization": "A paralelização de hash deve ser um número válido.",
    "auth/invalid-hash-rounds": "As rodadas de hash devem ser um número válido.",
    "auth/invalid-hash-salt-separator": "O campo separador de sal do algoritmo de hash deve ser um buffer de bytes válido.",
    "auth/invalid-id-token": "O token de ID fornecido não é um token de ID válido do Firebase.",
    "auth/invalid-last-sign-in-time": "A hora do último login deve ser uma string de data UTC válida.",
    "auth/invalid-page-token": "O token da próxima página fornecido em listUsers() é inválido. Deve ser uma string válida e não vazia.",
    "auth/invalid-password": "O valor fornecido para a propriedade de usuário password é inválido. Deve ser uma string com pelo menos seis caracteres.",
    "auth/invalid-password-hash": "O hash da senha deve ser um buffer de bytes válido.",
    "auth/invalid-password-salt": "A senha salt deve ser um buffer de bytes válido",
    "auth/invalid-phone-number": "O valor fornecido para phoneNumber é inválido. Deve ser uma sequência de identificadores não vazia e compatível com o padrão E.164.",
    "auth/invalid-photo-url": "O valor fornecido para a propriedade do usuário photoURL é inválido. Deve ser um URL de string.",
    "auth/invalid-provider-data": "O ProvideData deve ser uma matriz válida de objetos UserInfo.",
    "auth/invalid-provider-id": "O ProvideId deve ser uma string de identificador de provedor compatível e válida.",
    "auth/invalid-oauth-responsetype": "Somente exatamente um responseType do OAuth deve ser definido como verdadeiro.",
    "auth/invalid-session-cookie-duration": "A duração do cookie da sessão deve ser um número válido em milissegundos entre 5 minutos e 2 semanas.",
    "auth/invalid-uid": "O uid fornecido deve ser uma string não vazia com no máximo 128 caracteres.",
    "auth/invalid-user-import": "O registro do usuário a ser importado é inválido.",
    "auth/maximum-user-count-exceeded": "O número máximo permitido de usuários para importação foi excedido.",
    "auth/missing-android-pkg-name": "Um nome de pacote Android deverá ser fornecido se o aplicativo Android precisar ser instalado.",
    "auth/missing-continue-uri": "Um URL de continuação válido deve ser fornecido na solicitação.",
    "auth/missing-hash-algorithm": "A importação de usuários com hashes de senha requer que o algoritmo de hash e seus parâmetros sejam fornecidos.",
    "auth/missing-ios-bundle-id": "A solicitação não possui um ID de pacote.",
    "auth/missing-uid": "Um identificador uid é necessário para a operação atual.",
    "auth/missing-oauth-client-secret": "O segredo do cliente de configuração OAuth é necessário para ativar o fluxo de código OIDC.",
    "auth/operation-not-allowed": "O provedor de login fornecido está desativado para seu projeto do Firebase. Habilite-o na seção Método de login do console do Firebase.",
    "auth/phone-number-already-exists": "O phoneNumber fornecido já está em uso por um usuário existente. Cada usuário deve ter um phoneNumber exclusivo.",
    "auth/project-not-found": "Nenhum projeto do Firebase foi encontrado para a credencial usada para inicializar os SDKs Admin. Consulte Configurar um projeto do Firebase para obter documentação sobre como gerar uma credencial para seu projeto e usá-la para autenticar os SDKs administrativos.",
    "auth/reserved-claims": "Uma ou mais declarações de usuário personalizadas fornecidas para setCustomUserClaims() são reservadas. Por exemplo, declarações específicas do OIDC , como (sub, iat, iss, exp, aud, auth_time, etc.) não devem ser usadas como chaves para declarações personalizadas.",
    "auth/session-cookie-expired": "O cookie de sessão do Firebase fornecido expirou.",
    "auth/session-cookie-revoked": "O cookie de sessão do Firebase foi revogado.",
    "auth/too-many-requests": "O número de solicitações excede o máximo permitido.",
    "auth/uid-already-exists": "O uid fornecido já está em uso por um usuário existente. Cada usuário deve ter um uid exclusivo.",
    "auth/unauthorized-continue-uri": "O domínio do URL de continuação não está na lista de permissões. Coloque o domínio na lista de permissões no Firebase Console.",
    "auth/user-not-found": "Não existe nenhum registro de usuário correspondente ao identificador fornecido.",
    "auth/missing-password": "Uma senha não vazia deve ser fornecida."

};