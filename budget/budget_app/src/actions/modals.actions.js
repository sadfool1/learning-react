export const openEditModal = (id) => {
  return {type: "OPEN_EDIT_ENTRY", payload:{id}}
}

export const closeEditModal = () => {
  return {type: "CLOSE_EDIT_ENTRY"}
}
