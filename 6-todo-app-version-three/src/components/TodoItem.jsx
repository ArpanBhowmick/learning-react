function ToduItem({ todoName, toduDate, handleRemove }) {
  // let todoName = "Buy Milk";
  // let toduDate = "1/7/2025";

  
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{toduDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => handleRemove(todoName, toduDate)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToduItem;
