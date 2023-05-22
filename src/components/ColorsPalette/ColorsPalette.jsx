const ColorBlock = ({ num, color }) => {
  return ( 
    <div
      className={`p-3 bg-${color}-${num} text-${
        399 > num || num == "A100" || num == "A200" ? "black" : "white"
      }`}
    >.{color}-{num}</div> 
  );
};

const ColorNumListBlock = ({ color }) => {
  let nums = [
    50,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    "A100",
    "A200",
    "A400",
    "A700",
  ];
  return (  
    <ul>
      <li>
        {nums.map((num) => (
            <ColorBlock key={num} num={num} color={color} />
            ))} 
            </li>
          </ul>
  );
};

const ColorList = () => {
  let colors = ["blue", "red", "yellow", "green", "gray", "black"];
  return (
    <div className="d-flex">
      {colors.map((color) => (
        <ColorNumListBlock key={color} color={color} />
      ))}
    </div>
  );
};
export default ColorList;
