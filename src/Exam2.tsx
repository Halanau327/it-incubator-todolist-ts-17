// // 1)

// import axios from "axios"
// import React, { useEffect, useState } from "react"
// import ReactDOM from "react-dom/client"
//
// type UserType = {
//   id: string
//   name: string
//   age: number
// }
//
// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getUsers() {
//     return instance.get("users", {
//       params: {
//         pageSize: 3,
//         pageNumber: 2,
//       },
//     })
//   },
// }
//
// // App
// export const App = () => {
//   const [users, setUsers] = useState<UserType[]>([])
//
//   useEffect(() => {
//     api.getUsers().then((res) => {
//       setUsers(res.data.items)
//     })
//   }, [])
//
//   return (
//     <>
//       <h1>👪 Список пользователей</h1>
//       {users.map((u) => {
//         return (
//           <div style={{ display: "flex", gap: "10px" }} key={u.id}>
//             <p>
//               <b>name</b>: {u.name}
//             </p>
//             <p>
//               <b>age</b>: {u.age}
//             </p>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
// root.render(<App />)

// // // 📜 Описание:
// // На странице отображен список юзеров из 3-человек.
// // Подгрузились именно эти пользователи не случайно, а из-за query параметров указанных в запросе.
// // Ваша задача переписать строку с запросом таким образом, чтобы получить аналогичный результат (все тех же юзеров),
// // при этом запрещено в ответе использовать символы вопроса и амперсанда.
// // В качестве ответа укажите полностью исправленную строку коду (переносы разрешены)
// //
// //
// // // 🖥 Пример ответа: return instance.get('users=pageSize=3=pageNumber=2')


// 3) +
import ReactDOM from "react-dom/client"
import React, { useEffect } from "react"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"

// // Reducer
// const initState = { find: "", words: [] as string[] }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case "SET_FIND":
//       return { ...state, find: action.find }
//     case "SET_WORDS":
//       return { ...state, words: action.words }
//     default:
//       return state
//   }
// }

// Store
// const rootReducer = combineReducers({ app: appReducer })
//
// const store = configureStore({ reducer: rootReducer })
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setFind = (find: string) => ({ type: "SET_FIND", find }) as const
// const setWords = (words: string[]) => ({ type: "SET_WORDS", words }) as const
// type ActionsType = ReturnType<typeof setFind> | ReturnType<typeof setWords>
//
// // Components
// const defWords = ["a", "ab", "abc", "b", "bc", "c", "d", "ac", "bcd", "cd", "abcd", "bd"]
//
// export const App = () => {
//   const find = useAppSelector((state) => state.app.find)
//   const words = useAppSelector((state) => state.app.words)
//
//   const dispatch = useAppDispatch()
//
//   useEffect(() => {
//     dispatch(setWords(defWords))
//   }, [])
//
//   const mapped = words
//     .filter((w: string) => new RegExp(find, "gi").test(w))
//     .map((w: string, i: number) => <div key={i}>{w}</div>)
//
//   const onChangeHandler = (value: string) => {
//     dispatch(setFind(value))
//   }
//
//   return (
//     <div>
//       <input value={find} onChange={(e) => onChangeHandler(e.target.value)} />
//       {mapped}
//     </div>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )

// // 📜 Описание:
// // На экране отображен массив слов.
// // Ваша задача починить фильтрацию:
// // вводите символы в input и сразу видите как фильтруются данные.
// // В качестве ответа укажите исправленную версию строки.
// //
// // 🖥 Пример ответа: dispatch(setFind(defWords))

//
//
//
// 4) +
// import React from 'react'
// import ReactDOM from 'react-dom/client';
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Сколько всего веток может быть в репозитории ?</h2>
//       <ul>
//         <li>1 - 2 ветки. master(main) и develop</li>
//         <li>2 - Число веток согласовывается в команде разработчиков и устанавливается в git config</li>
//         <li>3 - Всегда есть ветка master (main), develop может быть по соглашения команды разработчиков. Под каждую фичу
//           создается новая ветка. При этом от ветки с фичей запрещено создавать новые ветки</li>
//         <li>4 - Нет правильного ответа</li>
//       </ul>
//     </div>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>);
//
// // 📜 Описание:
// // Сколько всего веток может быть в репозитории ?
// // Может быть несколько вариантов ответа (ответ дайте через пробел).
// // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// // Если указали правильно один вариант (1),
// // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный
//
// // 🖥 Пример ответа: 1

// 5) +

// import ReactDOM from "react-dom/client"
// import { ThunkAction, ThunkDispatch } from "redux-thunk"
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { configureStore, combineReducers } from "@reduxjs/toolkit"
//
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
//   getUsers(search: string) {
//     return instance.get<UsersResponseType>(`users?name=${search}&pageSize=100`)
//   },
// }
//
// const initState = { users: [] as UserType[] }
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
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setUsersAC = (users: UserType[]) => ({ type: "SET_USERS", users }) as const
// type ActionsType = ReturnType<typeof setUsersAC>
//
// // Thunk
// const getFriends =
//   (name: string): AppThunk =>
//     (dispatch) => {
//       api.getUsers(name).then((res) => dispatch(setUsersAC(res.data.items)))
//     }
//
// export const Users = () => {
//   const users = useAppSelector((state) => state.app.users)
//   const dispatch = useAppDispatch()
//   const [name, setName] = useState("")
//   const [timerId, setTimerId] = useState(0)
//
//   useEffect(() => {
//     if (timerId) {
//       clearTimeout(timerId)
//     }
//     setTimerId(
//       +setTimeout(() => {
//         dispatch(getFriends(name))
//       }, 1500),
//     )
//   }, [name])
//
//   return (
//     <div>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       {users.map((u) => {
//         return (
//           <div key={u.id}>
//             <p>
//               <b>name</b>: {u.name}
//             </p>
//           </div>
//         )
//       })}
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

// 📜 Описание:
// На экране input, куда можно вводить символы.
// Откройте Network/ fetch/XHR и поробуйте вводить символы
// Обратите внимание, что все символы которые вы вводите уходят на сервер -
// это плохо.
//
// 🪛 Задача: Починить debounce
// В качестве ответа напишите строку кода которую необходимо исправить или добавить
// для реализации данной задачи
//
// 🖥 Пример ответа: value={name(1500)}

// 7)+

// import ReactDOM from "react-dom/client"
// import { ThunkAction, ThunkDispatch } from "redux-thunk"
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
// import React, { useEffect, useState } from "react"
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
// type ParamsType = {
//   sortBy: string | null
//   sortDirection: "asc" | "desc" | null
// }
//
// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getUsers(params?: ParamsType) {
//     return instance.get<UsersResponseType>("users", { params })
//   },
// }
//
// // Reducer
// const initState = { users: [] as UserType[] }
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

// Store
// const rootReducer = combineReducers({ app: appReducer })
//
// const store = configureStore({ reducer: rootReducer })
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setUsersAC = (users: UserType[]) => ({ type: "SET_USERS", users }) as const
// type ActionsType = ReturnType<typeof setUsersAC>
//
// // Thunk
// const getUsersTC =
//   (searchParams?: ParamsType): AppThunk =>
//   (dispatch) => {
//     api.getUsers(searchParams).then((res) => dispatch(setUsersAC(res.data.items)))
//   }
//
// export const Users = () => {
//   const [activeColumn, setActiveColumn] = useState<ParamsType>({
//     sortBy: null,
//     sortDirection: "asc",
//   })
//
//   const users = useAppSelector((state) => state.app.users)
//
//   const dispatch = useAppDispatch()
//
//   useEffect(() => {
//     dispatch(activeColumn.sortBy ? getUsersTC(activeColumn) : getUsersTC())
//   }, [activeColumn])
//
//   const sortHandler = (sortBy: string) => {
//     setActiveColumn({
//       sortBy: sortBy,
//       sortDirection: activeColumn.sortDirection === "asc" ? "desc" : "asc",
//     })
//   }
//
//   return (
//     <div>
//       <h1>👪 Список пользователей</h1>
//       <table style={table}>
//         <thead>
//           <tr>
//             <th style={th} onClick={() => sortHandler("name")}>
//               Name
//               {activeColumn?.sortBy === "name" &&
//                 (activeColumn.sortDirection === "asc" ? <span> &#8593;</span> : <span> &#8595;</span>)}
//             </th>
//             <th style={th} onClick={() => sortHandler("age")}>
//               Age
//               {activeColumn?.sortBy === "age" &&
//                 (activeColumn.sortDirection === "asc" ? <span> &#8593;</span> : <span> &#8595;</span>)}
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u) => {
//             return (
//               <tr key={u.id}>
//                 <td style={td}>{u.name}</td>
//                 <td style={td}>{u.age}</td>
//               </tr>
//             )
//           })}
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

// 📜 Описание:
// Перед вами таблица с пользователями.
// Ваша задача вместо XXX написать код для сортировки пользователей по имени и возрасту.
// Т.е. при нажатии на name либо age пользователи должны сортироваться в таблице.
// При повторном нажатии на этот же столбец сортировка должна происходить в обратном порядке
// При последующих нажатиях сортировка не должна сбрасываться, а должна продолжать переключаться.
// ❗ сортировка пользователей происходит на сервере, т.е. sort использовать не нужно
// ❗ не используйте запись вида setState(prevState => ...), передайте в setActiveColumn объект

// 🖥 Пример ответа: sort(a, b)
