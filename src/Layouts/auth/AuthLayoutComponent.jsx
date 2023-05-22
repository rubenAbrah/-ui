import styles from "./AuthLayout.module.css"; 
function AuthLayoutComponent({wrapperStyle, children }) {
  return (
    <div
      className={`${wrapperStyle}   w-100 vh-100 justify-content-center flex-column  d-flex align-items-center `}
    >
      <div className={`${styles.loginformWrapper} authFormSize`}>{children}</div>
    </div>
  );
}

export default AuthLayoutComponent;
 