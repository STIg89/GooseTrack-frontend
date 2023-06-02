const ColumnHeadBar = ({ todoHead }) => {
  return (
    <div>
      <div>{todoHead}</div>

      <button type="button" onClick={() => console.log('click add btn')}>
        +
      </button>
    </div>
  );
};

export default ColumnHeadBar;
