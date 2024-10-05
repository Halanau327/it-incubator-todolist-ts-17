// 8)
//
// import ReactDOM from "react-dom/client"
// import { ThunkAction, ThunkDispatch } from "redux-thunk"
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
// import React, { useEffect } from "react"
// import axios from "axios"
// import { configureStore, combineReducers } from "@reduxjs/toolkit"
//
// // Styles
// const table: React.CSSProperties = {
//   borderCollapse: "collapse",
//   width: "100%",
//   tableLayout: "fixed",
// }
//
// const th: React.CSSProperties = {
//   padding: "10px",
//   border: "1px solid black",
//   background: "lightgray",
//   cursor: "pointer",
// }
//
// const td: React.CSSProperties = {
//   padding: "10px",
//   border: "1px solid black",
// }
//
// // Types
// type UserType = {
//   id: string
//   name: string
//   age: number
// }
//
// type UsersResponseType = {
//   items: UserType[]
//   totalCount: number
// }
//
// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getUsers() {
//     return instance.get<UsersResponseType>("users")
//   },
// }
//
// // Reducer
// const initState = {
//   users: [] as UserType[],
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case "SET_USERS":
//       return { ...state, users: action.users }
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({ app: appReducer })
//
// const store = configureStore({ reducer: rootReducer })
// type RootState = ReturnType<typeof store.getState>
//   type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setUsersAC = (users: UserType[]) => ({ type: "SET-USERS", users })
// type ActionsType = ReturnType<typeof setUsersAC>
//
// // Thunk
// const getUsersTC = (): AppThunk => (dispatch, getState) => {
//   api.getUsers().then((res) => dispatch(setUsersAC(res.data.items)))
// }
//
// // Components
// export const Users = () => {
//   const users = useAppSelector((state) => state.app.users)
//
//   const dispatch = useAppDispatch()
//
//   useEffect(() => {
//     dispatch(getUsersTC())
//   }, [])
//
//   return (
//     <div>
//       <h1>👪 Список пользователей</h1>
//       <table style={table}>
//         <thead>
//         <tr>
//           <th style={th}> Name</th>
//           <th style={th}> Age</th>
//         </tr>
//         </thead>
//         <tbody>
//         {users.map((u) => (
//           <tr key={u.id}>
//             <td style={td}>{u.name}</td>
//             <td style={td}>{u.age}</td>
//           </tr>
//         ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
// root.render(
//   <Provider store={store}>
//     <Users />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Перед вами пустая таблица. Пользователи не подгрузились, т.к. в коде допущена ошибка
// // Ваша задача найти багу, чтобы таблица с пользователями подгрузилась.
// // В качестве укажите исправленную строку кода
// // ❗ Есть несколько вариантов решения данной задачи, в ответах учтены различные варианты
//
// // 🖥 Пример ответа: {users.map(u)=> таблица отрисуйся ВЖУХ ВЖУХ}
//
//
// 6)
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
//
// // Reducer
// const initState = {
//   work: 0,
//   donate: 0,
//   balance: 0,
// };
// type InitStateType = typeof initState;
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case "CHANGE_VALUE":
//       return {
//         ...state,
//         ...action.payload,
//       };
//     default:
//       return state;
//   }
// };
//
// // Store
// const rootReducer = combineReducers({ app: appReducer });
//
// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//
// const changeValue = (payload: any) => ({ type: "CHANGE_VALUE", payload }) as const;
// type ActionsType = ReturnType<typeof changeValue>;
//
// // Components
// export const Income = () => {
//   const work = useAppSelector((state) => state.app.work);
//   const donate = useAppSelector((state) => state.app.donate);
//   const balance = useAppSelector((state) => state.app.balance);
//
//   const dispatch = useAppDispatch();
//
//   return (
//     <div>
//       <div>
//         work:{" "}
//         <input
//           value={work}
//           type={"number"}
//           onChange={(e) => dispatch(changeValue({ work: +e.target.value }))}
//         />
//       </div>
//       <div>
//         donate:{" "}
//         <input
//           value={donate}
//           type={"number"}
//           onChange={(e) => dispatch(changeValue({ donate: +e.target.value }))}
//         />
//       </div>
//
//       <h1>💵 balance: {balance}</h1>
//       <button
//         onClick={() => {
//           // ❗❗❗ XXX ❗❗❗
//         }}
//       >
//         calculate balance
//       </button>
//     </div>
//   );
// };
//
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Income />
//   </Provider>,
// );
//
// // 📜 Описание:
// // Что нужно написать вместо XXX, чтобы вывелась сумма дохода в строке баланса
// //
// // 🖥 Пример ответа: console.log(work + donate)
//
//
// 3)
//
// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
//
// // Styles
// const modal: React.CSSProperties = {
//   position: "fixed",
//   zIndex: 1,
//   left: 0,
//   top: 0,
//   width: "100%",
//   height: "100%",
//   overflow: "auto",
//   backgroundColor: "rgba(23,26,38,0.26)",
// };
//
// const modalContent: React.CSSProperties = {
//   backgroundColor: "#fefefe",
//   margin: "15% auto",
//   padding: "20px",
//   border: "1px solid #888",
//   width: "80%",
// };
//
// // Reducer
// const initState = { tasks: [] as any[] };
// type InitStateType = typeof initState;
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case "ADD_TASK":
//       return {
//         ...state,
//         tasks: [action.task, ...state.tasks],
//       };
//     case "CHANGE_TASK":
//       return {
//         ...state,
//         tasks: [action.task, ...state.tasks.filter((t: any) => t.id !== action.task.id)],
//       };
//     default:
//       return state;
//   }
// };
//
// // Store
// const rootReducer = combineReducers({ app: appReducer });
//
// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//
// const addTask = (task: any) => ({ type: "ADD_TASK", task }) as const;
// const changeTask = (task: any) => ({ type: "CHANGE_TASK", task }) as const;
// type ActionsType = ReturnType<typeof addTask> | ReturnType<typeof changeTask>;
//
// // Components
// const Modal = (props: any) => {
//   const [value, setValue] = useState(props.task?.name || "");
//
//   return (
//     <div style={modalContent}>
//       modal:
//       <input value={value} onChange={(e) => setValue(e.target.value)} />
//       <button onClick={() => props.callback(value)}>{props.title}</button>
//     </div>
//   );
// };
//
// const Task = (props: any) => {
//   const [show, setShow] = useState(false);
//
//   return (
//     <div>
//       {props.task.name}
//       <button onClick={() => setShow(true)}>change</button>
//       {show && (
//         <Modal
//           callback={(value: string) => {
//             props.change(value);
//             setShow(false);
//           }}
//           title={"change"}
//         />
//       )}
//     </div>
//   );
// };
//
// export const Todolist = () => {
//   const tasks = useAppSelector((state) => state.app.tasks);
//   const dispatch = useAppDispatch();
//   const [show, setShow] = useState(false);
//
//   const getId = () => tasks.reduce((acc: number, t: any) => (acc > t.id ? acc : t.id), 0) + 1;
//
//   const mapped = tasks.map((t: any) => (
//     <Task
//       key={t.id}
//       task={t}
//       change={(value: string) => dispatch(changeTask({ id: t.id, name: value }))}
//     />
//   ));
//
//   return (
//     <div style={modal}>
//       <button onClick={() => setShow(true)}>open modal</button>
//       {show && (
//         <Modal
//           callback={(value: string) => {
//             dispatch(addTask({ id: getId(), name: value }));
//             setShow(false);
//           }}
//           title={"add"}
//         />
//       )}
//       {mapped}
//     </div>
//   );
// };
//
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Todolist />
//   </Provider>,
// );
//
// // 📜Описание:
// // Откройте модалку и добавьте какой-нибудь текст.
// // Теперь попробуйте изменить этот текст.
// // При изменении существующей таски в инпуте не отображается старые данные.
// // Ваша задача починить это поведение.
// //
// // В качестве ответа укажите строку кода, которую нужно изменить или добавить,
// // чтобы реализовать данную задачу
// //
// // 🖥 Пример ответа: defaultValue={value}
