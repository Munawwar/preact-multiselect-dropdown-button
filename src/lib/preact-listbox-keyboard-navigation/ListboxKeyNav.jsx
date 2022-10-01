import { createElement } from 'preact';
/**
 * @param {object} props
 * @param {string} props.tag
 * @param {object} [props.keyEvents = {}]
 * @param {() => void} [props.keyEvents.home]
 * @param {() => void} [props.keyEvents.end]
 * @param {() => void} [props.keyEvents.up]
 * @param {() => void} [props.keyEvents.down]
 */
function ListboxKeyNav({ tag, keyEvents = {}, children, className, otherProps }) {
  const onKeyDown = (e) => {
    switch (e.keyCode) {
      case 35:
        if (keyEvents.end) keyEvents.end(e);
        break;
      case 36:
        if (keyEvents.home) keyEvents.home(e);
        break;
      case 38:
        if (keyEvents.up) keyEvents.up(e);
        break;
      case 40:
        if (keyEvents.down) keyEvents.down(e);
        break;
      default:
        return;
    }
  };

  return createElement(
    tag,
    {
      className,
      onKeyDown,
      ...otherProps,
    },
    children
  );
}

export default ListboxKeyNav;
