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
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        app.views.main.router.navigate("/perfil/")
    }).catch(error => {
        app.dialog.alert(getErrorMessage(error), "Erro!");
    });
})

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário nao encontrado";
    }
    return error.message;
}