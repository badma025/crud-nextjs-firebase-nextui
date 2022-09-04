import { Button, Input, Spacer, Text } from "@nextui-org/react";
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase.js";


export default function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const query = collection(db, "todos");
    const unsubscribe = onSnapshot(query, (snapshot) => {
      setTodos(
        // @ts-ignore
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });

    return unsubscribe;
  }, []);
  return (
    <div
      style={{
        marginTop: "5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      <Text
        h1
        size={60}
        css={{
          fontSize: "$2xl",
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
          textAlign: "center",
        }}
        weight="bold">
        CRUD
      </Text>
      <Spacer y={2.5} />

      <div
        style={{
          justifyContent: "center",
          margin: "0px auto",
          display: "flex",
        }}>
        <Input
          css={{
            maxWidth: "400px",
          }}
          onChange={(event) => setTodo(event.target.value)}
          underlined
          initialValue="Add Item..."
        />
        <Spacer x={2} />
        <Button
          shadow
          color="gradient"
          size="md"
          auto
          disabled={!todo}
          onClick={async () => {
            await addDoc(collection(db, "todos"), {
              task: todo,
            });
            setTodo("")
          }}>
          Add
        </Button>
      </div>

      <div
        style={{
          marginTop: "3rem",
        }}>
        <Text
          h1
          size={60}
          css={{
            fontSize: "$2xl",
            textGradient: "45deg, $pink600 -20%, $blue600 50%",
            textAlign: "center",
          }}
          weight="bold">
          Tasks
        </Text>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0px auto",
            marginTop: "3rem",
            flexDirection: "column",
          }}>
          {todos.map((todo) => {
            return (
              <div
                key={todo.id}
                style={{
                  display: "flex",

                  justifyContent: "center",
                  margin: "0px auto",
                  marginTop: "3rem",
                }}>
                <Text
                  p
                  size={60}
                  css={{
                    fontSize: "$xl",
                    textAlign: "center",
                  }}>
                  {todo.task}
                </Text>

                <Spacer x={2.5} />

                <Button size="sm" color="error" shadow auto
                onClick={async () => {
                await deleteDoc(doc(db, "todos", todo.id))
                }}
                >
                  Delete
                </Button>
                <Spacer x={2} />

                <Button size="sm" shadow color="secondary" auto
                onClick={async () => {
                   const newValue = prompt("Enter new value")
                   await updateDoc(doc(db, "todos", todo.id), {
                    task: newValue 
                   })
                }}
                >
                  Edit
                </Button>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
