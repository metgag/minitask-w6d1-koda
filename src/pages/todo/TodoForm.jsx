function TodoForm() {
  return (
    <form action="">
      <div>
        <label htmlFor="">Add to-do</label><br />
        <input type="text"
          className="border" />
      </div>
      <button type="submit"
        className="border rounded-md p-1 hover:cursor-pointer
        hover:opacity-[.6]"
      >add +</button>
    </form>
  )
}

export default TodoForm;
