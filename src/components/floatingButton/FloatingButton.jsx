import SpeedDialAction from "devextreme-react/speed-dial-action";
import notify from "devextreme/ui/notify";
import './FloatingButton.css'
import "ionicons/dist/css/ionicons.css";
function FloatingButton({ speedDialActions }) {
  return (
    <> 
      {speedDialActions.map((el,i) => (
        <SpeedDialAction
        key={i}
          icon={el.icon}
          hint={el.hint}
          onClick={() => showNotification(el.notificaion)}
          elementAttr={el.elementAttr}
          label={el.label}
        />
      ))}
    </>
  );
}
function showNotification(message) {
  notify(
    {
      message: message,
      position: {
        my: "left bottom",
        at: "left bottom",
        of: "#app-container",
        offset: "16 -16",
      },
      minWidth: null,
      width: 320 * 0.7,
    },
    "info",
    1000
  );
}
export default FloatingButton