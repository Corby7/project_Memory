import "./Modal.css";

export default function Modal({ title, children }) {
  return (
    <div className="modal">
      {title && <h3 className="modal-title">{title}</h3>}
      <div className="modal-body">{children}</div>
    </div>
  );
}
