import { h } from 'preact';
import PointControls from './point-controls';

const CLASSES = require('../../css/blocks/curve-editor.postcss.css.json');

const CurveEditorLeft = ({ state }) => {
  return (
    <div className={CLASSES['curve-editor__left']} data-is-minimized={state.controls.isMinimize} id="js-left-panel">
      <PointControls
        state={state}
        className={CLASSES['curve-editor__anchor-buttons']}
      />
    </div>
  );
};

export default CurveEditorLeft;
