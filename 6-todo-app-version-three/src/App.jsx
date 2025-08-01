import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleAddButton = () => {
    if (!todoName || !todoDate) {
      alert("Please enter both Todo name and date!");
      return;
    }
    const newTodo = { name: todoName, dueDate: todoDate };
    setTodoItems([...todoItems, newTodo]);
    setTodoName("");
    setTodoDate("");
  };

  const handleRemove = (todoNameToDelete) => {
    const updatedTodos = todoItems.filter(
      (item) => item.name !== todoNameToDelete
    );
    setTodoItems(updatedTodos);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      {/* Header */}
      <Card sx={{ mb: 3, bgcolor: "#1565c0", color: "#fff" }}>
        <CardContent>
          <Typography variant="h4" align="center" fontWeight="bold">
            TODO APP
          </Typography>
        </CardContent>
      </Card>

      {/* Input Card */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Add New Todo
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Todo Name"
                variant="outlined"
                value={todoName}
                onChange={(e) => setTodoName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                type="date"
                label="Due Date"
                InputLabelProps={{ shrink: true }}
                value={todoDate}
                onChange={(e) => setTodoDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                fullWidth
                variant="contained"
                color="success"
                onClick={handleAddButton}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Todo List */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          {todoItems.length === 0 ? (
            <Typography align="center" color="textSecondary">
              You don't have any task today! Enjoy your day.
            </Typography>
          ) : (
            <List>
              {todoItems.map((item, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      color="error"
                      onClick={() => handleRemove(item.name)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={item.name}
                    secondary={Due: ${item.dueDate}}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;