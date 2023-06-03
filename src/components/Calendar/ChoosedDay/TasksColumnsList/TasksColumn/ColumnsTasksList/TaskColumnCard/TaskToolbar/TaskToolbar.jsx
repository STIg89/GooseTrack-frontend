import Icons from '../../../../../../../../images/sprite.svg';

const TaskToolBar = () => {
  return (
    <div>
      <svg stroke="#111111" fill="transparent" width={14} height={14}>
        <use href={`${Icons}#task-move-sf`}></use>
      </svg>
      <svg stroke="#111111" fill="transparent" width={14} height={14}>
        <use href={`${Icons}#task-edit-sf`}></use>
      </svg>
      <svg stroke="#111111" fill="transparent" width={14} height={14}>
        <use href={`${Icons}#task-trash-sf`}></use>
      </svg>
    </div>
  );
};
export default TaskToolBar;
