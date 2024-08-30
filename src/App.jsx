import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import { Box, Heading, Icon } from "@chakra-ui/react";
import { RiTaskLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import TaskCard from "./Components/TaskCard";

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasksRef = collection(db, "tasks");

        onSnapshot(tasksRef, (snapshot) => {
          const tasksList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          console.log(tasksList);
          setTask(tasksList);
          return tasksList;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getTasks();
  }, []);

  return (
    <>
      <Dashboard />

      <Box
        gap="5"
        mt="16"
        justifyContent="center"
        alignItems="center"
        borderRadius="10px"
        display="flex"
        width="1500px"
        // bg="red"
        flexDirection="column"
      >
        {task.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Box>
    </>
  );
}

export default App;
