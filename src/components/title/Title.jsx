
function Title({ children, titleClassName = null }) {
  return ( 
      <div
        className={`${
          titleClassName ? titleClassName : "w-100 red-500"
        }  p-2 title d-flex rounded-3 justify-content-center align-items-center   mtminus-2`}
      >
        <div>{children}</div>
      </div> 
  );
}
export { Title };
