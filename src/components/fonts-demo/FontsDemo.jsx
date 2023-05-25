const fontsArr = [
  'TT-Norms-ExtraBold-italic-800',
  'TT-Norms-normal-bold',
  'TT-Norms-normal-100',
  'TT-Norms-normal-normal',
  'TT-Norms-Thin-italic-100',
  'TT-Norms-italic-normal',
  'TT-Norms-normal-900',
  'TT-Norms-normal-300',
  'TT-Norms-Black-italic-900',
  'TT-Norms-normal-200',
  'TT-Norms-Light-italic-300',
  'TT-Norms-ExtraLight-italic-200',
  'TT-Norms-Bold-italic-bold',
  'TT-Norms-normal-500',
  'TT-Norms-normal-900',
  'TT-Norms-Medium-italic-500',
  'TT-Norms-Heavy-italic-900',
  'TT-Norms-normal-800',
];

let fontSizes = [1, 2, 3, 4, 5, 6]
function FontsDemo() {
  return (
    <>
      {fontsArr.map((font,i) => ( 
          <div key={i} className={font}>
            <p className="h1">className {font}</p>
            <FontSizes_text font={font} />
          </div> 
      ))}
    </>
  );
}
function FontSizes_text({ font }) {
  return (
    <>
      {fontSizes.map((fontSize, i) => (
        <div key={i} className={`h${fontSize}`}>
          {`h${fontSize}`} Съешь ещё этих мягких французских булок, да выпей же чаю
        </div>
      ))}
      {fontSizes.map((fontSize,i) => (
        <div key={i} className={`h${fontSize}`}>
          {`h${fontSize}`} The quick brown fox jumps over the lazy dog
        </div>
      ))}
    </>
  )
} 

export default FontsDemo;
