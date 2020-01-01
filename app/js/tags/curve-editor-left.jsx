import { h } from 'preact';
import CodeButton from './code-button';
import MinimizeButton from './minimize-button';
import MaximizeButton from './maximize-button';
import IconDivider from './icon-divider';
import PointControls from './point-controls';

const CLASSES = require('../../css/blocks/curve-editor.postcss.css.json');

const CurveEditorLeft = ({ state }) => {
  return (
    <div className={CLASSES['curve-editor__left']} id="js-left-panel">
      <MinimizeButton state={state} />
      <MaximizeButton state={state} />
      <CodeButton state={state} />
      <IconDivider />
      <PointControls
        state={state}
        className={CLASSES['curve-editor__anchor-buttons']}
      />
    </div>
  );
};

export default CurveEditorLeft;
