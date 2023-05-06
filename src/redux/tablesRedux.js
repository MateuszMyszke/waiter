//selectors
export const getAllTables = (state) => state.tables;
export const getAllStatus = (state) => state.status;
export const getTableById = ({ tables}, id) => tables.find((table) => table.id === id);


// actions
const createActionName = actionName => `app/tables/${actionName}`;
const EDIT_TABLE = createActionName('EDIT_TABLE');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

export const editTable = payload => ({ type: EDIT_TABLE, payload});
export const updateTable = payload => ({ type: UPDATE_TABLE, payload});

export const fetchTable = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTable(tables)));
  }
}

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_TABLE:
      return statePart.map(table => (table.id === action.payload.id ? {...table, ...action.payload } : table));
    case UPDATE_TABLE:
      return [...action.payload]
    default:
      return statePart;
  };
};
export default tablesReducer;