// import { useState } from "react";

// function AddTodo({ handleAddButton }) {
//   const [todoItemName, setTodoName] = useState("");
//   const [todoItemDueDate, setDueDate] = useState("");

//   const handleNameChange = (event) => {
//     setTodoName(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDueDate(event.target.value);
//   };

//   const handleButtonClicked = () => {
//     if (!todoItemName || !todoItemDueDate) {
//       alert("please enter both todo name and date!");
//       return;
//     }
//     handleAddButton(todoItemName, todoItemDueDate);
//     setTodoName("");
//     setDueDate("");
//   };

//   return (
//     <div className="container text-center">
//       <div className="row kg-row">
//         <div className="col-6">
//           <input
//             type="text"
//             placeholder="Enter Todo Here"
//             value={todoItemName}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div className="col-4">
//           <input
//             type="date"
//             value={todoItemDueDate}
//             onChange={handleDateChange}
//           />
//         </div>
//         <div className="col-2">
//           <button
//             type="button"
//             className="btn btn-success kg-button"
//             onClick={handleButtonClicked}
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddTodo;




import { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Grid,
  Typography,
} from "@mui/material";

function AddTodo({ handleAddButton }) {
  const [todoItemName, setTodoName] = useState("");
  const [todoItemDueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleButtonClicked = () => {
    if (!todoItemName || !todoItemDueDate) {
      alert("Please enter both todo name and date!");
      return;
    }
    handleAddButton(todoItemName, todoItemDueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "2rem auto", padding: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Add New Todo
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Todo Name"
              value={todoItemName}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type="date"
              label="Due Date"
              InputLabelProps={{ shrink: true }}
              value={todoItemDueDate}
              onChange={handleDateChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              fullWidth
              variant="contained"
              color="success"
              onClick={handleButtonClicked}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default AddTodo;


