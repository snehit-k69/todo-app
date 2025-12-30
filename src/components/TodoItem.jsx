const TodoItem = ({
  item,
  editId,
  editText,
  setEditText,
  onToggle,
  onEdit,
  onSave,
  onDelete
}) => {
  return (
    <li style={{ marginBottom: "12px" }}>
      {editId === item.id ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => onSave(item.id)}>💾</button>
        </>
      ) : (
        <>
          <span
            onClick={() => onToggle(item.id)}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              cursor: "pointer",
              marginRight: "10px"
            }}
          >
            {item.text}
          </span>
          <button onClick={() => onEdit(item)}>✏️</button>
        </>
      )}
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
};

export default TodoItem;
