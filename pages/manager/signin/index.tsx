import styles from './styles.module.scss';

const SignIn = () => {
  return (
    <div className={styles.signInBox}>

      <h2>Login</h2>

      <div className={styles.inputBox}>
        <input type="text" placeholder="Usuário"/>
      </div>

      <div className={styles.inputBox}>
        <input type="text" placeholder="Senha"/>
      </div>

      <button>Entrar</button>

      <a href="#">Esqueceu sua senha ?</a>

    </div>
  )
}

export default SignIn;