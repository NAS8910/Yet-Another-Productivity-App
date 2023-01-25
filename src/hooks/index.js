import React, { useState, useEffect } from "react";
import app, { db } from "../firebase";
import { useUserAuth } from "../context/UserAuthContext";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";

export function useTodos() {
  // get user details here
  const { user } = useUserAuth();

  console.log(user.uid);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // let unsubscribe = app
    //   .firestore()
    //   .collection(db, "user", user.uid, "planner")
    //   .onSnapshot((snapshot) => {
    //     const data = snapshot.docs.map((doc) => {
    //       return {
    //         id: doc.id,
    //         ...doc.data(),
    //       };
    //     });
    //     setTodos(data);
    //   });

    // return () => unsubscribe();

    // const unsub = onSnapshot(doc(db, "user", user.uid, "planner"), (doc) => {
    //   console.log("Current data: ", doc.data());
    // });

    let unsubscribe = async () => {
      const q = query(collection(db, "users", user.uid, "planner"));

      const querySnapshot = await getDocs(q);

      const data = querySnapshot.forEach((doc) => {
        console.log(doc.data());
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setTodos(data);
    };

    return () => unsubscribe();
  }, []);

  return todos;
}

export function useProjects(todos) {
  function calculateNumOfTodos(projectName, todos) {
    return todos.filter((todo) => todo.projectName === projectName).length;
  }

  // get user details here
  const { user } = useUserAuth();

  console.log(user.uid);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let unsubscribe = app
      .firestore()
      .collection("user", user.uid, "projects")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const projectName = doc.data().name;

          // const data = querySnapshot.forEach((doc) => {
          //   console.log(doc.data());
          //   console.log(doc.data());
          //   return {
          //     id: doc.id,
          //     ...doc.data(),
          //   };
          // });
          setProjects(data);
        });
      });
    return () => unsubscribe();
  }, []);

  return projects;
}
