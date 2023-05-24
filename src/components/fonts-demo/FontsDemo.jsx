function FontsDemo() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {arr.map((el) => (
        <div className={`h${el}`}>
          Съешь ещё этих мягких французских булок, да выпей же чаю
        </div>
      ))}
      {arr.map((el) => (
        <div className={`h${el} bold`}>
          The quick brown fox jumps over the lazy dog
        </div>
      ))}
     </>
  );
}

export default FontsDemo;
