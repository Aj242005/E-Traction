import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, TextField, Card, CardContent, Grid, Checkbox } from '@mui/material';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/tasks');
    setTasks(res.data);
  };

  const createTask = async () => {
    if (newTask.title && newTask.description) {
      const res = await axios.post('http://localhost:5000/tasks', newTask);
      setTasks([...tasks, res.data]);
      setNewTask({ title: '', description: '' });
    }
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  const toggleTaskCompletion = async (id, completed) => {
    const updatedTask = await axios.put(`http://localhost:5000/tasks/${id}`, { completed: !completed });
    setTasks(tasks.map(task => task._id === id ? updatedTask.data : task));
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Task Manager</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Create New Task</Typography>
              <TextField
                label="Title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                fullWidth
                margin="normal"
              />
              <Button variant="contained" color="primary" onClick={createTask}>Add Task</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Tasks</Typography>
          {tasks.map(task => (
            <Card key={task._id} style={{ marginBottom: '10px' }}>
              <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="body2">{task.description}</Typography>
                <Checkbox
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task._id, task.completed)}
                />
                <Button variant="contained" color="secondary" onClick={() => deleteTask(task._id)}>Delete</Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
